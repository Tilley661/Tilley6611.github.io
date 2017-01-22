//Main functions to call to every page



//get init vars

//screen variables          	
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
	var calcMoveX = $(window).width() - curr.width() - endPos;
	 
	
	//check to see if page is current - if so exit
	if (cP == link){
		console.log('current page has been clicked');
		return;
	}
	
	//check to see if init
	if (!cP == 0){
	//get old postion
	//var oldOffset = old.offset();
	var newPos = $('#main-nav').position();
	var newPosX = newPos.left;
	var newPosY = newPos.top;
	//animation queue for title to nav
	//old.css({'position': 'relative'});
	
	old.animate({
		'margin-top': ($(window).height() - old.height())*-1 + 'px'
		}, {
			duration: 500, 
			//queue:false
	});

	old.animate({
		'margin-left': 0 + 'px'
		}, {
			duration: 500
	});
	old.animate({
		'margin-top': 0 + 'px'
		}, {
			duration: 500,
			function(){
				old.removeClass("new-title");
			}
	});
};
	 
	
	//animation queue for nav to title
	//curr.css({'position': 'fixed'});
	
	
	//animation queue
	curr.animate({'margin-top': ($(window).height/2) + 'px'},{
		duration:500,
		//queue:false
	});
	console.log('the height of link = ' + curr.height());
	console.log('the width of link = ' + curr.width());
	console.log('the actual value used here = ' + parseInt($(window).width() - curr.width() ) );
	
	curr.animate({'margin-left': curr.width() + 'px'},1000, function(){
					curr.addClass('new-title');
				});
	//end of animation
	
	//change nav box
	//$('#main-nav').removeClass('resize-nav').addClass('resize-nav');
	
	cP = link;
	
}
  
  
  
 /*  					curr.css({
						'position': 'fixed',
						'top': curr.position().top - (curr.height())/2,
						'left': curr.position().left
					});
     */
  
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

//move current page to to title

if (cP === 0){
		moveToTitle2(1);  // set to home
}


//on resize
$( window ).resize(function() {
	//get new size

	//note: can load another page if width below 680px
});


