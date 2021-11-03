const lineThrough = document.querySelector("#getCrossed")
lineThrough.addEventListener("click", e => {
    e.target.style.textDecoration = "line-through"
})

const faded = document.querySelector("#getFaded")
faded.addEventListener("click", e => {
    e.target.style.opacity = "0"
})

const collapse = document.querySelector("#row")
collapse.addEventListener("click", e => {
    e.target.style.width = "0"
    e.target.display = "none"
})

const massExtinction = document.querySelector("#destroy-all")
massExtinction.addEventListener("click", () => {
    const allGone = document.querySelectorAll("#row img")
    allGone.forEach(element => {
        element.style.width = "0"
        element.display = "none"
    })
})