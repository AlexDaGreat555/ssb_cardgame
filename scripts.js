// Flipping Cards
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard()
{
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flip');

    if (hasFlippedCard == false)
    {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else
    {
        // second click
        hasFlippedCard = false;
        secondCard = this;

        // Do the cards match?
        checkForMatch();
    }
}


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard()
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        lockBoard = false;
        resetBoard()
    }, 1000);
}

function resetBoard()
{
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle()
{
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * cards.length);
        card.style.order = randomPos;
    });
})(); // Paranthesis around mean Immediately Invoked Function Expression

