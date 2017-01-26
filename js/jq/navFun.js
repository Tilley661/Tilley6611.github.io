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
	
	/*
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

			
	
	*/
		
	//get init values
	var storePosOfLastT = $('#main-nav li:nth-of-type(3)').find('a').offset().top;
	var storePosOfLastL = $('#main-nav li:nth-of-type(3)').find('a').offset().left;

	
	//-------------------------------------move to nav
	var moveBackToNav = {
		
		//call the put from here once appended title text
		toMove: $("#title-holder li"),
		holder: $('#title-holder-2'),
		
		pickUpLink: function(){
			oS = this.toMove.offset();
			console.log('Title text - top: ' + oS.top + ' left: ' + oS.left);
				
			this.holder.css({
					width: this.toMove.find('a').width() + 'px',
					left: this.toMove.parent().offset().left + 'px',
					top: oS.top + 'px',
					fontSize: tT + 'px'
				});
				this.toMove.appendTo(this.holder);
				//----------------------------------start MOVING NEW TITLE!!!
				moveTopRight.start();
				return true;
		},
		
		moveDownPage: function(){
			if(this.pickUpLink()){
					this.holder.animate({
						top: $(window).height() - this.holder.offset().top - this.holder.height() + 20 + 'px'
					},400);
			}
			return true
		},
		
		scaleText: function(){
			if(this.moveDownPage()){
					this.holder.animate({
						fontSize: tN + 'px'
					},400);
			}	
			return true;
		},
		
		moveLeftOverPage: function(){
			if(this.scaleText()){
					this.holder.animate({
						left: '40px'
					},500);
			}
			return true
		},
		
		moveBackToNav: function(){
			console.log('last L = ' + storePosOfLastL);
			console.log('last T = ' + storePosOfLastT);
			if(this.moveLeftOverPage()){
					this.holder.animate({
						top: storePosOfLastT + 'px',
						left: storePosOfLastL + 'px'
					},500, function(){
						moveBackToNav.holder.find('li').appendTo($('#main-nav ul'));
					});
			}
			return true
		},
		
		start: function(){
			if (this.moveBackToNav()){
			console.log('moving back to nav');
			}
		}
	}
	
	
	//-------------------------------------move to title
	
	var moveTopRight = {
		
		toMove: $("#main-nav ul li[data-menu-index='" + link + "']"),
		holder: $('#title-holder'),
		
			
			
	pickUpLink: function(){	
			//get position of link before append
      oS = this.toMove.offset();
			
			console.log('top: ' + oS.top + ' left: ' + oS.left);
			var wT = this.toMove.find('a').width();
			//init dosnt need animation
			this.holder.css({
				width: wT + 'px',
				left: '40px',
				top: oS.top + 'px'
			});
			this.toMove.appendTo(this.holder);
			return true;
		},
		
		
      moveUpPage: function(){
			if(this.pickUpLink()){ //check that linbk is picked up
				this.holder.animate({
					top: '40px'
				},200);
				return true;
			}
		},
		
		moveAcrossPage: function(){
			if(this.moveUpPage()){ //check that linbk is picked up
				this.holder.animate({
					top: '40px',
					left: $(window).width() - this.holder.offset().left - this.holder.find('a').width() - 40 + 'px' 
				},500);
				return true;
			}
		},
		
		scaleTextUp: function(){
			if (this.moveAcrossPage()){
				this.holder.animate({
					fontSize: tT + 'px',
					marginRight: this.holder.find('li a').width() + 'px'
				},300);
			}
			return true;
		},
		
		start: function(){
			
			if (this.scaleTextUp()){
				cP = link;
				this.holder.removeAttr('style'); //reset
				return true;
			}
		}
			
	};
	
	//decide which functions to run
	
	if (cP == link){
		console.log('current page has been clicked');
		return false;
	}
	
	
	if (cP !== 0 ){
		console.log('current page != 0 - actual = ' + cP + ' ... moving home');
		moveBackToNav.start();
	}else{
		console.log('current page = 0 - actual = ' + cP + '... moving to page: ' + link);
		moveTopRight.start();
	}
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


