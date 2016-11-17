//Main functions to call to every page



function printLine(str){
	if (str === undefined){
		str = "No debug sent";
	}else{
		$("#debug").html(str);
	}
}

printLine("testing debug");

