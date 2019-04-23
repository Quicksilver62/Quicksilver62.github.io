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
}

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