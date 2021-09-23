const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      mainSlides = mainSlide.querySelectorAll('div').length,
      container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(mainSlides - 1) * 100 }vh`;

upBtn.addEventListener('click', () =>{
    changeSlide('up');  
});

downBtn.addEventListener('click', () =>{
    changeSlide('down');   
});
 
function changeSlide(direction){
    if(direction === 'up'){
        activeSlideIndex++;
        if(activeSlideIndex  === mainSlides){
            activeSlideIndex = 0;
        }
    }else if(direction === 'down'){
        activeSlideIndex--;
        if(activeSlideIndex < 0){
            activeSlideIndex = mainSlides - 1;
        }
    }
    const heigth = container.clientHeight;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`
}
