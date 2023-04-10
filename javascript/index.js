const API_KEY = "eKvEmLrODhpo3gRfn4Prkw==20H1Xgc3vu4RnxXV";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
  },
};
const API_URLOfDJ = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const API_URLOfJ = "https://api.api-ninjas.com/v1/jokes?limit=1";
const btn = document.getElementById("btn");
const getJoke = async () => {
  try {
    joke.innerText = "Updating...";
    btn.disabled = true;
    btn.innerText = "Loading...";

    const response = await fetch(API_URLOfDJ, options);
    const data = await response.json();
    console.log(data[0].joke);
    joke.innerText = data[0].joke;

    btn.disabled = false;
    btn.innerText = "Tell Me a Joke";
  } catch (error) {
    joke.innerText = error.message;
    joke.innerText = "Internet in not enable. Enable it and try again...";
  }
};
btn.addEventListener("click", getJoke);
const joke = document.getElementById("joke");

const btn1 = document.getElementById("btn1");
const getJoke1 = async () => {
  try {
    joke1.innerText = "Updating...";
    btn1.disabled = true;
    btn1.innerText = "Loading...";

    const response = await fetch(API_URLOfJ, options);
    const data = await response.json();
    console.log(data[0].joke);
    joke1.innerText = data[0].joke;
    btn1.disabled = false;
    btn1.innerText = "Tell Me a Joke";
  } catch (error) {
    joke1.innerText = error.message;
    joke1.innerText = "Internet in not enable. Enable it and try again...";
  }
};
btn1.addEventListener("click", getJoke1);
const joke1 = document.getElementById("joke1");
