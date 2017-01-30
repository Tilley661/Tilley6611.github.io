//content animation
console.log('testers page');

scrollPercent = 0;
//setup function

//using getVars makes functions less likely to clash
var getVars = {
	
	//get content string
	pageStr: function(){
		return $('#title-holder a').html();
	},
	
	//make content an object
	cObj: function(){
		return $("#content section[data-section='" + this.pageStr() + "']" );
	},
	
	//get content positions
	cPos: {
		cTop: function(){
			return getVars.cObj().position().top;
		},
		
		cMargTop:function(){
				a = getVars.cObj().css('margin-top');
				return parseInt(a);
		},
		
		cLeft: function(){
			return getVars.cObj().position().left;
		}
		
	},
	
	arrowHolders: {
		aUp: function(){
			return $('.dummy_top');
		},
		aDown: function(){
			return $('.dummy_bot');
		}
	},
	
	test: function(){
		//console.clear(); 									//clear to see whats happening
		console.log('----Look here----');
		console.log(this.cPos.cMargTop());
		console.log('^^^^Look here^^^^');
	}
	
};


var timerFunctions = {
	
	//store timers in here timers
	
	logMargin: function(){
		logMarginTimer = setTimeout(function(){              							   		//this i global and can be cleared
					console.log('Content margin top = ' + getVars.cPos.cMargTop());
					var a = getVars.cPos.cMargTop();
					var b = 2000;								//max 
					scrollPercent = a/b;						//set percentage moved actual/total
					aControl.test();
					timerFunctions.logMargin();
				}, 1000);
	},
};



var percentTrial = {
	
	per_10:{
		//p:between 0 & 0.1
		
		holder: function(){
			return getVars.cObj().find("data-perc='1_10'");
		},
		
		start:function(){
			console.log(this.holder().html());
		},
		
		debug: function(){
			console.log('the current percent = ' + scrollPercent);
			console.log('you have found p = ' + this.p);
		},
		
		test: function(){
			this.debug();
		},
	},
	
	per_20:{
		p:2,
	},
	
	per_30:{
		p:3,
	}
};


var aControl = {
	
	getPercent: function(){
		//percentage will be negative for a positive motion
		var a = scrollPercent * -1;   //convert positive to positve motion
		
		if (a < 0){																					//check if < 0 
			console.log('scroller is < 0, plan to stop animation here');
			return a;
		}else{
			if (a < 0.1){
					console.log('screen is < 10%');
					percentTrial.per_10.start();
			}
			return a;
		}
	},
	
	start:function(){
		this.getPercent();
	},
	
	test: function(){
		console.log('aControl percent = ' + this.getPercent());
	}
	
};





//clear console for clarity
console.clear();




//mouse enter, leave events
getVars.arrowHolders.aUp()
	.on("mouseenter", function(){
		setTimeout(timerFunctions.logMargin, 100);
	})
	.on("mouseleave", function(){
		clearTimeout(logMarginTimer);
	});
getVars.arrowHolders.aDown()
	.on("mouseenter", function(){
		setTimeout(timerFunctions.logMargin, 100);
	})
	.on("mouseleave", function(){
		clearTimeout(logMarginTimer);
	});