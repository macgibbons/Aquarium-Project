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
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                // you could simplify by doing this: 
                // const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
                theDialog.showModal()
            }
        )
    }
}
export default initializeDetailButtonEvents



//     document.querySelector("#button--Bart").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Bart")
//             theDialog.showModal()
//         }
//     )
//     document.querySelector("#button--Bret").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Bret")
//             theDialog.showModal()
//         }
//     )
//     document.querySelector("#button--Brandon").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Brandon")
//             theDialog.showModal()
//         }
//     )
//     document.querySelector("#button--Chad").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Chad")
//             theDialog.showModal()
//         }
//     )
//     document.querySelector("#button--Dan").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Dan")
//             theDialog.showModal()
//         }
//     )
//     document.querySelector("#button--Chandler").addEventListener(
//         "click",
//         theClickEvent => {
//             console.log("this got clicked")
//             const theDialog = document.querySelector("#details--Chandler")
//             theDialog.showModal()
//         }
//     )

// }
