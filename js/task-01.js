const list = document.getElementById(`categories`)
const length = list.children.length
console.dir(`Number of categories: ${length}`)

const el = [...document.getElementsByClassName(`item`)]

const result = el.forEach(element => {
    console.dir(`Category: ${element.firstElementChild.textContent}`)
    console.dir(`Elements: ${element.lastElementChild.children.length}`)
});
