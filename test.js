var choiceSliderLabel = {
    'dot1' : '0%',
    'dot2' : '-100%',
    'dot3' : '-200%',
    'dot4' : '-300%'
}
var test = 0;

function menuShow(self){
    var menu = document.querySelector('.nav_m');
    console.log(menu);
    if(menu.style.display === "block"){
        menu.style.display = 'none';
    }
    else{
        menu.style.display = 'block';
    }
}

function autoSlide(){
    var slide = document.querySelector('#slide ul');
    var marginLeft = parseInt(slide.style.marginLeft);
    if(isNaN(marginLeft)) { marginLeft = 0;}
    marginLeft = marginLeft - 100;
    if(marginLeft === -400) { marginLeft = 0;}
    slide.style.marginLeft = marginLeft +'%'
}
function labelChoice(self){
    var key = self.getAttribute('for');
    var slide = document.querySelector('#slide ul');
    slide.style.marginLeft = choiceSliderLabel[key];
}
