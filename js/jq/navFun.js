//Main functions to call to every page



//get init vars

//screen variables
var wH = $( window ).height();         	//current window height
var wW = $( window ).width();           	//current window width
var qL = $('#main-nav ul li').length;    	//how many links
var cP = 0;                                       	//current page init = 0
var kFK = 1;                                	 	//keyframe counter
var aP = false;                                 	//is there an animation in progress
var b = 50;										//border amount




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
	
	//check to see if animation is active
	
	//get old postion
	//var oldOffset = old.offset();
	var newPos = $('#main-nav').position();
	var newPosX = newPos.left;
	var newPosY = newPos.top;
	
	//animation queue for title to nav
	old.css({'position': 'absolute'});
	
	old.animate({
		top: (wH - old.height()) + 'px'
		}, {
			duration: 500, 
			//queue:false
	});
	
	old.animate({
		left: newPosX + 'px'
		}, {
			duration: 500
	});
	old.animate({
		top: newPosY + 'px'
		}, {
			duration: 500
	});
	//old.queue(function(){
	//			old.css({
	//				'position': 'fixed',
	//				'top': newPosY,
	//				'left': newPosX
	//			});
	//		});
	
	 
	
	//animation queue for nav to title
	curr.css({'position': 'relative'});
	
	//animation queue
	curr.animate({top: calcMove*-1 +'px'},{
		duration:500,
		//queue:false
	});
	curr.animate({left: calcMoveX + 'px'},1000, function(){
					curr.css({
						'position': 'fixed',
						'top': curr.position().top - (curr.height())/2,
						'left': curr.position().left
					});
				});
	//end of animation
	
	cP = link;
	
}
  
    
  
//add listener to check if anything has been clicked in navigation
$("#main-nav ul li a").click(function(){
	var clicked = $(this).parent().attr('data-menu-index');
	//is a link being animated already?
	$("li").each(function(){
		if ($(this).is(':animated')){
			aP = true;
			//break out
			//this break out ends the each before false can be set again
			return false;
		}else{
			aP = false;
		};
	});
	
	if(aP===true){
		//animation in progress so end
		//alert('animation is running');
		return false;
	}else{
		//animation is not running - continue to move
		console.log('animation not running');
		if (isNaN(clicked) === false){
				//number is all good
				//check if current page
				if (cP == clicked){
					console.log('current page has been clicked');
				}else{
					//not current so move
					moveToTitle2(clicked);
				};
			};	
	};
});


	
	
	
	
	
/* 	
			if($(this).is(':animated')){
			console.log('animation in progress');
		}else{
			alert('you have clicked and no animation');
			//nothing is being animated
			//check number

		}
	});
}); */













//move current page to to title

if (cP === 0){
		moveToTitle2(1);  // set to home
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


