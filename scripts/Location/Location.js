const locationComponent = (location) => {
  return `
        <div class="location__card">
          <h4>${location.location}</h4>
          <!-- description -->
          <p class="location__coor"> ${location.coordinates} </p>
          <img src="${location.image}" alt="picture of location">
        </div>   
    `
}


export default locationComponent