
//create make shift canvas

var c = document.createElement('canvas');
c.id = 'canvas-1';
$('body').append(c)

var triDrawn = function drawTestTri(){
	if ($('#canvas-1').length === 0{
		return "canvas does not exist";
	}
	return "canvas exists";
};

debugPrint(triDrawn ,false, false);

