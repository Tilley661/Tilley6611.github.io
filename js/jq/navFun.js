//Main functions to call to every page



//get init vars

//screen variables
var wH = $( window ).height();             //current window height
var wW = $( window ).width();             //current window width
var qL = $('#main-nav ul li').length;      //how many links
var cP = 1;                                         //current page
var kFK = 1;                                       //keyframe counter



//on resize
$( window ).resize(function() {
	//get new size
	wH = $( window ).height();
	wW = $( window ).width();
	//note: can load another page if width below 680px
	
	//mill need to move all again here?
	//or maybe just set css for new position
	//moveTopLeft(cP)
});


//with current page - move to top

//get curr position of object to move

function moveToTitle(link){
var curr = $("#main-nav ul li[data-menu-index='" + link +"']");     //make a curr object
var currOffset = curr.offset();                                                     //make offset object
var endPos = 50;                                                                      //50px from top
var calcMove = currOffset.top - endPos;                                        //calculate move amount


	//create dynamic keyframe and add a number to the end
	$.keyframe.define([{
		name: 'move-to-title-' + kFK,
		'50%': {'transform': 'translate(0px,-' + calcMove + 'px)'},
		'100%': {'transform': 'translate(200px,-' + calcMove + 'px)'}
	}]);
	
	
	//add class to link to actually move it
	curr.css( 
				{	
					'animation-fill-mode': 'forwards',
					'animation-duration': '1s',
					'animation-name': 'move-to-title-' + kFK 
				});
	//add integer to to create more later	
	kFK = kFK + 1;
	
}



//add listener to check if anything has been clicked in navigation
$("#main-nav ul li a").click(function(){
	var clicked = $(this).parent().attr('data-menu-index')      //get index from data tag
	
	                                                                                 //check is number
	if (!isNaN(clicked) == true){
		 alert('clicked is numeric');
		 moveToTitle(clicked);
	 }else{
		 alert('There is an issue.');
		 return;
	 }
});

//move current page to to title
MoveToTitle(cP);


//how to locate menu item
//$("#main-nav ul li[data-menu-index='1']").html()
//move an object up -  .css(transform: translate(0px, -200px));




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


