import fs from "fs/promises";
import path from "path";

const RECEIVER_EMAIL = "farrellom21@gmail.com";

const getStoragePaths = () => {
  const dataDir = path.join(process.cwd(), "data");
  const recordsFile = path.join(dataDir, "contact-records.json");
  const draftFile = path.join(dataDir, `contact-email-draft-${Date.now()}.json`);
  return { dataDir, recordsFile, draftFile };
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All form fields are required." });
  }

  const timestamp = new Date().toISOString();
  const payload = {
    receiver: RECEIVER_EMAIL,
    name,
    email,
    subject,
    message,
    timestamp,
  };

  const { dataDir, recordsFile, draftFile } = getStoragePaths();

  try {
    await fs.mkdir(dataDir, { recursive: true });

    const existing = await fs.readFile(recordsFile, "utf8").catch(() => "[]");
    const records = JSON.parse(existing || "[]");
    records.push(payload);
    await fs.writeFile(recordsFile, JSON.stringify(records, null, 2), "utf8");

    await fs.writeFile(
      draftFile,
      JSON.stringify(
        {
          to: RECEIVER_EMAIL,
          from: email,
          subject: `[Contact form] ${subject}`,
          body: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
          timestamp,
        },
        null,
        2
      ),
      "utf8"
    );

    console.log("Contact request recorded:", payload);
    return res.status(200).json({ message: "Contact request recorded and ready for delivery to modar@gmail.com." });
  } catch (error) {
    console.error("Failed to write contact record:", error);
    return res.status(500).json({ error: "Unable to record contact request." });
  }
}
