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

const coinGameWinner2 = (coins, currentPlayer) => {
    if( coins % 3 === 0) {
        return 'Player 2';
    } else {
        return 'Player 1';
    }
}