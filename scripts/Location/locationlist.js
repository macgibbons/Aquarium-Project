import {
    useLocation
} from "./LocationDataProvider.js";
import locationComponent from "./Location.js";
// const locationListComponent = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector(".locations")
//     const locations = useLocation()

//     let allLocationsHTMl = ""

//     for (const location of locations) {
//         const locationHTML = locationComponent(location)
//         allLocationsHTMl += locationHTML
//     }

//     // Add to the existing HTML in the content element
//     contentElement.innerHTML += `
         
//             ${allLocationsHTMl}
       
//     `
// } this is the same as down below

const locationListComponent = () => {

    const contentElement = document.querySelector(".locations")
    const locations = useLocation()

    contentElement.innerHTML += `
    ${
            locations.map(
                (currentLocation) =>  locationComponent(currentLocation)).join("")
    }
    `
}


export default locationListComponent