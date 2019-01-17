/* eslint-disable no-console */
import fs from "fs";
import path from "path";
import { courses, authors } from "./mockData";

const data = JSON.stringify({ courses, authors });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err: Error) {
  err ? console.log(err) : console.log("Mock DB created.");
});

// Note, without the imports above, this line below would be necessary to clarify that this file should be treated as a module per https://stackoverflow.com/a/41975448/26180
// TS looks for an import or export keyword to determine if it's an ES module.
// Without this, path conflicts when I import it.
export {};
