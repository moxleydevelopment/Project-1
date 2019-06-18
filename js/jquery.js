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

displayRound.text('0' + round)




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

$.fn.getLightSequence = function () {
    for (let i = 0; i < 10; i++) {
        num = getRandomInt(0, 4)
        sequence.push(num)


    }
}



$.fn.gameSequence = function () {
    isOn = false

    if (counter == round) {
        clearInterval(gameLoop)
        isComputer = false
        $.fn.colorReset()
        isOn = true

    }

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



$.fn.newGame = function () {

    isWinner = false
    isComputer = true
    isCorrect = true
    $.fn.getLightSequence()
    gameLoop = setInterval(function () { $.fn.gameSequence() }, 800)
}

$.fn.zero = function () {
    document.getElementById('audioZero').play()
    squareZero.css("background-color", "lightgreen")
    squareZero.addClass('animate pulse')
}

$.fn.one = function () {

    document.getElementById('audioOne').play()
    squareOne.css("background-color", "red")
    squareOne.addClass('animate pulse')
}

$.fn.two = function () {

    document.getElementById('audioTwo').play()
    squareTwo.css("background-color", "lightblue")
    squareTwo.addClass('animate pulse')
}

$.fn.three = function () {

    document.getElementById('audioThree').play()
    squareThree.css("background-color", "yellow")
    squareThree.addClass('animate pulse')
}




$.fn.clickIndicator = function (callback) {
    userSequence.push(Number(this.attr('id')))




}

$.fn.checkSequence = function () {
    let check = (userSequence.length - 1)
    console.log(isCorrect)
    console.log(userSequence.length)

    if (userSequence[check] !== sequence[check]) {
        isCorrect = false
    }
    if ((userSequence.length === 2) && (isCorrect == true)) {
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


