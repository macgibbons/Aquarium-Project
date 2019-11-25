import { useTip } from "./TipDataProvider.js";
import tipComponent from "./TipHTML.js";

 const tipListComponent = () => {
    const contentElement = document.querySelector(".tipList")
    const theTips = useTip()

    contentElement.innerHTML += `
        <section class="tipList">
        <h3>Tips</h3>   
        ${
            theTips.map(
                (currentTip) =>  tipComponent(currentTip)).join("")
    }
        </section>
    `
}


export default tipListComponent

