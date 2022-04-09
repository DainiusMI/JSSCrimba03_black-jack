let firstCard, secondCard, thridCard, sum;
let drawnCards = [];
let showCards = document.getElementById('show-cards');
let showSum = document.getElementById('show-sum');
let messageEl = document.getElementById('message-el');
let startButtonEl = document.getElementById('start');
let drawCardbuttonEl = document.getElementById('draw-card');




let message = '';

function geAtRandomCard() {
    //let min = Math.ceil(1);
    //let max = Math.floor(13);
    //let randomCard = Math.floor(Math.random() * (max - min + 1) + min);
    let randomCard = Math.floor(Math.random() * 13 + 1);
    if (randomCard == 1) {
        return 11;
    }   
    else if (randomCard > 10) {
        return  10;
    }
    else
        return randomCard;
}

function gameLogic() {
    let hasBlackJack = false;
    let isAlive = true;
    if (sum <= 20) {
        message = 'Draw another card?';
        drawCardbuttonEl.classList.remove('hide-button');
        startButtonEl.classList.add('hide-button');

    } else if (sum === 21) {
        message = 'Yuu\'ve won';
        hasBlackJack = true;

        drawCardbuttonEl.classList.add('hide-button');
        startButtonEl.classList.remove('hide-button');
    } else {
        message = 'You\'re out of the game';

        isAlive = false;

        drawCardbuttonEl.classList.add('hide-button');
        startButtonEl.classList.remove('hide-button');
    }
    messageEl.textContent = message;
}


function startGame() {
    firstCard = geAtRandomCard();
    secondCard = geAtRandomCard();
    drawnCards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    showCards.textContent = 'Cards: ' + drawnCards[0] + ' ' + drawnCards[1];
    showSum.textContent = sum;

    gameLogic();
}




function newCard() {
    thridCard =  geAtRandomCard();
    drawnCards.push(thridCard);

    showCards.textContent = 'Cards: ';
    for (i = 0; i < drawnCards.length; i++) {
        showCards.textContent += ' ' + drawnCards[i];
    }

    sum += thridCard;
    showSum.textContent = sum;

    gameLogic();

}

