import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const channelHandle = process.env.YT_HANDLE || "COS_LAT";
const maxItems = Number(process.env.YT_MAX || "5");
const outputPath = resolve("lib/youtube.ts");

const fetchText = async (url) => {
  const res = await fetch(url, {
    headers: {
      "user-agent": "coslat-youtube-feed-updater/1.0",
      "accept-language": "es-ES,es;q=0.9,en;q=0.8",
    },
  });
  if (!res.ok) {
    throw new Error(`Request failed (${res.status}) for ${url}`);
  }
  return res.text();
};

const extractChannelId = (html) => {
  const patterns = [
    /\"browseId\"\s*:\s*\"(UC[\w-]{22})\"/,
    /\"channelId\"\s*:\s*\"(UC[\w-]{22})\"/,
    /<meta itemprop=\"channelId\" content=\"(UC[\w-]{22})\"/,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return match[1];
  }

  return null;
};

const resolveChannelId = async () => {
  const channelUrl = `https://www.youtube.com/@${channelHandle}`;
  const html = await fetchText(channelUrl);
  const channelId = extractChannelId(html);
  if (!channelId) {
    throw new Error(`Unable to resolve channelId from ${channelUrl}`);
  }
  return channelId;
};

const decodeHtml = (value) => {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'");
};

const extractTagValue = (entry, tag) => {
  const escapedTag = tag.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
  const regex = new RegExp(`<${escapedTag}>([\\s\\S]*?)</${escapedTag}>`);
  const match = entry.match(regex);
  return match?.[1] ? decodeHtml(match[1].trim()) : "";
};

const parseEntries = (xml) => {
  return xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
};

const buildVideos = (entries) => {
  return entries
    .map((entry) => {
      const id = extractTagValue(entry, "yt:videoId");
      const title = extractTagValue(entry, "title");
      const published = extractTagValue(entry, "published") || extractTagValue(entry, "updated");

      if (!id || !title) return null;

      return {
        id,
        title,
        published,
        url: `https://www.youtube.com/shorts/${id}`,
        thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      };
    })
    .filter(Boolean)
    .slice(0, maxItems);
};

const formatTsFile = ({ videos, updatedAt }) => {
  const videosJson = JSON.stringify(videos, null, 2);
  const updatedJson = JSON.stringify(updatedAt);

  return `export type YoutubeVideo = {\n` +
    `  id: string;\n` +
    `  title: string;\n` +
    `  url: string;\n` +
    `  thumbnail: string;\n` +
    `  published: string;\n` +
    `};\n\n` +
    `export const youtubeUpdatedAt = ${updatedJson};\n\n` +
    `export const youtubeVideos: YoutubeVideo[] = ${videosJson};\n`;
};

const main = async () => {
  const channelId = await resolveChannelId();
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  const xml = await fetchText(feedUrl);
  const entries = parseEntries(xml);
  const videos = buildVideos(entries);
  const updatedAt = new Date().toISOString();

  if (videos.length === 0) {
    throw new Error("No videos found in feed.");
  }

  const content = formatTsFile({ videos, updatedAt });
  await writeFile(outputPath, content, "utf8");

  console.log(`Updated ${videos.length} videos from ${feedUrl}`);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
