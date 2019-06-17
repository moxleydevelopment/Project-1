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
  console.log(round)
 if (counter == round){
        console.log('here')
        clearInterval(gameLoop) 
        isComputer = false 
        $.fn.colorReset()
        isOn = true
        
    }

    if(isComputer){
        $.fn.colorReset() 
        console.log('counter = ' + counter)
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


        }, 200)

    }
    
}



$.fn.newGame = function (){

    isWinner = false 
    isComputer = true
    isCorrect = true
    $.fn.getLightSequence()
    gameLoop = setInterval(function() {$.fn.gameSequence()}, 800)
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
    console.log( check)
    if (userSequence[check] !== sequence[check]){
       isCorrect = false
    }
    if((userSequence.lenght == 10) && isCorrect){
        //$.fn.playerWon()
        console.log("you won")
    }
    if(isCorrect === false){
        console.log('check to see if incorrect')
        // function to flash color 
        setTimeout(() =>{
            $.fn.colorReset()

        })
    }

    if (round == userSequence.length){
        console.log('check to see if correct')
        if(isCorrect && !isWinner){
            round++ 
            userSequence = []
            isComputer = true
            counter = 0
            gameLoop = setInterval($.fn.gameSequence(), 1000)
        }
    }

   
}



$.fn.colorReset = function() {
    squareZero.css("background-color", "blue") 
    squareOne.css("background-color", "purple")
    squareTwo.css("background-color", "red")
    squareThree.css("background-color", "yellow")
}

squareZero.on('click', ()=> {
    if(isOn == true){
        console.log('zero was clicked')
    squareZero.clickIndicator() 
    $.fn.checkSequence() 
    $.fn.zero()
    }
    if(!isWinner){
        console.log(isOn)
        setTimeout(() => {
         $.fn.colorReset(), 300
        })  
    }
})
squareOne.on('click', function() {
    if(isOn == true){
        console.log('one was clicked')
        squareOne.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.one()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 300
            })  
        }
    
})
squareTwo.on('click', function() {
    if(isOn == true){
        console.log('two was clicked')
        squareTwo.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.two()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 300
            })  
        }
})
squareThree.on('click', function() {
    if(isOn == true){
        console.log('three was clicked')
        squareThree.clickIndicator() 
        $.fn.checkSequence() 
        $.fn.three()
        }
        if(!isWinner){
            setTimeout(() => {
             $.fn.colorReset(), 300
            })  
        }
})


$.fn.newGame()


