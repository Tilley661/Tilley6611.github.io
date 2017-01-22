//Main functions to call to every page



//get init vars

//screen variables
var wH = $( window ).height();             //current window height
var wW = $( window ).width();             //current window width
var qL = $('#main-nav ul li').length;      //how many links


//on resize
$( window ).resize(function() {
	//get new size
	wH = $( window ).height();
	wW = $( window ).width();
	//note: can load another page if width below 680px
});


//how to locate menu item
//$("#main-nav ul li[data-menu-index='1']").html()





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


