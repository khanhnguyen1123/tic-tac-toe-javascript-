
var globals = {};

globals.gameLogic = new Game ();

var gameCookies = {};
var board = globals.gameLogic.getCurrentBoard();


var saveCookie = function(){
	gameCookies["player1Score"] = globals.gameLogic.getPlayer1().score;
	gameCookies["player2Score"] = globals.gameLogic.getPlayer2().score;
	gameCookies["tie"] = globals.gameLogic.getPlayer1().tie;
	gameCookies["currentTurn"]  = globals.gameLogic.turn;
	var board = globals.gameLogic.getCurrentBoard();
	for (var i = 0; i <board.length ;i++){
		gameCookies[i]=board[i];
	}
	// start save cookie
	document.cookie = "";
	var expire = new Date(Date.now()+60*10000).toString();
	var cookieString = "";
	for (var key in gameCookies){
		cookieString = key +"="+gameCookies[key]+ ";"+expire+";";
		document.cookie = cookieString;
	}
	
}; // end saveCookie function

function loadCookie(){

	var cookies= {};
	var keyValue = document.cookie.split(";");
	for (var id in keyValue){
		var cookie = keyValue[id].split("=");
		cookies[cookie[0].trim()]=cookie[1];
	}
	
	// set value from cookies to globals object 
	if (typeof cookies["tie"] != "undefined"){
		globals.gameLogic.setPlayer1Score(cookies["player1Score"],cookies["tie"]);
		globals.gameLogic.setPlayer2Score(cookies["player2Score"],cookies["tie"]);	
		globals.gameLogic.setCurrentTurn(cookies["currentTurn"]);
		globals.gameLogic.setBoard(cookies);
		
	
		ui.updateScore();
		ui.loadPageStateFromCookie();
	} // end if cookie is undefined

	if (typeof cookies["tie"] == "undefined"){
		
		ui.updateScore();
		ui.loadPageStateFromCookie();
	}
};// end loadCookie

function deleteCookie(){
	gameCookies["player1Score"] = globals.gameLogic.getPlayer1().score;
	gameCookies["player2Score"] = globals.gameLogic.getPlayer2().score;
	gameCookies["tie"] = globals.gameLogic.getPlayer1().tie;
	gameCookies["currentTurn"]  = globals.gameLogic.turn;

	var board = globals.gameLogic.getCurrentBoard();
	for (var i = 0; i <board.length ;i++){
		gameCookies[i]=board[i];
	}
	// start save cookie
	document.cookie = "";
	var expire = new Date(Date.now()-60*1000000).toString();
	var cookieString = "";
	for (var key in gameCookies){
		cookieString = key +"="+gameCookies[key]+ ";"+expire+";";
		document.cookie = cookieString;
	}
	
	
	globals.gameLogic.refreshNewGame();
	ui.updateScore();
	ui.loadPageStateFromCookie();
	
}

var playDecision = function	(id){
	
	globals.gameLogic.updateState(id-9);
	if (globals.gameLogic.isEmptyCell(id-9)){
		console.log("this cell is empty");
	}
};

