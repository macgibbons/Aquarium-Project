/**
 *  FishComponent which renders individual fish objects as HTML
 */
const locationComponent = (location) => {
    return `
        <div class="location__card">
          <h4>${location.location}</h4>
          <!-- description -->
          <p> ${location.coordinates} </p>
          <img src="${location.image}" alt="picture of location">
        </div>
           
    `
}


export default locationComponent