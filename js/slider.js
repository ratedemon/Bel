const polosa = document.querySelector('.slider__polosa');
const slide = document.querySelectorAll('.polosa__slide');

console.log(polosa, slide)
const toLeft = document.querySelector('.left');
const toRight = document.querySelector('.right');

var t = setInterval(Righting, 6000);
var counter = 0;

// toRight.forEach(b => b.addEventListener('click', () => {
// 	clearInterval(t);
// 	Righting();
// }));
// toLeft.forEach(q => q.addEventListener('click', () => {
// 	clearInterval(t);
// 	Lefting();
// }));
toRight.addEventListener('click', () => {
	clearInterval(t);
	Righting();
});
toLeft.addEventListener('click', () => {
	clearInterval(t);
	Lefting();
});

function Righting() {
	counter++;
	if(counter<slide.length){
	}
	else{
		counter=0;
	}
	polosa.style.transform = 'translateX(' + -100*counter +'%)';
}
function Lefting() {
	counter--;
	if(counter<0){
		counter=slide.lenght - 1;
	}
	else{
	}
	polosa.style.transform = 'translateX(' + -100*counter +'%)';
}



 