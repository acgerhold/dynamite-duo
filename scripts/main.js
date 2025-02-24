// When developers refer to the DOM (Document Object Model), they are generally referring to the HTML

// const theExistingMainElement = document.querySelector("#container")
// This is how JS can target DOM elements
// Here we are selecting any id equal to 'container' (Need hashtag?)

// debugger
// If you set this keyword and go back to the inspector, then move over to the SOURCES tab, you can inspect the values of your JS variables
// ELEMENTS would show you the HTML structure how you're used to, and CONSOLE showing error messages and logs
// ** Have to refresh the page for the debugger breakpoint to execute

// 'theExistingMainElement' will show up as a variable in that SOURCES section under module

// SERVE is the command to generate the html preview

// Import the function references that generate the HTML lists
// When you run your web application, the import statements are what actually execute first, pinging the database
import { HeroList } from "./heroes.js"
import { VillainList } from "./villains.js"

// Capture the return values of the HTML list generators
const heroListHTML = HeroList()
const villainListHTML = VillainList()

// Build up a single string containing both chunks of HTML
const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}

    <h1>Villains</h1>
    ${villainListHTML}
`

/*
    This is the code you wrote in the last chapter to get a
    reference to the <main> element
*/
const theExistingMainElement = document.querySelector("#container")

theExistingMainElement.innerHTML = theWholeEnchilada

// After the two lines above execute, the existing HTML in #container is replaced with theWholeEnchilada
// JS will override the existing HTML 
