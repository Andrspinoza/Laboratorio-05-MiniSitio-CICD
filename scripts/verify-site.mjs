import { readFileSync } from "node:fs";

const requiredFiles = ["index.html", "styles.css", "script.js"];
for (const file of requiredFiles) {
  const content = readFileSync(file, "utf8");
  if (content.trim().length === 0) {
    throw new Error(`${file} no puede estar vacío.`);
  }
}

const html = readFileSync("index.html", "utf8");
if (!html.includes('script src="script.js"')) {
  throw new Error("index.html debe cargar script.js.");
}

console.log("Verificación del sitio completada correctamente.");
