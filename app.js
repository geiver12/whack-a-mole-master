const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')

const displayTitle = document.querySelector('#title')
const displayScore = document.querySelector('#score')
const displayTime = document.querySelector('#time-left')


const inputName = document.querySelector('#name')
const inputTime = document.querySelector('#time')

const displayBestScore = document.querySelector('#bestScore')
const displayRecord = document.querySelector('#record')


let score
let currentTime, hitPosition, oneHit
let timerMole, timerTime

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
    oneHit = -1
}

function countDown() {
    currentTime--
    displayTime.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerMole)
        clearInterval(timerTime)

        if (displayBestScore.textContent < displayScore.textContent) {
            displayRecord.textContent = displayTitle.textContent + ' : ' + displayScore.textContent
            displayBestScore.textContent = displayScore.textContent
        }

    }
}

var ChangeName = () => {
    //  title.textContent = name.value + ' : ' + result;
}


var initGame = () => {
    score = 0
    clearInterval(timerMole)
    clearInterval(timerTime)


    if (inputName.value.length > 0)
        displayTitle.textContent = inputName.value

    if (inputTime.value > 0) {
        displayTime.textContent = inputTime.value
        currentTime = inputTime.value

    } else
        currentTime = 60

    displayScore.textContent = 0

    timerMole = setInterval(randomSquare, 500)
    timerTime = setInterval(countDown, 1000)

    square.forEach(id => {
        id.addEventListener('mouseup', () => {
            if (id.id === hitPosition & oneHit != hitPosition) {
                score++
                displayScore.textContent = score
                oneHit = hitPosition
            }
        })
    })

}