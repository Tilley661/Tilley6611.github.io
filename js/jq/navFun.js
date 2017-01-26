//get init vars

//screen variables          	
var qL = $('#main-nav ul li').length;    	//how many links
var cP = 0;                                       	//current page init = 0
var kFK = 1;                                	 	//keyframe counter
var aP = false;                                 	//is there an animation in progress
var b = 50;										//border amount
var tN = 24;										//normal text size
var tT = 52;										//text size for title
var linkDifGlob = 0;							//get the dif on init load
var globalLastOffLeft = 0;					// this is a static value unless resized. get from init
var globalHO = 0;								//dito - but for horizontals
var cont = $('#content section');           //reset content section


//load content in
function loadContent(page){
	console.log(page + ' is passed to function');
	
	$('#content section').fadeOut();
	var sS = $("#content section[data-section='" + page + "']"); //get content page
	sS.fadeIn();
}

function moveToTitle2(link){
	var curr = $("#main-nav ul li[data-menu-index='" + link +"']");     //make a curr object
	var oldT = $("#title-holder li[data-menu-index='" + cP +"']");		//when in title
	var oldTa = $("#title-holder li[data-menu-index='" + cP +"'] a");	//get a when in title	
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
			'margin-top': ($( window ).height() - oldT.height() - 20) + 'px',
			'margin-right': '20px'	
		},150, function(){
			console.log('debug: 001 - moved to bottom - detatching');
			oldT.appendTo($('#title-holder-2'));
			oldT = $('#title-holder-2 li');
			oldT.animate({
				'font-size': tN + 'px', //shrink
				'margin-right': '20px'  //move inline
			},150,function(){
				console.log('debug: 002 - finished shrink');
				var mH = $( window ).width() - oldT.find('a').width() - globalHO; 
				oldT.animate({
					'margin-right': mH + 'px'
				}, 250, function(){
					console.log('debug: 003 - finished moving left');
					//move up
					//console.log('offset 1 = ' + $('#main-nav ul li:nth-of-type(2)').offset().top);
					//console.log('offset 2 = ' + $('#main-nav ul li:nth-of-type(3)').offset().top);
					//var linkDif = $('#main-nav ul li:nth-of-type(3)').offset().top - $('#main-nav ul li:nth-of-type(2)').offset().top; //second link offset - first
					var mV2 = globalLastOffLeft + linkDifGlob;
					console.log('linkDifGlob = ' + linkDifGlob);  //changed to global
					console.log('mV2 = ' + mV2);
					oldT.animate({
						'margin-top': mV2 + 'px'
					}, 250,function(){
				     		console.log('completed animation -detaching');
						oldT.removeAttr('style');
						oldT.appendTo($('#main-nav ul'));
					});
				});
			});
		});
	}
			
	//animation queue for nav to title

	var currW =  $("#main-nav ul li[data-menu-index='" + link +"'] a").width(); //get width for curr title
	var currO =  $("#main-nav ul li[data-menu-index='" + link +"'] a").offset(); //get offset for curr title
	var currVert = ((currO.top) * -1) + 20; //20px for padding
	var currHoriz = ($(window).width() - currW - 50);
	console.log('current verticle = ' + currVert + ' current horiz ' + currHoriz);
	
	//animation queue
	curr.css({
		'position': 'fixed',
		'z-index':'1000'
	});
	curr.animate({
		'margin-top': currVert + 'px'
		     }, 250);
	curr.animate({
		'margin-left': currHoriz + 'px'
			}, 500, function(){
						curr.appendTo( $('#title-holder') ); //move link to title
						curr.css({
							'position': 'inherit',
							'margin': '0px 0px 0px 0px',
							'top':'0px',
							'right':'0px',
							'z-index':'1'
						});
						//animate once appended
						curr.animate({
							'font-size': tT + 'px' //get bigger
						},150);
	});
	
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
					resetContent();
					console.log('current page has been clicked');
				}else{
					//not current so move and load content
					moveToTitle2(clicked);
					var p = $(this).html();
					loadContent(p);
					resetContent();
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
		loadContent('Home'); //load home content
		
		//login behind this - Nothing is moving and 3 links at least in the nav..... take the offset of middle link from last link to give a difrence which never changes unless resized
		//set the difrence between links when none are moving
		linkDifGlob = $('#main-nav ul li:nth-of-type(3)').offset().top - $('#main-nav ul li:nth-of-type(2)').offset().top; 
		globalLO = $('#main-nav ul li').last().offset().top;
		globalLastOffLeft = $('#main-nav ul li').last().offset().top;
		globalHO = $('#main-nav ul li:nth-of-type(2)').offset().left;
	});
}


function resetContent(){
	cont.animate({
						'margin-top': '0px'
	}, 500);
}


//on resize
$( window ).resize(function() {
	//get new size
	//reponsive nav bg
	
	var aa = $(window).height();
	var ab = $('#main-nav ul').height();
	$('#main-nav ul').css({
		'left':'0px',
		'margin-top': ((aa/2) - (ab/2)) + 'px' 
	});
	
	//set the difrence between links when none are moving
	linkDifGlob = $('#main-nav ul li:nth-of-type(3)').offset().top - $('#main-nav ul li:nth-of-type(2)').offset().top; //second link offset - first
	globalLastOffLeft = $('#main-nav ul li').last().offset().top;
	globalHO = $('#main-nav ul li:nth-of-type(2)').offset().left;
		
});


