const riddle = riddles[Math.floor(Math.random() * riddles.length)];

const questionElement = document.getElementById('question');

questionElement.innerText = riddle.q;

const wordElement = document.getElementById('word');
wordElement.innerHTML = '';

const answer = riddle.a;

for (let index = 0; index < answer.length; index++) {
    const currentLetter = answer[index];

    const letterElement = document.createElement('div');
    letterElement.classList.add('letter');
    letterElement.innerText = currentLetter;

    wordElement.appendChild(letterElement);
}


