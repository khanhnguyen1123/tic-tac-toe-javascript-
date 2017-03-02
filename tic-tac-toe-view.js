

var ui = {};

ui.insertAt = function (index){
	document.getElementById(index).innerHTML = globals.gameLogic.turn;
}

ui.updateScore = function(){
	document.getElementById("Player1").innerHTML = globals.gameLogic.getPlayer1().score+ "|";
	document.getElementById("Player2").innerHTML = globals.gameLogic.getPlayer2().score;
	document.getElementById("tie").innerHTML = globals.gameLogic.getPlayer1().tie;
	if (globals.gameLogic.turn === "X")
		document.getElementById("currentPlayer").innerHTML = "1 X";
	if (globals.gameLogic.turn === "O")
		document.getElementById("currentPlayer").innerHTML = "2 O";
}

function clearForNewGame(){
	globals.gameLogic.newGame();
	for(var i=0;i<9;i++){
		document.getElementById(i).innerHTML = "";
	}
}

ui.updatePlayerTurn = function(){
	if (globals.gameLogic.turn === "X")
		document.getElementById("currentPlayer").innerHTML = "1 X";
	if (globals.gameLogic.turn === "O")
		document.getElementById("currentPlayer").innerHTML = "2 O";
}

ui.loadPageStateFromCookie = function(){
	for (var i =0; i<9;i++){
		if (globals.gameLogic.getCurrentBoard()[i] === "E")
			document.getElementById(i).innerHTML = "";
		else
			document.getElementById(i).innerHTML = globals.gameLogic.getCurrentBoard()[i];
	}
}