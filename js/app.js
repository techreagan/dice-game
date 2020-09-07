const UIplayerOneName = document.querySelector('#playerOne')
const UIplayerTwoName = document.querySelector('#playerTwo')
const UIturns = document.querySelector('#playerTurn')
const UIimageDieOne = document.querySelector('#dieOne')
const UIimageDieTwo = document.querySelector('#dieTwo')
const UIrollBtn = document.querySelector('#rollBtn')

let dieOne = 0
let dieTwo = 0
let turns
let playerOneName = prompt('Player 1: What is your name?', 'Player 1')
let playerTwoName = prompt('Player 2: What is your name?', 'Player 2')

playerOneName = playerOneName === '' ? 'Player 1' : playerOneName
playerTwoName = playerTwoName === '' ? 'Player 2' : playerTwoName

UIplayerOneName.innerText = playerOneName
UIplayerTwoName.innerText = playerTwoName
UIturns.innerText = `${playerOneName}'s turn`
turns = playerOneName

function createRandomNumber() {
  return Math.floor(Math.random() * 6) + 1
}

UIrollBtn.addEventListener('click', (e) => {
  switch (turns) {
    case playerOneName:
      turns = playerTwoName
      UIturns.innerText = `${playerTwoName}'s turn`
      break
    case playerTwoName:
      turns = playerOneName
      UIturns.innerText = `${playerOneName}'s turn`
      break
  }

  UIimageDieOne.src = `img/${createRandomNumber()}.png`
  UIimageDieTwo.src = `img/${createRandomNumber()}.png`

  e.preventDefault()
})
