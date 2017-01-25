

console.log('im here');


//globals

var hitTop = $('.dummy_top');      	
var hitBot = $('.dummy_bot');      	
var hitTop2 = $('.dummy_top2');      	
var hitBot2 = $('.dummy_bot2'); 
var cont = $('#content section');
var d2 = 5;
var t2 = 40;
var moveUpT;
var timerRunning = '';


function moveUp(s2 = 1){
	cont.css({
		'margin-top': '-=' + (s2*d2) + 'px'
	});

	moveUpT = setTimeout(function(){
		timerRunning = 'up';
		moveUp(s2);
	}, t2);
}

function moveDown(s=1){

	cont.css({
		'margin-top': '+=' + (s * d2) + 'px'
	});

	moveDownT = setTimeout(function(){
		timerRunning = 'down';
		moveDown(s);
	}, t2);
}


function moveUpFinal(){
	
	cont.animate({
			'margin-top': '-=' + (d2+10) + 'px'
		}, 500, 'easeOutQuart', function(){
				clearTimeout(moveUpT);
				timerRunning = '';
		});
}


function moveDownFinal(){

	cont.animate({
			'margin-top': '+=' + (d2+10) + 'px'
		}, 500, 'easeOutQuart', function(){
				clearTimeout(moveDownT);
				timerRunning = '';
		});	
	
}

								
hitTop.hover(function(){
	moveUp(1);
},function(){
	moveUpFinal();
});


hitBot.hover(function(){
	moveDown(1);
},function(){
	moveDownFinal();
});



/*

$('#content').mouseover(function(){
	console.log('timmer running = ' + timerRunning);
	if(timerRunning !== ''){
			switch (timerRunning){
			case 'up':
			console.log('trying to remove up');
				moveUpFinal();
				
			case 'down':
			console.log('trying to remove down');
				moveDownFinal();
			default:
				return;
		}
	}
});

/*

function checkHover(ID){
	if ($("'." + ID + ":hover'").length > 0){
		console.log('class has worked');
		return true;
	}else{
		return false;
	}
}

*/
