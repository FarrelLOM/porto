import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'visits.json');

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify({ count: 0 }, null, 2));
  }
}

export default function handler(req, res) {
  try {
    ensureDataFile();
    const raw = fs.readFileSync(dataFile, 'utf8');
    const data = raw ? JSON.parse(raw) : { count: 0 };

    // Parse cookies to check for an existing visitor id
    const cookieHeader = req.headers && req.headers.cookie;
    let hasVisitor = false;
    if (cookieHeader) {
      const cookies = cookieHeader.split(';').map(c => c.trim());
      for (const c of cookies) {
        if (c.startsWith('visitor_id=')) {
          hasVisitor = true;
          break;
        }
      }
    }

    if (req.method === 'POST') {
      // Only increment when we don't have a visitor cookie
      if (!hasVisitor) {
        data.count = (data.count || 0) + 1;
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

        // set a long-lived, HttpOnly cookie so subsequent refreshes don't increment
        const visitorId = Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
        const maxAge = 60 * 60 * 24 * 365 * 10; // 10 years in seconds
        res.setHeader('Set-Cookie', `visitor_id=${visitorId}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax`);
      }
      return res.status(200).json({ count: data.count });
    }

    // default: return current count
    return res.status(200).json({ count: data.count || 0 });
  } catch (err) {
    console.error('visits api error', err);
    return res.status(500).json({ error: 'unable to read/write visits' });
  }
}
