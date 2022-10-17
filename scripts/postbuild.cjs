const fs = require("fs");
const path = require("path");

const buildPath = path.join(__dirname, "..", "build");
const indexPath = buildPath + "/index.html";

fs.readFile(indexPath, 'utf8', (error, data) => {
  if(error) {
    console.error("Failed to read index.html file");
    return;
  }

  const processed = data.replaceAll(
    /<link rel="modulepreload" href="([^.]+\.js)">/g, 
    (_, url) => `<script defer async src="${url}"></script>`
  );
  
  fs.writeFile(indexPath, processed, 'utf8', error => {
    if (error) console.error(error);
  });
});