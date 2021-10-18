function timeShover(){
	var timeNow = new Date();
	document.querySelector(".hours").textContent = timeNow.getHours();
	document.querySelector(".minutes").textContent = timeNow.getMinutes();
	document.querySelector(".seconds").textContent = timeNow.getSeconds();
}
setInterval(function(){
	timeShover();
}) ,1000