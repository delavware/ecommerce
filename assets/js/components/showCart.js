
function showCart(){
const btnCart = document.querySelector('.btn--cart')
const cart = document.querySelector('.cart')

btnCart.addEventListener('click', function(){
    cart.classList.toggle('cart--show')
})

cart.addEventListener('click', function(e){
    if (e.target.closest('.cart__btn--close')){
        this.classList.remove('cart--show')
    }
})

}

export default showCart