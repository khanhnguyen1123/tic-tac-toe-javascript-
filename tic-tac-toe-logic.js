/*
 *	represent player:
 *	@parameter: symbol X or O
 */
 var Player = function(symbol){
 	
 	this.symbol = symbol;
 	this.tie = 0;
 	this.score = 0;
 };
 	 

 /*
  *	represent main function of tictactoe game
  * attributes: 2 players X and O, status of a game, state of game, current player's turn
  *
  */
  var Game = function(){
  	var player1= new Player("X");
 	  var player2= new Player("O");
  	
  	
  	this.turn = "X"; // player1 X plays first
  	var currentPlayer = player1;

  	var board = ["E","E","E",
  				 "E","E","E",
  				 "E","E","E"];
  	this.getCurrentBoard = function(){
  		return board;
  	}
  	this.setBoard = function(array){
  		for (var i = 0; i <board.length ;i++){
  			
			 board[i] = array[i];
	  	}	
  	}
  	this.getPlayer1= function(){
  		return player1;
  	}	
    this.setPlayer1Score = function(s,t){
      player1.score = s;
      player1.tie = t;
    }
  	this.getPlayer2=function(){
  		return player2;
  	}		 
    this.setPlayer2Score = function(score,tie){
      player2.score = score;
      player2.tie = tie;
    }
  	this.getCurrentPlayer = function(){
  		return currentPlayer;
  	}
    this.setCurrentTurn = function(t){
      this.turn = t;
    }
  	/* This emptyCells function return numbers of current empty cells
  	 * 	@return: emptyCells
  	 */	 
  	this.emptyCells = function() {
        var indxsOfEmptyCells = [];
        for(var itr = 0; itr < 9 ; itr++) {
            if(board[itr] === "E") {
                indxsOfEmptyCells.push(itr);
            }
        }
        return indxsOfEmptyCells;
    }; // end emptyCells function

    // this function checks if a cell is empty
    this.isEmptyCell= function(indx){
    	
    	
    	if(board[indx] === "E")
    		return true;
    	
    	return false;
    }; // end isEmptyCell

    /* This function checks if the game end with a winner or a tie game
     * 
     * 
     */
     this.isTerminal = function() {
        
        var B = board;

        
        //check rows
        for(var i = 0; i <= 6; i = i + 3) {
            if(B[i] !== "E" && B[i] === B[i + 1] && B[i + 1] === B[i + 2]) {
            	
                currentPlayer.score ++;  // update score for the current player
                alert("Player "+ this.turn +" Win!");
                ui.updateScore();
             //   clearForNewGame();
                return true;
            }
        }

        //check columns
        for(var i = 0; i <= 2 ; i++) {
            if(B[i] !== "E" && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
                currentPlayer.score ++; // update score for the current player
                alert("Player "+ this.turn +" Win!");
                ui.updateScore();
               // clearForNewGame();
                return true;
            }
        }

        //check diagonals
        for(var i = 0, j = 4; i <= 2 ; i = i + 2, j = j - 2) {
            if(B[i] !== "E" && B[i] == B[i + j] && B[i + j] === B[i + 2*j]) {
                currentPlayer.score ++; // update score for the current player
                alert("Player "+ this.turn +" Win!");
                ui.updateScore();
               // clearForNewGame();

                return true;
            }
        }

        var available = this.emptyCells();
        
        if(available.length == 0) {
            //the game is draw
            player1.tie ++;
            player2.tie ++;
            alert("Tie Game !!!! ");
            ui.updateScore();
            //clearForNewGame();
            
            return true;
        }
        else {
            return false;
        }
     }; // end isTerminal function

     /* This function update the state of board game
      * @parameter: index of a cell that current player want to mark
	  */
     this.updateState = function(index){
     	
     	
     	if (this.isEmptyCell(index)){  // check if the cell is empty
     		if (this.turn === "X"){
     			board[index] = "X";
     			ui.insertAt(index); // changing the html view
     			if (this.isTerminal())
     				//this.newGame();
     				saveCookie();
     			else{
	     			this.turn = "O";
	     			currentPlayer = player2; 
	     			ui.updatePlayerTurn();
	     			saveCookie();
     			}    			     			
     		}
     		else {
     			board[index] = "O";
     			ui.insertAt(index); // changing the html view
     			if (this.isTerminal())
     				//this.newGame();
     				saveCookie();
     			else{
	     			this.turn = "X";
	     			currentPlayer = player1;
	     			ui.updatePlayerTurn();
	     			saveCookie();
	     		}
     		}

     	}
     	else  // the cell is not empty
     		alert("This cell is already taken !!!");
     };// end updateState function
  			
  	// this function will begin next game		
  	this.newGame = function(){
  		board = ["E","E","E",
  				 "E","E","E",
  			     "E","E","E"];
	  	this.turn = "X"; // player1 X plays first
	  	currentPlayer = player1;
	  	ui.updatePlayerTurn();
	  	saveCookie();
  	}; // end newGame function

  	this.refreshNewGame = function(){
  		board = ["E","E","E",
  				 "E","E","E",
  			     "E","E","E"];
  		player1 = new Player("X");
  		player2 = new Player("O");
	  	this.turn = "X"; // player1 X plays first
	  	currentPlayer = player1;
  	}

  };