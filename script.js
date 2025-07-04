const containerForm = document.getElementById("container-form")
const quote = document.getElementById("quote")
const authorName = document.getElementById("author-name")
const buttonSubmit = document.getElementById("submit-quote")
const quoteList = document.getElementById("quote-list")
const quoteCount = document.getElementById("count")

let quoteNumber= 1

containerForm.addEventListener(("submit"),(event) =>{ event.preventDefault()
const text = quote.value
const author= authorName.value

addQuote(text,author)

console.log(text, author)

})

function addQuote(quote, author){

const quoteText = document.createElement("p")
quoteText.className = "text"
quoteText.textContent= quote

const authorQuote = document.createElement("p")
authorQuote.className= "author"
authorQuote.textContent= author

const containerQuote = document.createElement("div")
containerQuote.className = "quote"
containerQuote.appendChild(quoteText)
containerQuote.appendChild(authorQuote)

quoteList.appendChild(containerQuote)
quoteNumber +=1
quoteCount.innerText = quoteNumber

}

