const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".close__dialog")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                console.log("this got clciked")
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line
    
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )
    document.querySelector("#button--bret").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details--bret")
            theDialog.showModal()
        }
    )
    document.querySelector("#button__brandon").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details__brandon")
            theDialog.showModal()
        }
    )
    document.querySelector("#button__chad").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details__chad")
            theDialog.showModal()
        }
    )
    document.querySelector("#button__chuck").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details__chuck")
            theDialog.showModal()
        }
    )
    document.querySelector("#button__chandler").addEventListener(
        "click",
        theClickEvent => {
            console.log("this got clicked")
            const theDialog = document.querySelector("#details__chandler")
            theDialog.showModal()
        }
    )

}

export default initializeDetailButtonEvents