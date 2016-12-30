var hypeNum = document.getElementsByClassName("display-inline-block hidden-xs");

var savePackButton = document.getElementsByClassName("btn btn-success save-pack");

var highestPackScore = 40000;

if(hypeNum.length > 0){
	getText()
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function getText() {

	sleep(11000).then(() => {
		var packScoreStr = document.getElementsByClassName("value")[0].innerHTML;
		var packScore = parseInt(packScoreStr.replace(/,/g,""),10);
		if(highestPackScore < packScore){
				savePackButton[0].click();
				var packName = document.getElementById("name");
				packName.value = packScoreStr + ' Hype';
				var saveButton = document.getElementsByClassName("btn btn-success modal-save");
				saveButton[0].click();
		}
		window.location.reload();
		// window.location.href = "http://www.futhead.com/packs/open/fifa-17/";
	});
}