import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import translateRoute from "./routers/translate.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 7000;

//  Define paths for express config
const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewsPath);

// setup static directory to serve
app.use(express.static(publicDirectory));
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Some username...",
  });
});

app.use("/api/v1/translate", translateRoute);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
