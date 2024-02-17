import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = fs.readdirSync("../tmp/");

  let instructions = new Array();

  // read files
  dir.map((file) => {
    const content = fs.readFileSync(`../tmp/${file}`, "utf8");
    const json = JSON.parse(content);
    instructions.push(json);
  });

  // delete files
  dir.map((file) => {
    fs.unlinkSync(`../tmp/${file}`);
  });

  // Send the file content back to the client
  res.status(200).json({ content: instructions });
}
