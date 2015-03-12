var mocks = {
    httpConstants : {
        newGameUrl: 'fakey new game url',
        makeMoveUrl: 'fakey make move url'
    },

    gameConstants : {
        startingGameboard: function () {  },
        defaultPlayer1Type: function () {  },
        defaultPlayer2Type: function () {  }
    },

    gameModel: {
        changeCurrentPlayer:  function (){  },
        startingPlayers: function (){  },
        updateModel: function (){  },
        getResultSprite: function (){  }
    },

    gameApiProxy: {

        callService: function (){}
    }
};
