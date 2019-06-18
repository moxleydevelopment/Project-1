// Targert that I need from html to manipulate
let squareZero = $('.zero')
let squareOne = $('.one')
let squareTwo = $('.two')
let squareThree = $('.three')
let startBtn = $('.start')
let displayRound = $('h3')


// Global variable to use doing the game sequence 
let sequence = []
let userSequence = []
let num = 0
let isOn
let round = 1
let isComputer
let isWinner
let gameLoop
let isCorrect
let counter = 0
// The display for the round and win/ lose status
displayRound.text('0' + round)



// This function generates a random between 0 and 3 inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

// This function populates an array that will hold the color sequence 
$.fn.getLightSequence = function () {
    for (let i = 0; i < 10; i++) {
        num = getRandomInt(0, 4)
        sequence.push(num)


    }
}


// The setting for the game turn are held in this game sequence that will 
// repeat ever 800 milliseconds until the interval is cleared 
$.fn.gameSequence = function () {
    isOn = false

// these are the settings for when it is the uers turn to play the game 
    if (counter == round) {
        clearInterval(gameLoop)
        isComputer = false
        $.fn.colorReset()
        isOn = true

    }
// the settings for when the computer is flashing the color sequence
    if (isComputer) {
        $.fn.colorReset()
        setTimeout(function () {
            if (sequence[counter] == 0) {
                $.fn.zero()
            }
            if (sequence[counter] == 1) {
                $.fn.one()
            }
            if (sequence[counter] == 2) {
                $.fn.two()
            }
            if (sequence[counter] == 3) {
                $.fn.three()
            }
            counter++


        }, 200)

    }

}


// This is the function that will start the game when the start button is pressed
$.fn.newGame = function () {

    isWinner = false
    isComputer = true
    isCorrect = true
    $.fn.getLightSequence()
    gameLoop = setInterval(function () { $.fn.gameSequence() }, 800)
}

// the follow functions play the audio for each color
//changes the color background to simulate lighting of the color

$.fn.zero = function () {
    document.getElementById('audioZero').play()
    squareZero.css("background-color", "lightgreen")
    

$.fn.one = function () {

    document.getElementById('audioOne').play()
    squareOne.css("background-color", "red")
    
}

$.fn.two = function () {

    document.getElementById('audioTwo').play()
    squareTwo.css("background-color", "lightblue")
   

$.fn.three = function () {

    document.getElementById('audioThree').play()
    squareThree.css("background-color", "yellow")
    
}



// Function that grabs the id of the color being pressed to add to the 
// user sequence array
$.fn.clickIndicator = function (callback) {
    userSequence.push(Number(this.attr('id')))




}

// checks the corrects of the button pressed with the sequence of colors 
// that has been flashed by the computer 

$.fn.checkSequence = function () {
    let check = (userSequence.length - 1)

    if (userSequence[check] !== sequence[check]) {
        isCorrect = false
    }
    if ((userSequence.length === 5) && (isCorrect == true)) {
        displayRound.text('PLAYER WON!!')
        isWinner = true
    }
    if (isCorrect === false) {

        document.getElementById('game-over').play()
        displayRound.text('GAME OVER')
        setTimeout(() => {
            $.fn.colorReset()

        })
    }

    if (round == userSequence.length) {
        if (isCorrect && !isWinner) {
            round++
            if (round < 10) {
                displayRound.text('0' + round)
            }
            else {
                displayRound.text(round)
            }
            userSequence = []
            isComputer = true
            counter = 0
            gameLoop = setInterval(function () { $.fn.gameSequence() }, 800)
        }
    }


}



$.fn.colorReset = function () {
    squareZero.css("background-color", "darkgreen")
    squareOne.css("background-color", "darkred")
    squareTwo.css("background-color", "darkblue")
    squareThree.css("background-color", "goldenrod")
}

squareZero.on('click', function () {
    if (isOn == true) {
        squareZero.clickIndicator()
        $.fn.checkSequence()
        $.fn.zero()
    }
    if (!isWinner) {
        setTimeout(function () {
            $.fn.colorReset(), 1600
        })
    }
})
squareOne.on('click', function () {
    if (isOn == true) {
        squareOne.clickIndicator()
        $.fn.checkSequence()
        $.fn.one()
    }
    if (!isWinner) {
        setTimeout(function () {
            $.fn.colorReset(), 1600
        })
    }

})
squareTwo.on('click', function () {
    if (isOn == true) {
        squareTwo.clickIndicator()
        $.fn.checkSequence()
        $.fn.two()
    }
    if (!isWinner) {
        setTimeout(function () {
            $.fn.colorReset(), 1600
        })
    }
})
squareThree.on('click', function () {
    if (isOn == true) {
        squareThree.clickIndicator()
        $.fn.checkSequence()
        $.fn.three()
    }
    if (!isWinner) {
        setTimeout(function () {
            $.fn.colorReset(), 1600
        })
    }
})


startBtn.on('click', function () {
    $.fn.newGame()
})


