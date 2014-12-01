
var userChoice;
var playerTurn;
var playerTypes;

var makeNewGame = function() {
    var url=('http://tictactoe.cloudapp.net:35000/api/v1.0/newgame');
    serverPost(url,playerTypes);
};

var makeMove = function(playerTurn,id) {
    var sendMove = {playerNumber:playerTurn, chosenSquare:id};
    var url = ('http://tictactoe.cloudapp.net:35000/api/v1.0/makemove');
    serverPost(url,sendMove);
};

var serverPost = function(url,sendData){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open('POST',url,true);
    statechange(xmlHttpRequest);
    xmlHttpRequest.withCredentials = true;
    xmlHttpRequest.setRequestHeader('content-type','application/json;charset=UTF-8');
    xmlHttpRequest.send(JSON.stringify(sendData));
};

var handleWin = function(winner){
    if (winner==='1')
    {
        alert('Player One has won!');
    }
    else if (winner==='2')
    {
        alert('Player Two has won!');
    }
};

var handleDraw = function (){
    alert('Game was a draw');
};

var handleSuccessfulResponse= function (response){
    if (response.outcome === 'Win')
    {
        updateGameBoard(response.gameboard);
        handleWin(response.winner);
    }
    else if (response.outcome === 'Draw')
    {
        updateGameBoard(response.gameboard);
        handleDraw();
    }
    else {
        updateGameBoard(response.gameboard);
    }
};

var statechange = function(xmlHttpRequest){

    xmlHttpRequest.onreadystatechange = function () {


        if (xmlHttpRequest.readyState === 4)
        {
            if (xmlHttpRequest.status === 200)
            {
                var response = JSON.parse(xmlHttpRequest.responseText);
                handleSuccessfulResponse(response);
            }
        }
    };
};

