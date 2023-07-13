const quoteBorde = document.querySelector('.quotebord');
const author = document.querySelector('#author');

const btnGenerate = document.querySelector('#generate');

var randomQuotes = [];
let index = 0;
const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {

  if (xhttp.readyState == 4 && xhttp.status == 200) {
    let response = xhttp.responseText;
    randomQuotes = JSON.parse(response);

  }
}
xhttp.open('Get', "https://type.fit/api/quotes", true);
xhttp.send();

btnGenerate.addEventListener('click', () => {

  if (randomQuotes.length > 1) {
    quoteBorde.textContent = randomQuotes[index].text;
    if (randomQuotes[index].author) {
  author.textContent = randomQuotes[index].author;
    }else{
      author.textContent = "unknown";
    }
    ++index;
  } else {
    quoteBorde.textContent = "Loading the quote content......";
    author.textContent = 'Loading...';
    ++index;
  }


});
/*
function getQuote() {
  return randomQuotes.length > index ? [randomQuotes[index].text, randomQuotes.author] : ["Error"];
}*/