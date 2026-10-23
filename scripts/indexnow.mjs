// IndexNow notifier: reads URLs from dist sitemap and pings IndexNow.
// Works on Windows, macOS, and Linux (replaces the old curl one-liner).
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const HOST = 'zeepage.com';
const KEY = '0e84c4ba487644b3b467c8f7923ede1d';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const CHUNK_SIZE = 500; // IndexNow accepts up to 10,000 URLs per request; 500 is a safe batch

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

async function collectUrls() {
  const urls = [];
  const sitemapPath = path.join(root, 'dist', 'sitemap-0.xml');
  const xml = await readFile(sitemapPath, 'utf8');
  for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    urls.push(m[1].trim());
  }
  return urls;
}

async function ping(urls, attempt = 1) {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    return res.status;
  } catch (err) {
    if (attempt >= 3) throw err;
    console.log(`[indexnow] Retry batch after ${attempt}s...`);
    await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    return ping(urls, attempt + 1);
  }
}

try {
  const urls = await collectUrls();
  if (urls.length === 0) {
    console.log('[indexnow] No URLs found in dist/sitemap-0.xml, skipping.');
    process.exit(0);
  }
  console.log(`[indexnow] Submitting ${urls.length} URLs to IndexNow...`);
  for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
    const chunk = urls.slice(i, i + CHUNK_SIZE);
    const status = await ping(chunk);
    if (status >= 200 && status < 300) {
      console.log(`[indexnow] Batch ${Math.floor(i / CHUNK_SIZE) + 1}: OK (HTTP ${status}, ${chunk.length} URLs)`);
    } else {
      console.error(`[indexnow] Batch ${Math.floor(i / CHUNK_SIZE) + 1}: FAILED (HTTP ${status})`);
      process.exit(1);
    }
  }
  console.log('[indexnow] Done. Bing will re-crawl submitted URLs within 1-2 hours.');
} catch (err) {
  console.error(`[indexnow] Error: ${err.message}`);
  process.exit(1);
}
