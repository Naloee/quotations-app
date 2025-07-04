const containerForm = document.getElementById("container-quote")
const quote = document.getElementById("quote")
const authorName = document.getElementById("author-name")
const buttonSubmit = document.getElementById("submit-quote")
const quoteList = document.getElementById("quote-list")
const containerQuote = document.getElementsByClassName("quote")
const quoteText = document.getElementsByClassName("text")
const authorQuote = document.getElementsByClassName("author")




containerForm.addEventListener(("submit"),(event) =>{ event.preventDefault()
const text = quote.value
const author= authorName.value
console.log(text, author)

})

function addQuote(quote, author){

const paragrapgText = document.createElement("p")
paragrapgText.className = "text"
paragrapgText = textContent= quote

const nameAuthor = document.createElement("p")
nameAuthor.className= "author"
nameAuthor = textContent= author

}