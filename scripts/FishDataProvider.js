/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        species: "Goldfish",
        length: 3,
        Location: "The Ocean",
        image: "fish.jpg"
    },

    {
        name: "Bret",
        food: ["Fish food", "algae"],
        species: "Fish",
        length: 12,
        Location: "The Ocean",
        image: "fish.jpg"

    
    },

    {
        name: "Brandon",
        food: ["Small fish", "crustaceans"],
        species: "Baracuda",
        length: 24,
        Location: "Gulf Coast",
        image: "fish.jp"
    
    },

    {
        name: "Chad",
        food: ["Seals", "Surfers", "Small Children"],
        species: "Great White Shark",
        length: 96,
        Location: "Atlantic Ocean",
        image: "fish.jpg"
    },

    {
        name: "Chandler",
        food: ["sushi", "sashimi"],
        species: "Blue fin tuna",
        length: 72,
        Location: "Pacific Ocean",
        image: "fish.jpg"
    },

    {
        name: "Dan",
        food: ["krill", "small fish"],
        species: "Angler Fish",
        length: 38,
        Location: "Deep sea",
        image: '/images/Animal-Fish.png'
    }
]

// Immutability: our ConvolverNode, raw data should be private and hidden and should not be changed by other modules

export const useFish = () => {
    return fishCollection
}
