/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: "“people who have no hold over their process of thinking ara likely to be ruined by liberty of thought.”",
        source: "Allama Iqbal",
        citation: "Book",
        year: "1939"

    },
    {
        quote: "Writing books is the closest men ever come to childbearing.",
        source: "Norman Mailer",
        citation: "Book",
        year: "1998"

    },
    {
        quote: "Lighten up, just enjoy life, smile more, laugh more, and don’t get so worked up about things",
        source: "Kenneth Branagh",
        year: "2004"

    },
    {
        quote: "The most valuable of all talents is that of never using two words when one will do",
        source: "Thomas Jefferson",

    },
    {
        quote: "Do stuff. Be clenched, curious. Not waiting for inspiration’s shove or society’s kiss on your forehead. Pay attention. It’s all about paying attention. Attention is vitality. It connects you with others. It makes you eager. Stay eager",
        source: "Susan Sontag",
        citation: "Conference"

    }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // varibale to get the random number for the index
    let randomQuote = Math.floor(Math.random() * quotes.length);
// this returns the random object from quotes with random index number
return quotes[randomQuote];
}



/***
 * `printQuote` function
 * 
***/
function printQuote() {
    let result = getRandomQuote();
    let PtoHTML1 = "<p class='source'>" + result.quote + "</p>" +"<p class='source'>" + result.source;
    if("citation" in result){
        PtoHTML1 += "<span class='citation'>" + result.citation + "</span>";
    }
    if("year" in result){
        PtoHTML1 += "<span class='year'>" + result.year + "</span>";
    }
    // added closing p tag to the final html string
    PtoHTML1 += "</p>";
    document.getElementById('quote-box').innerHTML = PtoHTML1;

}




/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/


document.getElementById('load-quote').addEventListener("click", printQuote, false);
