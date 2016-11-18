//Main functions to call to every page


//my debug function
function debugPrint(str, clear, dynCSS){
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
	p.id
	if (bold !== undefined && bold === true){
		p.style.cssText = dynCSS;
	}
	$("#debug").append(p);
}

debugPrint("Debug Section:", false, "font-weight:bold;");
