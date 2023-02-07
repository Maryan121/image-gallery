let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');
let images = document.querySelectorAll('.img');

let currentlySelected = 0;

prevBtn.addEventListener('click',function(){
    images[currentlySelected].classList.remove('active');
    currentlySelected--;
    images[currentlySelected].classList.add('active');

    if(currentlySelected === 0){
        prevBtn.disabled = true;
        nextBtn.disabled = false;
    }
})
nextBtn.addEventListener('click',function(){
    images[currentlySelected].classList.remove('active');
    currentlySelected+=1;
    images[currentlySelected].classList.add('active');
    prevBtn.disabled = false;
    
    if(images.length === currentlySelected +1){
        nextBtn.disabled = true;
    }
})

