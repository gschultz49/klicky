const fs = require("fs");

console.log(`Current directory: ${__dirname}`);

let ready = true;

if (fs.existsSync("package-lock.json")) {
  console.log("package-lock.json exists");
} else {
  console.log("package-lock.json does not exist");
  ready = false;
}

if (fs.existsSync("node_modules")) {
  console.log("node_modules exists");
} else {
  console.log("node_modules.does not exist");
  ready = false;
}

if (ready) {
  console.log("SUCCESS: All packages successfully installed!");
}
