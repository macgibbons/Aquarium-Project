import initializeDetailButtonEvents from './dialog.js'
import addMouseOverEventListeners from './highlight.js';
import addBorders from './tips.js';
import { useFish } from './FishDataProvider.js';

initializeDetailButtonEvents()

addMouseOverEventListeners()
addBorders()
useFish()

const allOfTheFish = useFish()

console.log("all of the fish", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish", fish)
}