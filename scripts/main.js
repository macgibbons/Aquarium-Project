import initializeDetailButtonEvents from './dialog.js'
import addMouseOverEventListeners from './highlight.js';
import addBorders from './tips.js';
import { useFish } from './FishDataProvider.js';
import FishListComponent from './fishlist.js';
import { useTip } from './TipDataProvider.js';
import tipListComponent from './tiplist.js';


useTip()
useFish()

const allOfTheFish = useFish()

console.log("all of the fish", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish", fish)
}

FishListComponent()
tipListComponent()
// initializeDetailButtonEvents()

addMouseOverEventListeners()
addBorders()