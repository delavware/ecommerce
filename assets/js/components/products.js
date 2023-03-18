
function products (products) {
   let db = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [...products]

   function printProducts () {
    let productsDOM = document.querySelector('.products__container')
    let htmlProduct = ''

    for (let product of db) {
        htmlProduct += `
        <article class="product">
            <div class="product__image">
            <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product__content">
            <button type="button" class="product__btn product__btn--add-to-cart" data-id="${product.id}">
                <i class='bx bx-cart-add'></i>
            </button>
            <span class="product__price">$${product.price}</span>
            <span class="product__stock">Stock: ${product.quantity}</span>
            <h1 class="product__title">${product.name}</h1>
            </div>
        </article> 
        `
    }
    productsDOM.innerHTML = htmlProduct

    localStorage.setItem('products', JSON.stringify(products))
   }
   printProducts()

   return {
    db,
    printProducts
   }
}

export default products