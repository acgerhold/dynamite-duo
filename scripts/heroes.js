import { database } from "./database.js"

export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of database.heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}