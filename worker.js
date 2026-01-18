const LEADERBOARD_KEY = "leaderboard";
const MAX_ENTRIES = 50;
const MIN_SUBMIT_INTERVAL_MS = 10_000;
const MIN_TIME_SECONDS = 5;
const MAX_TIME_SECONDS = 60 * 60;

const jsonResponse = (data, status = 200) => {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
};

const formatTime = (seconds) => {
  const safe = Number.isFinite(seconds) && seconds >= 0 ? seconds : 0;
  const mins = Math.floor(safe / 60).toString().padStart(2, "0");
  const secs = Math.floor(safe % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

const toPublicEntry = (entry) => ({
  name: entry.name,
  score: entry.score,
  time: entry.time
});

const normalizeEntry = (entry) => {
  const timeSeconds = Number(entry.timeSeconds);
  return {
    name: entry.name,
    score: Number(entry.score),
    timeSeconds,
    time: formatTime(timeSeconds)
  };
};

const loadLeaderboard = async (kv) => {
  const raw = await kv.get(LEADERBOARD_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveLeaderboard = async (kv, list) => {
  await kv.put(LEADERBOARD_KEY, JSON.stringify(list));
};

const loadRateLimit = async (kv, key) => {
  const raw = await kv.get(key);
  return raw ? Number(raw) : 0;
};

const saveRateLimit = async (kv, key, ts) => {
  await kv.put(key, String(ts));
};

const sortLeaderboard = (list) => {
  return list.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.timeSeconds !== b.timeSeconds) return a.timeSeconds - b.timeSeconds;
    return a.name.localeCompare(b.name);
  });
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/leaderboard" && request.method === "GET") {
      const list = await loadLeaderboard(env.RESULTS_KV);
      const sorted = sortLeaderboard(list).slice(0, MAX_ENTRIES);
      return jsonResponse({ leaderboard: sorted.map(toPublicEntry) });
    }

    if (url.pathname === "/api/submit" && request.method === "POST") {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const rateKey = `rate:${ip}`;
      const now = Date.now();
      const last = await loadRateLimit(env.RESULTS_KV, rateKey);
      if (last && now - last < MIN_SUBMIT_INTERVAL_MS) {
        return jsonResponse({ error: "Too many submissions" }, 429);
      }

      let body;
      try {
        body = await request.json();
      } catch {
        return jsonResponse({ error: "Invalid JSON body" }, 400);
      }

      const name = typeof body.name === "string" ? body.name.trim() : "";
      const score = Number(body.score);
      const timeSeconds = Number(body.timeSeconds);
      if (!name || name.length > 10) {
        return jsonResponse({ error: "Invalid name" }, 400);
      }
      if (!Number.isFinite(score) || score < 0 || score > 100) {
        return jsonResponse({ error: "Invalid score" }, 400);
      }
      if (score % 20 !== 0) {
        return jsonResponse({ error: "Invalid score" }, 400);
      }
      if (!Number.isFinite(timeSeconds) || timeSeconds < 0) {
        return jsonResponse({ error: "Invalid time" }, 400);
      }
      if (timeSeconds < MIN_TIME_SECONDS || timeSeconds > MAX_TIME_SECONDS) {
        return jsonResponse({ error: "Invalid time" }, 400);
      }

      const newEntry = normalizeEntry({ name, score, timeSeconds });
      const list = await loadLeaderboard(env.RESULTS_KV);
      list.push(newEntry);
      const sorted = sortLeaderboard(list);
      const rank = sorted.findIndex((item) =>
        item.name === newEntry.name &&
        item.score === newEntry.score &&
        item.timeSeconds === newEntry.timeSeconds
      ) + 1;

      const trimmed = sorted.slice(0, MAX_ENTRIES);
      await saveLeaderboard(env.RESULTS_KV, trimmed);
      await saveRateLimit(env.RESULTS_KV, rateKey, now);

      return jsonResponse({
        leaderboard: trimmed.map(toPublicEntry),
        rank,
        entry: toPublicEntry(newEntry)
      });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Not found", { status: 404 });
  }
};
