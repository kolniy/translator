import express from "express";
import translateText from "../utitilities/translate.js";

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({
      errors: [{ msg: "invalid request" }],
    });
  }
  const { text, target } = req.body;

  if (text.length === 0) {
    return res.status(400).json({
      errors: [{ msg: "text cannot be empty" }],
    });
  }

  if (target.length === 0) {
    return res.status(400).json({
      errors: [{ msg: "text cannot be empty" }],
    });
  }
  try {
    const translation = await translateText(text, target);
    res.json({ translation });
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
});

export default router;
