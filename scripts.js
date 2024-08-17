// Flipping Cards
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard()
{
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
        if (firstCard.dataset.framework == secondCard.dataset.framework)
        {
            console.log('its a match!');
        }
    }
}
cards.forEach(card => card.addEventListener('click', flipCard));
