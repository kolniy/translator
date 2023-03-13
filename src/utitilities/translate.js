import { v2 } from "@google-cloud/translate";

const Translate = v2.Translate;

const translate = new Translate({
  projectId: process.env.GOOGLE_TRANSLATE_PROJECT_ID,
  key: process.env.GOOGLE_TRANSLATE_API_KEY,
});

async function translateText(text, target) {
  // Run request
  const [tranlation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${tranlation}`);
  return tranlation;
}

export default translateText;
