
/*---------------------------OVERFLOW HEADER---------------------------------*/

document.addEventListener('DOMContentLoaded', function() {
	isOverflown();
}, false);
window.addEventListener('resize', function() {
	isOverflown();
}, false);

function isOverflown() {
	var header = document.getElementsByTagName('header');
	var video_wrapper = document.getElementsByClassName('video_wrapper');
	
/*	console.log(header[0].scrollHeight);
	console.log(header[0].clientHeight); */
	
	if (header[0].scrollHeight > header[0].clientHeight && window.matchMedia('(min-width: 700px)').matches) {
		header[0].style.height = '100%';
		video_wrapper[0].style.marginBottom = '50px';
	} else {
		header[0].style.height = '100vh';
		video_wrapper[0].style.marginBottom = '0';
	}

} 

/*---------------------------LOAD VIDEO-----------------------------------------*/

var elem = document.getElementById('watch');
var video = document.getElementById('videoOn');
var layer = document.getElementById('overlay');

elem.onclick = function() {
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
	item.addEventListener('onmousedown', function(e) {
		preventDefault(e); 
		stopPropagation(e);
	return false;
	}); 
	item.addEventListener('click', function(e) {
		if (active.length > 0 && active[0].childNodes[3] !== this) { 	//если есть активный элемент, и это не тот по которому кликнули
			console.log(active[0]);
			(function() {
				  height = parseInt(getComputedStyle(active[0].nextElementSibling).height, 10);
				  console.log(height);
				  var pos = 0;
				  var id = setInterval(frame, 1);
				  function frame() {
					if (pos == height) {
					  clearInterval(id);
					  return false;
					} else {
					pos++; 
					active[0].nextElementSibling.style.height = height-pos + 'px';
					console.log(pos);
					console.log(active[0].nextElementSibling.style.height);
    };
  }
		})();
			active[0].classList.remove('panel-active');} // убрать класс panel-active 
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

next.onmousedown = function(e) {
		e.preventDefault();
		e.stopPropagation();
	return false;
};
previous.onmousedown = function(e) {
		e.preventDefault();
		e.stopPropagation();
	return false;
};
 
next.onclick = function() {
    nextSlide();
	return false;
};
previous.onclick = function() {
    previousSlide();
	return false;
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
	return false;
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
	return false;
};
 
function goToSlide(n, name) {
	imags[n].classList.add(name);
	imags[n].classList.add('showing');
	boxes[n].classList.add(name);
	boxes[n].classList.add('showing');
	return false;
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
var total = teamSlides.length-1;

teamSlides.forEach(function(item) {
	item.addEventListener('onmousedown', function() {
		preventDefault();
		stopPropagation();
	return false;
	}); 
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
	
	if (right >= (total)) {	
	right = 0;}
	else { 
	right++;};
	if (center >= (total)) {
	center = 0;}
	else { 
	center++;};
	if (left >= (total)) {
	left = 0;}
	else { 
	left++;};
	
	setTeamClasses(left, center, right);
	
};

function teamPreviousSlide() {
	
	removeTeamClasses(left, center, right);
	
	if (left <=0) {	
	left = total;}
	else { 
	left--;};
	if (center <=0) {
	center = total;} 
	else { 
	center--;};
	if (right <=0) {
	right = total;}
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

/*---------------------------BURGER MENU-------------------------------------*/

var menu = document.getElementById('bmenu');

menu.onclick = function() {
//	console.log(this.previousElementSibling.classList);
	this.previousElementSibling.classList.toggle('responsive');
};


