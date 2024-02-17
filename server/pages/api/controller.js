import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = fs.readdirSync("../");
  console.log(dir);
  // Define the file path relative to the root of your server directory
  const filePath = path.join(process.cwd(), "data", "yourfile.txt");

  // Read the file asynchronously
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Handle errors (e.g., file not found)
      res.status(500).json({ error: "Error reading file" });
      return;
    }

    // Send the file content back to the client
    res.status(200).json({ content: data });
  });
}
