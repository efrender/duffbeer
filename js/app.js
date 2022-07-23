//Variables
const images = [...(document.querySelectorAll('.img-slider'))];
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderLength = images.length;

//Event Listener
prev.addEventListener('click', prevSlider);
next.addEventListener('click', nextSlider);

//Funtions

/** Función slider
 * Funcion que remueve la clase 'active' y la reasigna a la foto anterior
 *  o siguiente del slider, según el botón que se pulse
 */
function slider(imageIndex){
  for(slides of images){
    slides.classList.remove('active');
    images[imageIndex].classList.add('active');
  } 
  
}

// Función prevSlider() busca el indice de la foto que antecede a la actual
 
function prevSlider(){
  const index = images.findIndex(find => find.classList.contains('active'));
 
    if (index > 0) {
      prevImageIndex = index -1;     
    }else{
      prevImageIndex = sliderLength -1;
    }
    slider(prevImageIndex);
 
}
// Función prevSlider() busca el indice de la foto que le sigue a la actual
 
function nextSlider(){
  const index = images.findIndex(find => find.classList.contains('active'));
    if (index == sliderLength - 1 ) {
      nextImageIndex = 0;
      slider(nextImageIndex);       
    }else{
      nextImageIndex = index + 1;
      slider(nextImageIndex);
    }
   
 
}