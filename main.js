const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://type.fit/api/quotes/";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
    console.log(data);
}
getquote(api_url);


const day = document.getElementById("day");
const thisDay = new Date().toDateString();
day.setAttribute("datetime", thisDay);
day.textContent = thisDay;

