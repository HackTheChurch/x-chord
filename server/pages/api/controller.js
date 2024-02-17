import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = fs.readdirSync("../tmp/");

  let instructions = new Array();

  // // read files
  // dir.map((file) => {
  //   const content = fs.readFileSync(`../tmp/log/${file}`, "utf8");
  //   const json = JSON.parse(content);
  //   instructions.push(json);
  // });

  // // delete files
  // dir.map((file) => {
  //   fs.unlinkSync(`../tmp/log/${file}`);
  // });

  const sloka = fs.readFileSync("../tmp/sloka/cislosloky.txt", "utf8");

  // Send the file content back to the client
  res
    .status(200)
    .json({ content: { instruct: instructions, sloka: parseInt(sloka) } });
}
