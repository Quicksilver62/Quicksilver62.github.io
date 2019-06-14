
/*---------------------------MOBILE VH------------------------------------------*/

var vh = window.innerHeight*0.01;
var header = document.querySelector('header');
header.style.setProperty('--vh', vh + 'px');

window.addEventListener('scroll' ,function(){
	window.removeEventListener('resize');
//	debounce(window.addEventListener('resize', hendlerResize),2000);
});

function hendlerResize() {
	var vh = window.innerHeight*0.01;
	header.style.setProperty('--vh', vh + 'px');
}

window.addEventListener('resize', hendlerResize);

/*---------------------------LOAD VIDEO-----------------------------------------*/

var elem = document.querySelector('#watch');
var video = document.querySelector('#videoOn');
var layer = document.querySelector('#overlay');

elem.addEventListener('click', function() {
	layer.style.display = 'none';
	video.autoplay = true;
	video.load();
	video.style.display = 'block';
});

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
		
		elem1 = this;
		elem2 = active[0];

		function timeOut(el, calcHeight, callback) {

			let pos = 0;
			let id = setInterval(frame, 1);
			let height = calculateHeight(el);

			function frame() {
				if (pos >= height) {
				clearInterval(id);
				callback();
				return false;
				} else {
					pos+=3; 
					el.style.height = calcHeight(height, pos);
				};
			}
		}

		function up(height, pos) {
			if (pos > height) return 0;
			else return height-pos + 'px';
		}

		function down(height, pos) {
			if (pos > height) return height + 'px';
			else return pos + 'px';
		}
				
		function close() {
			elem2.classList.remove('panel-active'); // убрать класс panel-active 
		}
		
		function toggle() {
			elem1.parentNode.classList.toggle('panel-active');	// изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
		}
		
		function calculateHeight(e) {
			if (window.innerWidth > 700) {
				height = Math.max(e.firstElementChild.scrollHeight, e.lastElementChild.scrollHeight);	
			}
			else {
				height = e.firstElementChild.scrollHeight + e.lastElementChild.scrollHeight;	
			}
			return height;
		}
		
		if (active.length > 0 && elem2.childNodes[3] !== elem1) { 	//если есть активный элемент, и это не тот по которому кликнули
			timeOut(elem2.nextElementSibling, up, close);
		}
		
		if (elem1.parentNode.classList.contains('panel-active')) {
				timeOut(elem1.parentNode.nextElementSibling, up, toggle);
			}
		else {
		timeOut(elem1.parentNode.nextElementSibling, down, toggle);
	}
		
	});
});

/*------------------------TESTIMONIALS SLIDER------------------------------------ */

var boxes = Array.from(document.getElementsByClassName('testimonials_box')); 
var max = boxes.length*230;
var container = document.querySelector('.testimonials_container');
var next = document.getElementById('next');
var previous = document.getElementById('previous');
var currentSlide = 0;

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

function nextSlide(){
	if (currentSlide > (boxes.length-2)*(-230)) {
		currentSlide-=230;
		container.style.transform = 'translateY(' + currentSlide + 'px)';
	}
}

function previousSlide(){
	if (currentSlide < (boxes.length-2)*230 && currentSlide <= -230) {
		currentSlide+=230;
		container.style.transform = 'translateY(' + currentSlide + 'px)';
	}
}

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

var menu = document.querySelector('#bmenu');

menu.onclick = function() {
	this.previousElementSibling.classList.toggle('responsive');
};


