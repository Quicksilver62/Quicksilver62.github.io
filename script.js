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