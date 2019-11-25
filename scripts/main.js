import initializeDetailButtonEvents from './Highlight/dialog.js'
import addMouseOverEventListeners from './Highlight/highlight.js';
import addBorders from './Tips/tips.js';
import { useFish } from './Fish/FishDataProvider.js';
import FishListComponent from './Fish/fishlist.js';
import { useTip } from './Tips/TipDataProvider.js';
import tipListComponent from './Tips/tiplist.js';


useTip()
useFish()

const allOfTheFish = useFish()

console.log("all of the fish", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log("individual fish", fish)
}

FishListComponent()
tipListComponent()
addMouseOverEventListeners()
addBorders()
initializeDetailButtonEvents()

