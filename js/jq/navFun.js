//Main functions to call to every page



//get init vars

//screen variables
var wH = $( window ).height();             //current window height
var wW = $( window ).width();             //current window width
var qL = $('#main-nav ul li').length;      //how many links
var cP = 0;                                         //current page init = 0
var kFK = 1;                                       //keyframe counter






//the below function moves an item from the navigation to the top right corner
function moveToTitle(link){
	var curr = $("#main-nav ul li[data-menu-index='" + link +"']");     //make a curr object
	var currOffset = curr.offset();                                                     //make offset object
	var endPos = 50;                                                                      //50px from top
	var calcMove = currOffset.top - endPos;                                    	//calculate move amount
	var calcMoveX = wW - curr.width() - endPos;

		//create dynamic keyframe and add a number to the end
		$.keyframe.define([{
			name: 'move-to-title-' + kFK,
			'50%': {'transform': 'translate(0px,-' + calcMove + 'px)'},
			'100%': {'transform': 'translate(' + calcMoveX + 'px,-' + calcMove + 'px)'}
		}]);
		
		
		//add class to link to actually move it
		curr.addClass('moving');
		curr.css( 
					{	
						'animation-fill-mode': 'forwards',
						'animation-duration': '1s',
						'animation-name': 'move-to-title-' + kFK 
					});
		//add integer to to create more later	
		kFK = kFK + 1;
		//set the curr page
		cP = link;
		console.log('Current page is = '+cP);
		
}


function moveToTitle2(link){
	var curr = $("#main-nav ul li[data-menu-index='" + link +"']");     //make a curr object
	var old = $("#main-nav ul li[data-menu-index='" + cP +"']");
	var currOffset = curr.offset();                                                     //make offset object
	var endPos = 50;                                                                      //50px from top
	var calcMove = currOffset.top - endPos;                                    	//calculate move amount
	var calcMoveX = wW - curr.width() - endPos;
	
	
	//check to see if page is current - if so exit
	if (cP === link){
		console.log('current page has been clicked');
		return;
	}
	
	//get old postion
	
	
	curr.css({'position': 'relative'})
	curr.animate({top: calcMove*-1 +'px'},500);
	curr.animate({left: calcMoveX + 'px'},1000);
	//animation fiished so set new CSS
	curr.css({
			'position': 'fixed',
			'top': curr.offset().top,
			'left': curr.offset().left
	});
	
	
	
	
	cP = link;
	
}
  
  
  
//add listener to check if anything has been clicked in navigation
$("#main-nav ul li a").click(function(){
	var clicked = $(this).parent().attr('data-menu-index');      //get index from data tag
	
	                                                                                 //check is number
	if (isNaN(clicked) === false){
		if (cP === clicked){
			console.log('current page has been clicked');
			return;
		}else{
		 console.log('clicked is numeric');
		 moveToTitle2(clicked);
		}
	 }else{
		 console.log('There is an issue.');
		 return;
	 }
});

//move current page to to title

if (cP === 0){
		moveToTitle2(1);  // se to home
}


//on resize
$( window ).resize(function() {
	//get new size
	wH = $( window ).height();
	wW = $( window ).width();
	//note: can load another page if width below 680px
	moveToTitle2(cP);
});


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


