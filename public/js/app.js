const $translateForm = document.querySelector("form");
const $textInput = document.querySelector("#textareaInput");
const $targetLanguageInput = document.querySelector("#targetLanguageInput");
const submitBtn = document.querySelector("#btn-submit");
const outPutParagraph = document.querySelector(".translated-text");

$translateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = $textInput.value;
  const target = $targetLanguageInput.value;

  submitBtn.textContent = "Loading...";

  const body = {
    text,
    target,
  };

  fetch("/api/v1/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json().then((data) => {
        console.log(data);
        submitBtn.textContent = "Submit";
        outPutParagraph.textContent = data.translation;
      });
    })
    .catch((err) => {
      console.log(err);
      alert("Error translating that text...");
      submitBtn.textContent = "Submit";
    });
});
