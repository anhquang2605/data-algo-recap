const coinGameWinner = (coins, currentPlayer) => {
    let nextPlayer = '';
    if (coins <= 0) {
        return currentPlayer;
    }
    if(currentPlayer === 'Player 1') {
        nextPlayer = 'Player 2';
    } else {
        nextPlayer = 'Player 1';
    }
    if (coinGameWinner(coins - 1, nextPlayer) === currentPlayer || coinGameWinner(coins - 2, nextPlayer) === currentPlayer) {
        return currentPlayer;
    } else {
        return nextPlayer;
    }

}