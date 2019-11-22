/**
 *  FishComponent which renders individual fish objects as HTML
 */
const tipComponent = (tip) => {
    return `
        <div class="tip">
          <h4>${tip.title}</h4>
          <!-- description -->
          <p> ${tip.tip} </p>
        </div>
           
    `
}

export default tipComponent