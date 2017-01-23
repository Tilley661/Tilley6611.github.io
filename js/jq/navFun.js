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
	var oldT = $("#title-holder li[data-menu-index='" + cP +"']");		//when in title
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
	if (cP !== 0){
		
		oldT.animate({
				'margin-top': ($( window ).height() - oldT.height() - 20) + 'px'
		},1000, function(){
						oldT.animate({ 	
										'margin-right': ($( window ).width() - oldT.width() - ($('#main-nav li').offset().left)) + 'px'				
						},500,function(){
											oldT.animate({
													'font-size':'24px'
											},500, function(){
												oldT.animate({
													'margin-top': ($('#main-nav ul').offset().top + $('#main-nav ul').height()) +'px'
												},500, function(){
													oldT.appendTo($('#main-nav ul'));
													oldT.removeAttr('style');
												});
												
											});
						});
		});	
	}
	
	
/*	
	
		if (cP !== 0){
		
		//remove class from holder (shrink)
		$('#title-holder').removeClass('new-title');
		
		//remove style attribute from DOM
		oldT.removeAttr('style');
		
		//append to nav
		oldT.appendTo( $('#main-nav ul')); 
		
		console.log('oldUL value = ' + oldUL.val());
	}

	*/	    
	 
	
	//animation queue for nav to title
	//curr.css({'position': 'fixed'});
	var currW =  $("#main-nav ul li[data-menu-index='" + link +"'] a").width(); //get width for curr title
	var currO =  $("#main-nav ul li[data-menu-index='" + link +"'] a").offset(); //get offset for curr title
	var currVert = ((currO.top) * -1) + 20; //20px for padding
	var currHoriz = ($(window).width() - currW - 50);
	console.log('current verticle = ' + currVert + ' current horiz ' + currHoriz);
	
	//animation queue
	curr.css({
		'position': 'fixed' //makesure it is relative to screen
	});
	curr.animate({
		'margin-top': currVert + 'px'
		     }, 250
	);
	
	curr.animate({
		'margin-left': currHoriz + 'px'
			}, 500, function(){
						curr.appendTo( $('#title-holder') ); //move link to title
						curr.css({
							'position': 'inherit',
							'margin': '0px 0px 0px 0px',
							'top':'0px',
							'right':'0px'
						});
						//animate once appended
						curr.animate({
							'font-size':'30px' //get bigger
						},500);
	});
	
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
		}
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
				}
			}	
	}
});

//move current page to to title

if (cP === 0){
	//this means the nav is in the wrong place and no title is put foward.
	//therfore need to set the screen
	
	var aa = $(window).height();
	var ab = $('#main-nav ul').height();
	//console.log('position should be ' + ((aa/2) - (ab/2)) )
	
	//make main holder same size as screen
	/*
	$('#main-nav').css({
		'top': '0px',
		'left': '0px',
		'height': $(window).height() + 'px',
		'width': $(window).width() + 'px'
	});*/
	
	
	//change to absolute
	$('#main-nav ul').css({
		'position': 'absolute',	
		'display': 'none'
	});
	
	
	//fade in
	$('#main-nav ul').fadeIn();
	
	//animate to position 0px
	$('#main-nav ul').animate({
		'margin-left': '0px',
		'margin-top': ((aa/2) - (ab/2)) + 'px'
	},250, function(){
		//run function on complete
		moveToTitle2(1);  //set to home
	});
}


//on resize
$( window ).resize(function() {
	//get new size
	//reponsive nav bg
/*	$('#main-nav').css({
		'top':'0px',
		'left':'0px',
		'height':$(window).height() + 'px',
		'width':$(window).width() + 'px'
	});*/
	
	var aa = $(window).height();
	var ab = $('#main-nav ul').height();
	$('#main-nav ul').css({
		'left':'0px',
		'margin-top': ((aa/2) - (ab/2)) + 'px' 
	});
	//note: can load another page if width below 680px
	
	//on resize, move the current title to its new position
	
	
	
});


