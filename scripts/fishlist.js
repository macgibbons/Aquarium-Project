import { useFish } from "./FishDataProvider.js";
import FishComponent from "./fish.js";

/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    let allFishHTMl = ""

    for (const fish of fishes) {
        const fishHTML = FishComponent(fish)
        allFishHTMl += fishHTML
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${allFishHTMl}
        </section>
    `
}


export default FishListComponent

