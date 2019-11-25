import {
    useFish
} from "./FishDataProvider.js";
import FishComponent from "./fish.js";

/**
 *  FishListComponent which renders individual fish objects as HTML
 */
const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    contentElement.innerHTML += `
    <section class="fishList">
    ${
            fishes.map(
    // if a all function does is return something we can get of "return" and curly braces 
                (currentFish) =>  FishComponent(currentFish)).join("")
    }
    </section>
    `
}

export default FishListComponent