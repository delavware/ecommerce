
 function showMenu() {
    let btnMenu = document.getElementById('header__icon');
    let nav = document.getElementById('nav');

    btnMenu.addEventListener('click', function(){
    nav.classList.toggle('show_menu');
 })
 }

 export default showMenu

