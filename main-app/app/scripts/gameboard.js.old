var showNought = function(){
    var img =document.getElementById('nought'+userChoice);
    img.classList.add('showimg');
    hideButton();
};

var showCross = function(){
    var img =document.getElementById('cross'+userChoice);
    img.classList.add('showimg');
    hideButton();
};

var hideButton = function(){
    var button =document.getElementById(userChoice);
    button.classList.add('hidebutton');
};

var cleanBoard = function(){
    for (var i = 0; i < 9; i++) {
        var button=document.getElementById(i);
        button.classList.remove('hidebutton');
        var img=document.getElementById('nought'+i);
        img.classList.remove('showimg');
        var img2=document.getElementById('cross'+i);
        img2.classList.remove('showimg');
    }
};

var updateGameBoard = function(gameboard){
    for (var i = 0; i < 9; i++) {
        var currentPosition = gameboard.substring(i,i+1);
        userChoice = i;
        if (currentPosition === '1'){
            showNought();
        }
        else if(currentPosition==='2'){
            showCross();
        }
    }
};