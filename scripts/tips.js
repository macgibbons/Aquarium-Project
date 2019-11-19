const addBorders = () => {

    const tipCards = document.querySelectorAll(".tip")

    for (const card of tipCards) {
        card.addEventListener(
            "mouseover",
            theMouseOverEvent => {
                card.classList.add("highlight__tip")

            }
        )
        card.addEventListener("mouseout", theMouseOverEvent => {
            card.classList.remove("highlight__tip")

        })

    }
}

export default addBorders