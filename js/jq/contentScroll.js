

console.log('im here');


//globals
//var dummyWidth = 


var hitTop = $('.dummy_top');      	//top hiit bar
var hitBot = $('.dummy_bot');      	//bot hit bar
var cont = $('#content section');
var d = 75;										//distance 
var t = 500;									//time interval
//var tI= 1;

function moveUp(){
	cont.animate({
		'margin-top': '-=' + d + 'px'
	}, t, 'linear');
	//tI = t; //set interval back to original
	moveUpT = setTimeout(moveUp, t);
}

function moveUpFinal(){
	//start by adding space
	cont.animate({
		'margin-top': '+=' + d + 'px'
	}, t/2, function(){
			//take the space back with ease effect
			cont.animate({
					'margin-top': '-=' + d + 'px'
				}, t/2, 'easeOutBack');
	});
	//tI = t; //set interval back to original
	clearTimeout(moveUpT);
}

								
hitTop.hover(function(){

	if (!cont.is(':animated')){
		moveUp();
	}
},function(){
	moveUpFinal();
});
	

//hitTop.hover(clearTimeout(moveUpT));



$( window ).resize(function() {
	
	console.log('proof two functions at once');
});
