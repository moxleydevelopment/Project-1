let squareZero = $('.one')
let squareOne = $('.two')
let squareTwo = $('.three')
let squareThree = $('.four')

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
  
 if (userSequence.length == round){
        isComputer = false 
        clearInterval(gameLoop)
        $.fn.colorReset()
    }

    if(isComputer){
        $.fn.colorReset()
        setTimeout(() => {
            console.log(sequence[counter])
            counter++

        }, 300)

    }
    
}



$.fn.newGame = function (){

    isWinner = false 
    $.fn.getLightSequence()
    gameLoop = setInterval($.fn.gameSequence(), 800)
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


