/* const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://type.fit/api/quotes/";

async function getquote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.text;
    author.innerHTML = data.author;
    console.log(data);
}
getquote(api_url); */

const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const quoteBtn = document.getElementById("button");
const soundBtn = document.getElementById("volume");
const copyBtn = document.getElementById("copy")
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "loading Quote...";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        quoteAuthor.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    } )
};
soundBtn.addEventListener("click",()=>{
    const wording = new SpeechSynthesisUtterance('${quoteText.innertext} by ${quoteAuthor.innertext}');
    speechSynthesis.speak(wording);
});

copyBtn.addEventListener("click", ()=> {
    navigator.clipboard.writeText(quoteText.innerText);
} );
quoteBtn.addEventListener("click", randomQuote);


const day = document.getElementById("day");
const thisDay = new Date().toString();
day.setAttribute("datetime", thisDay);
day.textContent = thisDay;