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
    const allGone1 = document.querySelectorAll("#row img")
    const allGone2 = document.querySelectorAll("ol li")
    const allGone3 = document.querySelectorAll("ul li")
    allGone1.forEach(element => {
        element.style.width = "0"
        element.display = "none"
    })
    allGone2.forEach(element => {
        element.style.textDecoration = "line-through"
    })
    allGone3.forEach(element => {
        element.style.opacity = "0"
    })
})