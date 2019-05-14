
/*---------------------------LOAD VIDEO-----------------------------------------*/

var elem = document.getElementById('watch');
var video = document.getElementById('videoOn');
var layer = document.getElementById('overlay');

elem.onclick = function myFunction() {
	layer.style.display = 'none';
	video.autoplay = true;
	video.load();
/*	video.setAttribute('autoplay', 'autoplay'); */
	video.style.display = 'block';
} 
video.addEventListener('ended', handler);
video.addEventListener('OnEnded', handler);
function handler() {
	video.style.display = 'none';
	layer.style.display = 'flex';
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

/*----------------------------TEAM SLIDER------------------------------------*/

var teamSlides = Array.from(document.getElementsByClassName('team_avatars'));
var teamNames = Array.from(document.getElementsByClassName('team_name'));
var teamText = Array.from(document.getElementsByClassName('team_text'));
var left = 0; center =1; right = 2;

teamSlides.forEach(function(item) {
	item.addEventListener('click', function() {
		if (this.classList.contains('team_right')) {
			teamNextSlide();
		}
		else if (this.classList.contains('team_left')) {
			teamPreviousSlide();
		}
	});
});

function teamNextSlide() {
	
	removeTeamClasses(left, center, right);
	
	if (right >= (teamSlides.length-1)) {	
	right = 0;}
	else { 
	right++;};
	if (center >= (teamSlides.length-1)) {
	center = 0;}
	else { 
	center++;};
	if (left >= (teamSlides.length-1)) {
	left = 0;}
	else { 
	left++;};
	
	setTeamClasses(left, center, right);
	
};

function teamPreviousSlide() {
	
	removeTeamClasses(left, center, right);
	
	if (left <=0) {	
	left = teamSlides.length-1;}
	else { 
	left--;};
	if (center <=0) {
	center = teamSlides.length-1;} 
	else { 
	center--;};
	if (right <=0) {
	right = teamSlides.length-1;}
	else { 
	right--;};

	setTeamClasses(left, center, right);
		
};

function removeTeamClasses(teamLeft, teamCenter, teamRight) {
	teamSlides[teamLeft].classList.remove('team_left');
	teamSlides[teamCenter].classList.remove('team_center');
	teamNames[teamCenter].classList.remove('team_show');
	teamText[teamCenter].classList.remove('team_show');
	teamSlides[teamRight].classList.remove('team_right');
};

 function setTeamClasses (teamLeft, teamCenter, teamRight) {
	teamSlides[teamLeft].classList.add('team_left');
	teamSlides[teamCenter].classList.add('team_center');
	teamNames[teamCenter].classList.add('team_show');
	teamText[teamCenter].classList.add('team_show');
	teamSlides[teamRight].classList.add('team_right'); 
 };

