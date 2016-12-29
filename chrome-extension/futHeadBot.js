var nextPackButton = document.getElementsByClassName("btn btn-warning next-pack hidden-xs")
var hypeNum = document.getElementsByClassName("display-inline-block hidden-xs");
var highestPackScore = 0;

if(hypeNum.length > 0){
	getText()
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function getText() {

	sleep(7000).then(() => {
		var packScore = document.getElementsByClassName("value")[0].innerHTML;
		// alert('hypeScore = ' + packScore);
		window.location.reload();
		// window.location.href = "http://www.futhead.com/packs/open/fifa-17/";
	});
}