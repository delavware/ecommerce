
import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'
import slider from './components/slider.js'
import menuAnimation from './components/menuAnimation.js'

/****** UI Elements ******/
/* Ocultar loader */
loader()
/* Mostrar menu */
showMenu()
/* Menu animation */
menuAnimation()
/* Slider */
slider()

/* Mostrar carrito */
showCart()

/****** Products ******/

const {db, printProducts} = products(await getProducts())

/****** Cart ******/

cart(db,printProducts)

