document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
		src :'file:///C:/Users/Joker/Desktop/my%20game/imgs/ganbol.jpg'
	},
     {
        
		src :'file:///C:/Users/Joker/Desktop/my%20game/imgs/ganbol.jpg'
	},
     {
       
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/darwin.jpg'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/darwin.jpg'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/fun.png'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/fun.png'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/Jake.png'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/Jake.png'
    },
    {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/malik%20dhalej.png'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/malik%20dhalej.png'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/chaba7.jpeg'
    },
     {
        
        src : 'file:///C:/Users/Joker/Desktop/my%20game/imgs/chaba7.jpeg'
    },
     

]
// vars and conts to use later
const space = document.querySelector('.space')
const result = document.querySelector('#result')
const cardsWon = []
var cardsChosen = []
var cardsChosenId = []
// draw space work create space
function createBoard() {
    for (i = 0 ; i < cardArray.length ; i++)
        {
            var card = document.createElement('img')
            card.setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/moraba3.png')
            card.setAttribute('height' , 100)
            card.setAttribute('width' , 100)
            card.setAttribute('data-id' , i)
            space.appendChild(card)
            card.addEventListener('click' , flipCard)
        }
}
//fip card function
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].image)
    cardsChosenId.push(cardId)
    this.setAttribute('src' , cardArray[cardId].src)
    if (cardsChosen.length == 2){
        setTimeout(checkForMatch , 300)
    }
}
// fuction to check mutch
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/moraba3.png');
        cards[optionTwoId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/moraba3.png');
        alert('you clicked the same imgs');
    } else if (cardsChosen[0] ===  cardsChosen[1]){
        alert('you found a mutch');
        cards[optionOneId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/baydha.jpg');
        cards[optionTwoId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/baydha.jpg');
        cards[optionOneId].removeEventListener('click' , flipCard);
        cards[optionTwoId].removeEventListener('click' , flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/moraba3.png');
        cards[optionTwoId].setAttribute('src' , 'file:///C:/Users/Joker/Desktop/my%20game/imgs/moraba3.png');
        alert('you are wrong');
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        alert('you win!!! ')
    }
}
createBoard()

})
