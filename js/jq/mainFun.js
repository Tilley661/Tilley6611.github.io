//Main functions to call to every page



//my debug function
function debugPrint(str, clear, bold){
	var a = Math.random();
	if (str === undefined){
		str = "No debug sent";
	}
	if (clear === true){
		$("#debug").html("");
	}
	var p = document.createElement("p");
	var t = document.createTextNode(str);
	p.appendChild(t);
	if (bold !== undefined && bold === true){
		p.style.cssText = "font-weight:bold;";
	}
	$("#debug").append(p);
}

debugPrint("Debug Section:", false, true);


//mouse move function


function getCord(e){
	var x = e.clientX;
	var y = e.clientY;
	$("#debug").html("Coordinates of mouse: (" + x + "," + y + ")");
}

$("#debug").innerHTML("onmousemove='getCord(e)'");





