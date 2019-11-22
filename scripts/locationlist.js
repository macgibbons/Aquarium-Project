import tipComponent from "./TipHTML.js";
import { useLocation } from "./LocationDataProvider.js";
import locationComponent from "./Location.js";
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const locationListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const locations = useLocation()

    let allLocationsHTMl = ""

    for (const location of locations) {
        const locationHTML = locationComponent(location)
        allLocationsHTMl += locationHTML
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
         
            ${allLocationsHTMl}
       
    `
}


export default locationListComponent

