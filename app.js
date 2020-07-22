// "https://bagel-api-fis.herokuapp.com/bagels/5577"
// 5578
// 5579
// etc.


const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("bagel")

fetch(`https://bagel-api-fis.herokuapp.com/bagels/${id}`) 
    .then(response => response.json())  
    .then(addBagelToPage)

function addBagelToPage(bagel){ 
    const bagel = document.getElementById("bagel")  
    const p = document.createElement("p")
    p.textContent = bagel.type  
    bagel.append(p)
}

//Kyle's
// fetch("https://bagel-api-fis.herokuapp.com/bagels/5577") 
//     .then(response => response.json())  
//     .then(addBagelToPage)
// function addBagelToPage(bagel){ 
//     const $bagel = document.querySelector(".bagel")  
//     const $p = document.createElement("p")
//     $p.textContent = bagel.type  
//     $bagel.append($p)
// }

// Mine - not done and didn't know we were hardcoding bagel id
// const searchParams = new URLSearchParams(window.location.search)
// const id = searchParams.get("id")

// fetch(`http://localhost4000/bagels/${id}`)
//     .then(response => response.json())
//     .then(result => handleBagel(result))

// function handleBagel(info) {
//     renderBagel(info.name)
// }

// const showBagel = document.getElementById("bagel")

// function renderBagel(bagels) {
//     bag
// }


