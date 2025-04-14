let secretNumber = Math.floor(Math.random()*10 + 1);

function checkGuess () {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultText = document.getElementById('result');
    const winSound = document.getElementById('winSound');
    const failSound = document.getElementById('failSound');


if (userGuess === secretNumber) {
    resultText.textContent = 'Teisingai! Atspėjai';
    resultText.style.color = 'green';
    winSound.play();
    secretNumber = Math.floor(Math.random()*10 + 1);
}else {
    resultText.textContent = 'Neteisingai. Bandyk dar kartą!';
    resultText.style.color = 'red';
    failSound.play();
}
}
