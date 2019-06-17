let squareZero = $('.zero')
let squareOne = $('.one')
let squareTwo = $('.two')
let squareThree = $('.three')

// Global variable to use doing the game sequence 
let sequence = []
let userSequence = []
let num = 0
let isOn = true
let round = 1
let isComputer = true
let isWinner = true
let gameLoop = 0
let isCorrect = true
let counter = 0





function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  $.fn.getLightSequence = function(){
      for( let i = 0; i < 10; i++){
        num = getRandomInt(0 , 4)
        sequence.push(num)
        
      }
  }

$.fn.gameSequence = function(){
  
 if (counter == round){
        isComputer = false 
        clearInterval(gameLoop)
        $.fn.colorReset()
    }

    if(isComputer){
        $.fn.colorReset()
        setTimeout(() => {
            if(sequence[counter] == 0){
                console.log("zero")
                $.fn.zero()
            }
            if(sequence[counter] == 1){
                console.log("one")
                $.fn.one()
            }
            if(sequence[counter] == 2){
                console.log("two")
                $.fn.two()
            }
            if(sequence[counter] == 3){
                console.log("three")
                $.fn.three()
            }

        }, 300)

    }
    
}



$.fn.newGame = function (){

    isWinner = false 
    $.fn.getLightSequence()
    gameLoop = setInterval($.fn.gameSequence(), 800)
}

$.fn.zero = function(){
    //if(noise) {}

    squareZero.css("background-color", "lightblue")
}

$.fn.one = function(){
    //if(noise) {}

    squareOne.css("background-color", "pink")
}

$.fn.two = function(){
    //if(noise) {}

    squareTwo.css("background-color", "darkred")
}

$.fn.three = function(){
    //if(noise) {}

    squareThree.css("background-color", "gold")
}

$.fn.colorReset = function(){
    squareZero.css("background-color", "blue") 
    squareOne.css("background-color", "purple")
    squareTwo.css("background-color", "red")
    squareThree.css("background-color", "yellow")
}


$.fn.clickIndicator = function(callback){
   userSequence.push(this.attr('id'))
   console.log(this.attr('id'))
    


}

$.fn.checkSequence = function(){
    for ( let i = 0; i < sequence.length;i++){
        if (sequence[i] != userSequence[i]){
            console.log('game over')
        }    
    }

    $.fn.newGame()
}

$.fn.checkLength = function(){
    if (sequence.length === userSequence.length){
        $.fn.checkSequence()
    }
    else {
      console.log('this is the else')
    }
}

$.fn.colorReset = function() {
    console.log("the color is reset")
}

squareZero.on('click', ()=> {
    squareZero.clickIndicator()
})
squareOne.on('click', function() {
    squareOne.clickIndicator()
})
squareTwo.on('click', function() {
    squareTwo.clickIndicator()
})
squareThree.on('click', function() {
    squareThree.clickIndicator()
})


$.fn.newGame()


