
function cart (db, printProducts) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    //Elementos del DOM
    let productsDOM = document.querySelector('.products__container')
    let notifyDOM = document.querySelector('.notify')
    let cartDOM = document.querySelector('.cart__body')
    let cartCountItemDOM = document.querySelector('.cart__count--item')
    let cartTotalItemDOM = document.querySelector('.cart__total--item')
    let cartSubTotalItemDOM = document.querySelector('.cart__subtotal--item')
    let btnBuyDOM = document.querySelector('.btn--buy')

    // Funciones
    function printCart () {
        let htmlCart = ''

        if (cart.length === 0) {
            htmlCart = `
            <div class="cart__empty">
                <i class='bx bx-cart'></i>
                <p class="cart__empty--message">No items found.</p>
            </div>
            `
            notifyDOM.classList.remove('notify--show')
        } else {
            for (let item of cart) {
                let product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="cart__article">
                <div class="cart__article--img"><img src="${product.image}" alt="${product.name}"></div>
                <div class="cart__article--content">
                  <h3 class="cart__article--title">${product.name}</h3>
                  <span class="cart__article--price">$ ${product.price}</span>
                  <div class="cart__article--quantity">
                    <button type="button" class="cart__article--minus" data-id="${item.id}">
                      <i class="bx bx-minus"></i>
                    </button>
                    <span class="article__quantity--text">${item.quantity}</span>
                    <button type="button" class="cart__article--plus" data-id="${item.id}">
                      <i class="bx bx-plus"></i>
                    </button>
                  </div>
                  <button type="button" class="cart__article__btn--remove" data-id="${item.id}">
                    <i class="bx bx-trash"></i>
                  </button>
                </div>
              </article>
                `
            }


            notifyDOM.classList.add('notify--show')
        }

        cartDOM.innerHTML = htmlCart
        notifyDOM.innerHTML = showItemsCounter()
        cartCountItemDOM.innerHTML = showItemsCounter()
        cartTotalItemDOM.innerHTML = showTotal()
        cartSubTotalItemDOM.innerHTML = showSubTotal()
        
        window.localStorage.setItem('cart', JSON.stringify(cart))
        
    }

    function addToCart(id, quantity=1){
        let itemFound = cart.find(item => item.id === id)

        if (itemFound){
            itemFound.quantity += quantity
        } else {
            cart.push({id,quantity})
        }
        printCart()
        
    }
    

    function deleteFromCart(id, quantity=1){
        let itemFound = cart.find(item => item.id === id)
        let rst = itemFound.quantity - quantity

        if(rst > 0){
            itemFound.quantity -= quantity
        } else {
            cart = cart.filter(item => item.id !== id)
        }
        printCart()
       
        
    }

    
    function deleteAll (id){
        cart = cart.filter(item => item.id !== id)

        printCart()
      
    }
    

    function showItemsCounter(){
        let counter = 0
        for (let item of cart) {
            counter += item.quantity
        }
        return counter
        
    }

    function showTotal () {
        let total = 0
        for (let item of cart){
            let productFound = db.find(p => p.id === item.id)
            total += item.quantity * productFound.price
        }
        return total
        
    }

    function showSubTotal () {
        let rst = +(showTotal() * 0.08).toFixed(2);
        return rst
    }


    function checkout () {
        for (let item of cart) {
            let productFound = db.find(p => p.id === item.id)

            productFound.quantity -= item.quantity
        }


        cart = []
        printCart()
        printProducts()
        window.alert('Thank you for shopping with us!!')
        
    }

    printCart()
   
    // Eventos
    productsDOM.addEventListener('click', function(e){
        if(e.target.closest('.product__btn--add-to-cart')){
            let id = +e.target.closest('.product__btn--add-to-cart').dataset.id
            addToCart(id)
            for (let item of cart) {
                let productFound = db.find(p => p.id === item.id)

                if (productFound.quantity < item.quantity){
                    window.alert('Sorry.We do not have enough stock.')
                    deleteFromCart(id)
                }            
                
                   
                
            }
        }
    })

    cartDOM.addEventListener('click', function(e){
        if(e.target.closest('.cart__article--minus')){
            let id = +e.target.closest('.cart__article--minus').dataset.id
            deleteFromCart(id)
        }

        if(e.target.closest('.cart__article--plus')){
            let id = +e.target.closest('.cart__article--plus').dataset.id
            addToCart(id)
            for (let item of cart) {
                let productFound = db.find(p => p.id === item.id)

                if (productFound.quantity > item.quantity){
                    addToCart(id)
                }            
                else {
                    window.alert('Sorry.We do not have enough stock.')
                    deleteFromCart(id)
                } 
            }
        }

        if(e.target.closest('.cart__article__btn--remove')){
            let id = +e.target.closest('.cart__article__btn--remove').dataset.id
            deleteAll(id)
        }

    })

    btnBuyDOM.addEventListener('click', function(e){
        checkout()
    })

    
}

export default cart 