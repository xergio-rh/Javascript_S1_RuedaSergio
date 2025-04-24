
let deckId = '';
let currentCard = null;
let streak = 0;
async function startGame() {
  document.getElementById('startPanel').classList.remove('visible');
  document.getElementById('gamePanel').classList.add('visible');
  const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await res.json();
  deckId = data.deck_id;
  drawCard();
}
async function drawCard() {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const data = await res.json();
  currentCard = data.cards[0];
  document.getElementById('currentCard').src = currentCard.image;
  document.getElementById('enemyCard').src = '';
  document.getElementById('message').textContent = '';
}
function getCardValue(card) {
  const values = {
    'ACE': 1,
    'JACK': 11,
    'QUEEN': 12,
    'KING': 13
  };
  return values[card.value] || parseInt(card.value);
}
async function guess(direction) {
  const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  const data = await res.json();
  const enemyCard = data.cards[0];
  const currentValue = getCardValue(currentCard);
  const enemyValue = getCardValue(enemyCard);
  document.getElementById('enemyCard').src = enemyCard.image;
  let message = '';
  if (
    (direction === 'higher' && enemyValue > currentValue) ||
    (direction === 'lower' && enemyValue < currentValue)
  ) {
    streak++;
    message = '¡Correcto! La carta de la máquina era ' + enemyCard.value;
  } else if (enemyValue === currentValue) {
    message = 'Empate. Mismo valor.';
  } else {
    streak = 0;
    message = 'Fallaste 😢 La carta de la máquina era ' + enemyCard.value;
  }
  currentCard = enemyCard;
  document.getElementById('currentCard').src = currentCard.image;
  document.getElementById('streak').textContent = streak;
  document.getElementById('message').textContent = message;
}