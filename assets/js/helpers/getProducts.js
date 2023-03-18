
//Standard:

/* function getProducts () {
    return window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err))
} */

// Top level:
/* let res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
let data = await res.json()
return data */

//Async await + try catch

async function getProducts () {
    try {
        let res = await window.fetch('https://jmdelav.github.io/aps-api/aps.json')
        let data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}


export default getProducts