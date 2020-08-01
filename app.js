document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('bagel-h1'))

    const button = document.createElement('button') 
    button.innerText = 'Load Bagels'
    document.body.append(button)

    button.addEventListener('click', (event)=> {
        console.log('event', event)
        // console.log('event', event.path)
        // console.log('event', event.path[2])
        // console.log('event', event.target)
        // console.log('event', event.target.parentNode)
        fetchBagles()
    })

    function fetchBagles() {
        fetch(`https://bagel-api-fis.herokuapp.com/bagels`) 
        .then(response => response.json())  
        .then(bagels => renderBagels(bagels))
    }

    function renderBagels(bagels){ 
        const bagelList = document.getElementById("bagel-list")  
        bagels.map(bagel => {
            const bagelLi = document.createElement('li')
            bagelLi.innerText = bagel.type
            bagelList.appendChild(bagelLi)
    })
    }
})




// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('bagel-h1'))

//     const button = document.createElement('button') 
//     button.innerText = 'Load Bagels'
//     document.body.append(button)

//     button.addEventListener('click', () => {
//         fetch(`https://bagel-api-fis.herokuapp.com/bagels`) 
//         .then(response => response.json())  
//         .then(bagels => renderBagels(bagels))
//     })

//     function renderBagels(bagels){ 
//         const bagelList = document.getElementById("bagel-list")  
//         bagels.map(bagel => {
//             const bagelLi = document.createElement('li')
//             bagelLi.innerText = bagel.type
//             bagelList.appendChild(bagelLi)
//     })
//     }
// })

// const button = document.createElement('button') 
// button.innerText = 'Load dem Bagels'
// document.body.append(button)

// document.addEventListener('DOMContentLoaded', () => {
//     console.log(document.getElementById('bagel-h1'))
//     fetch(`https://bagel-api-fis.herokuapp.com/bagels`) 
//     .then(response => response.json())  
//     .then(bagels => renderBagels(bagels))

//     function renderBagels(bagels){ 
//     const bagelList = document.getElementById("bagel-list")  

//     bagels.map(bagel => {
//         const bagelLi = document.createElement('li')
//         bagelLi.innerText = bagel.type
//         bagelList.appendChild(bagelLi)
//     })
//     }

// })

// const button = document.createElement('button') 
// button.innerText = 'Load dem Bagels'
// document.body.append(button)
