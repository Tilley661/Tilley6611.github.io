
//globals

var hitTop = $('.dummy_top');      	
var hitBot = $('.dummy_bot');      	
var hitTop2 = $('.dummy_top2');      	
var hitBot2 = $('.dummy_bot2'); 
var cont = $('#content section');
var d2 = 5;
var t2 = 40;
var moveUpT;
var moveDownT;
var timerRunning = '';






var drawArrow = {
	canvasID :'move_arrow',
	
	draw :function(val){
		console.log('value = ' + val);
		var ctx = val.getContext('2d');
		
		ctx.beginPath();
		ctx.moveTo(0,150);
		ctx.lineTo(150,0);
		ctx.lineTo(300,150);
		ctx.lineWidth = 15;
		ctx.strokeStyle = 'white';
		ctx.stroke();
	}
};



//draw arrows;
var canvass = document.getElementsByClassName(drawArrow.canvasID);
for (i=0 ; i < canvass.length ; ++i ){
	if (canvass[i].getContext){
		drawArrow.draw(canvass[i]);
		console.log(canvass[i]);
	}
}
//end drawing arrows



function moveUp(s2 = 1){
	cont.css({
		'margin-top': '+=' + (s2*d2) + 'px'
	});

	moveUpT = setTimeout(function(){
		timerRunning = 'up';
		moveUp(s2);
	}, t2);
}

function moveDown(s=1){

	cont.css({
		'margin-top': '-=' + (s * d2) + 'px'
	});

	moveDownT = setTimeout(function(){
		timerRunning = 'down';
		moveDown(s);
	}, t2);
}


//-------------------------------SCROLL HANDLERS -----------------------
hitTop
	.on("mouseenter", function(){
		moveUp(1);
	})
	.on("mouseleave", function(){
		cont.animate({
			'margin-top': '+=20px'
		},200, 'easeOutQuart', function(){
			clearTimeout(moveUpT);
		})
	});

hitBot
	.on("mouseenter", function(){
		moveDown(1);
	})
	.on("mouseleave", function(){
		cont.animate({
			'margin-top': '-=20px'
		},200, 'easeOutQuart', function(){
			clearTimeout(moveDownT);
		})
	});
// ----------------------END OF SCROLL HANDLERS -------------------
	

/*
			

superseded hovers

			
hitTop.hover(function(){
	moveUp(1);
},function(){
	cont.animate({
		'margin-top': '+=20px'
	},200, 'easeOutQuart', function(){
		clearTimeout(moveUpT);
	});
	
});


hitBot.hover(function(){
	moveDown(1);
},function(){
	cont.animate({
		'margin-top': '-=20px'
	},200, 'easeOutQuart', function(){
		clearTimeout(moveDownT);
	});
});

*/

//NOTE this is causeing recursion error but not fatal
var fadeTog = {
	toFade: $('.move_arrow'),
	time:500,
	
	fader: function(){
		this.toFade.fadeToggle(this.time, function(){
			fadeTog.fader();
		});
	},
	
	start: function(){
		this.fader();
	}
};

fadeTog.start();




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
