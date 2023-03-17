
function loader () {
    window.addEventListener('load', function(){
        let loader = document.querySelector('.loader')
        loader.classList.add('loader--hidden')
    })
}

export default loader