import FlappyBird from './game';

window.addEventListener('DOMContentLoaded', function () {
    
    debugger
    const canvas = document.getElementById('bird-game');
    let newGame = new FlappyBird(canvas);
    newGame.restart();
});