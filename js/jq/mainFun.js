//Main functions to call to every page



//my debug function
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


//mouse move function
var x;
var y;

$(window).mousemove(function(e){
	x = e.clientX;
	y = e.clientY;
	var htm = 'mouseX = ' + x + ' mouseY = ' + y;
	if ($('#debug #cord').length === 0){
		var p = document.createElement('p');
		var t = document.createTextNode(htm);
		p.id='cord';
		p.append(t);
		$('#debug').append(p);
	}else{
		$('#debug #cord').html(htm);
	}
});


//create make shift canvas
var c = document.createElement('canvas');
c.id = 'canvas-1';
$('#canvas-holder').append(c);
var drawTriDebug ='Function not run';

var canvas;
var ctx;

function drawTri()
{
	if ($('#canvas-1').length === 0)
	{
		drawTriDebug = 'No canvas detected';
		
	}
	drawTriDebug = 'Canvas detected';
	//draw triangle
	canvas = document.getElementById("canvas-1")
	ctx=canvas.getContext("2d");
	
	ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 150);
    ctx.lineTo(150, 150);
    ctx.lineTo(100, 50);
    ctx.stroke();
}

drawTri();
debugPrint(drawTriDebug,false, false);

$(window).mousemove(function(){
	var inside = ctx.isPointInPath(x,y);
	if (inside === true)
	{
			$('#in-test').html('cursor is inside tri');
	}else{
		$('#in-test').html('cursor is <b>NOT</b> inside tri');
	}
});





