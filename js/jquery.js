let squareZero = $('.zero')
let squareOne = $('.one')
let squareTwo = $('.two')
let squareThree = $('.three')

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
  isOn = false
 if (counter == round){
        console.log('here')
        clearInterval(gameLoop) 
        isComputer = false 
        $.fn.colorReset()
        isOn = true
        
    }

    if(isComputer){
        $.fn.colorReset() 
        console.log('here' + counter)
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
            counter++


        }, 600)

    }
    
}



$.fn.newGame = function (){

    isWinner = false 
    isComputer = true
    isCorrect = true
    $.fn.getLightSequence()
    gameLoop = setInterval($.fn.gameSequence(), 1000)
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




$.fn.clickIndicator = function(callback){
   userSequence.push(Number(this.attr('id')))
   console.log(this.attr('id'))
    


}

$.fn.checkSequence = function(){
    let check = (userSequence.length - 1)
    if (userSequence[check] !== sequence[check]){
       isCorrect = false
    }
    if(userSequence.lenght == 10 & isCorrect){
        $.fn.playerWon()
    }
    if(isCorrect == false){
        // function to flash color 
    }

   
}



$.fn.colorReset = function() {
    squareZero.css("background-color", "blue") 
    squareOne.css("background-color", "purple")
    squareTwo.css("background-color", "red")
    squareThree.css("background-color", "yellow")
}

squareZero.on('click', ()=> {
    if(isOn){
    squareZero.clickIndicator() 
    $.fn.checkSequence() 
    $.fn.zero()
    }
    if(!isWinner){
        setTimeout(() => {
         $.fn.colorReset(), 200
        })  
    }
})
squareOne.on('click', function() {
    if(isOn){
        squareOne.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.one()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 200
            })  
        }
    
})
squareTwo.on('click', function() {
    if(isOn){
        squareTwo.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.two()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 200
            })  
        }
})
squareThree.on('click', function() {
    if(isOn){
        squareThree.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.three()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 200
            })  
        }
})


$.fn.newGame()


