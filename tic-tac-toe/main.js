
const squares = document.querySelectorAll(".square");
const currentPlayerContainer = document.querySelector('.current-player-container')
const gameoverBanner = document.querySelector('.game-over-sign')
const gameoverMessage = document.querySelector('.game-over-message')
const resetButton = document.querySelector('.reset')


// const that dont change
const player1 = 'X';
const player2 = 'O';
const combinationWins = [
    //across
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //up and down
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonal
    [0,4,8],
    [2,4,6],

]

//game state - which player is currently playing

let currentPlayer = player1;
let game = ['','','','','','','','','']



//loop through each square and add event listener 

squares.forEach((square, index) => {
    square.addEventListener("click", (event) => {
        // add the x if empty and switch between x and o for the player 
        if (event.target.textContent === '') {
            event.target.textContent = currentPlayer;
            game[index] = currentPlayer;
        }

            //check winner
            const winner = combinationWins.some((combination) => {
                return combination.every((index) => {
                    // index 0,1,2
                    // game[0] === 'X' AND
                    // game[1] === 'X' AND
                    // game[2] === 'X'

                    return game[index] === currentPlayer;
                    
                }
            
           )
            })

            if (winner) { 
               gameoverMessage.textContent = `Player ${currentPlayer}, Wins !`
               gameoverBanner.classList.remove('hidden')
               squares.forEach((square) => square.setAttribute('disable', true));
               return;

            }
            //check draw
            const draw = [ ...squares ].every((square) => {
                return square.textContent !== ""
            })


                //if draw
                if (draw) {
                    gameoverMessage.textContent = `It is a Draw!`
               gameoverBanner.classList.remove('hidden')
               squares.forEach((element) => element.setAttribute('disable', true));
               return;
                }

            //switch players
        if (currentPlayer === player1) {
            currentPlayer = player2;
            currentPlayerContainer.textContent = `Current Player: ${currentPlayer}`


        } else {
            currentPlayer = player1
            currentPlayerContainer.textContent = `Current Player: ${currentPlayer}`
        }

       
    })})


    resetButton.addEventListener('click', () => {
        game = ['','','','','','','','',''];
        currentPlayer = player1;
        currentPlayerContainer.textContent = `Current Player: ${currentPlayer}`;
        squares.forEach((square) => {
            square.textContent = ""
            square.removeAttribute("disabled")
        })

    })








