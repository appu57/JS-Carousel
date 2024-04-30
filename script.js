const delay = 5000 ;
const slides = document.querySelector(".slides");
const slideCount = slides.childElementCount;
const maxLeft = (slideCount -1) * 100 * -1; // -300px maximum left the container should be moved to show left-most image fist image at 0px then move the slide by -100px to show second image

let current =0 ; //slide is currently at 0px (first image)

function changeSlide(direction)
{
    if(direction=="right")
    {
       current+= current > maxLeft ? -100 : current*-1 ; //if current is greater than maxLeft then we can move (towrads right ) and slide towards left to show next image  that is in right so move by -100
       //current * -1 is when we have reached end and current px == maxLeft then we can not move right again so we move to the first slide how?(-300px * -1)
    }
    else{
        current = current < 0 ? current +100 :maxLeft;  //if we reached end then again start from first
    }
    slides.style.left = current + "%";
}

let automaticChange = setInterval(changeSlide,delay);

const restart = function(){
    clearInterval(automaticChange);//clear previous interval and start the slider 
    automaticChange = setInterval(changeSlide,delay);
}

var next = document.querySelector(".right");
next.addEventListener('click',function(){
    changeSlide("right");
    restart(); //start automatic change from the current image after slide
})

var prev = document.querySelector(".left");
prev.addEventListener('click',function(){
    changeSlide("left");
    restart();
})



