
function slider() {
const slider = document.querySelector('.slider__wrapper')
 const slider__section = document.querySelectorAll('.slider__section')
 const slider__section_last = slider__section[slider__section.length - 1]

 const button_left = document.querySelector('.slider__buttons--left')
 const button_right = document.querySelector('.slider__buttons--right')

 // poner ultimo elemento al inicio / en el css poner margin-left -100%
 slider.insertAdjacentElement('afterbegin', slider__section_last)

 function next () {
    let slider__section_first = document.querySelectorAll('.slider__section')[0]
    //mover 1 elemento más , por eso -200%, estaba en -100%
    slider.style.marginLeft = '-200%'
    slider.style.transitioin = 'all 0.5s'
    //setTimeout para ejecutar la funcion dsps, el tiempo debe ser igual al anterior
    setTimeout(function() {
      slider.style.transition = 'none'
      // poner el primer elemento al último
      slider.insertAdjacentElement('beforeend', slider__section_first)
      // margin-left = -100%, para regresarlo al inicio, que estaba en -100%
      slider.style.marginLeft = '-100%'
    },500)
 }

 function previous () {
  let slider__section = document.querySelectorAll('.slider__section')
  let slider__section_last = slider__section[slider__section.length - 1]
  //el margin-left estaba en -100%, por eso ponerlo en 0
  slider.style.marginLeft = '0%'
  slider.style.transitioin = 'all 0.5s'
  //setTimeout para ejecutar la funcion dsps, el tiempo debe ser igual al anterior
  setTimeout(function() {
    slider.style.transition = 'none'
    // poner el primer elemento al último
    slider.insertAdjacentElement('afterbegin', slider__section_last)
    // margin-left = -100%, para regresarlo al inicio, que estaba en -100%
    slider.style.marginLeft = '-100%'
  },500)
}

 button_right.addEventListener('click', function (){
    next()
 })

 button_left.addEventListener('click', function (){
  previous()
})

setInterval(function(){
  next()
},4000)


}

export default slider