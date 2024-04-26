function displayFact(response) {
  new Typewriter("#fact", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    pauseFor: 200000,
  });
  let submitButton = document.querySelector("#submit-button");
  submitButton.removeAttribute("disabled");
}

function generateFact(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let apiKey = "a35ff4541eo4f18t9b045cc14b82545c";
  let prompt = `User instructions: Generate a fun fact about ${instructionsInput}`;

  let context =
    "You are an expert who knows all of the fun fact about everything. Your mission is to generate a short fact in basic HTML. Make sure to follow the user instructions. Do not include a title to the fact. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factElement = document.querySelector("#fact");
  factElement.classList.remove("hidden");
  factElement.innerHTML = `<div class="loader"></div>`;

  axios.get(apiUrl).then(displayFact);
}

let factFormElement = document.querySelector("#generator-form");
factFormElement.addEventListener("submit", generateFact);
