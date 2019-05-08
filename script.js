
/*---------------------------LOAD VIDEO-----------------------------------------*/

var elem = document.getElementById("watch");
var video = document.getElementById("videoOn");
var layer = document.getElementById("overlay");

elem.onclick = function myFunction() {
	layer.style.display = "none";
	video.autoplay = true;
	video.load();
/*	video.setAttribute("autoplay", "autoplay"); */
	video.style.display = "block";
} 
video.addEventListener("ended", handler);
video.addEventListener("OnEnded", handler);
function handler() {
	video.style.display = "none";
	layer.style.display = "flex";
};

/*---------------------------TOGGLE SERVICES-------------------------------------*/

var panelItem = document.querySelectorAll('.drop_down'),
  active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
	item.addEventListener('click', function(e) {
		if (active.length > 0 && active[0].childNodes[3] !== this) { //если есть активный элемент, и это не тот по которому кликнули
		active[0].classList.remove('panel-active'); };// убрать класс panel-active
    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
	this.parentNode.classList.toggle('panel-active');
  });
});

/*------------------------TESTIMONIALS SLIDER------------------------------------ */

var slides = document.querySelectorAll('.slide');
var up = [], down =[];

var currentSlideUp = 0, currentSlideDown = 1;

var imags = Array.from(document.getElementsByClassName('test_img'));
var boxes = Array.from(document.getElementsByClassName('testimonials_box'));

var next = document.getElementById('next');
var previous = document.getElementById('previous');

 
next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};
 
function nextSlide() {
	var name1 = 'down';
	var name2 = 'up';
	up = getUp();
	down = getDown();
	up.forEach(function(item) {
		item.classList.remove(name2);
		item.classList.remove('showing');
	}); 
	down.forEach(function(item) {
		item.classList.remove(name1);
		item.classList.add(name2);
	});
	currentSlideUp = currentSlideDown; 
	if (currentSlideDown >= (slides.length/2-1)) {
	currentSlideDown = 0;}
	else { 
	currentSlideDown++;};
	
    goToSlide(currentSlideDown, name1);
};

function previousSlide() {
	var name1 = 'up';
	var name2 = 'down';
	up = getUp();
	down = getDown();
	down.forEach(function(item) {
		item.classList.remove(name2);
		item.classList.remove('showing')
	});
	up.forEach(function(item) {
		item.classList.remove(name1);
		item.classList.add(name2);
	}); 
	currentSlideDown = currentSlideUp; 
	if (currentSlideUp <= 0) {
	currentSlideUp = (slides.length/2-1);}
	else { 
	currentSlideUp--;};
	
    goToSlide(currentSlideUp, name1);
};
 
function goToSlide(n, name) {
	imags[n].classList.add(name);
	imags[n].classList.add('showing');
	boxes[n].classList.add(name);
	boxes[n].classList.add('showing');
}; 

function getUp() {
	return Array.from(document.getElementsByClassName('up'));
};

function getDown() {
	return Array.from(document.getElementsByClassName('down'));
};