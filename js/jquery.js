let squareZero = $('.one')
let squareOne = $('.two')
let squareTwo = $('.three')
let squareThree = $('.four')

let sequence = []
let userSequence = []
let num
let isOn = true




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

$.fn.gameSequence = function(){
    num = getRandomInt(0 , 4)
    sequence.push(num)
    sequence.forEach(element => {
        console.log(element)
    });
    
}

$.fn.newGame = function (){
    userSequence = []
    $.fn.gameSequence()
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


   
$.fn.gameSequence()
$.fn.gameSequence()
$.fn.gameSequence()
$.fn.gameSequence()


