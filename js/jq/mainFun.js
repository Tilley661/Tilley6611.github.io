//Main functions to call to every page


//my debug function
function debugPrint(str, clear){
	if (str === undefined){
		str = "No debug sent";
	}
	if (clear == true){
		$("#debug").html("");
	}
	var p = document.createElement("p");
	var t = document.createTextNode(str);
	p.appendChild(t);
	$("#debug").append(p);
}

debugPrint("Debug Section:", false);
