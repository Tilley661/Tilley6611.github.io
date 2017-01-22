//Main functions to call to every page



//get init vars

//screen variables
var wH = $( window ).height();
var wW = $( window ).width();


//on resize
$( window ).resize(function() {
	debugPrint("Window has resized: Height = " + wH + " Width = " + wW, false, false);
	wH = this.height();
	wW = this.width();
	alert('height = ' + this.height() + ' width = ' + this.width());
});




/* //my debug function
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


 */


