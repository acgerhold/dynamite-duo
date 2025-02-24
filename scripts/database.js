export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],

    villains: [
        {
            id: 1,
            name: "John Pork",
            power: "Would you pick up?"
        },
        {
            id: 2,
            name: "Freakbob",
            power: "Freaky"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}