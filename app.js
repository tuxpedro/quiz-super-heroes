const radioInputs = document.querySelectorAll('input')
const scoreBoard = document.querySelector('.scoreBoard')
const h3Score = document.querySelector('h3')
const correctAnswers = ['A', 'A', 'A', 'A']
const userAnswers = []
let numberAnswer = 0
let score = 0

const getUserAnswers = event => {
    const answervalue = event.target.value
    userAnswers.push(answervalue)
    numberAnswer += 1
    numberAnswer === 4 ? checkNumberAnswer() : undefined
}


const addsListeningForInput = input => {
    input.addEventListener('click', getUserAnswers)
}

radioInputs.forEach(addsListeningForInput)

const showScoreBoard = state => {
    state ? scoreBoard.style.display = 'inline-block' : scoreBoard.style.display = 'none'
}
const clearCheckedInput = () => {
    radioInputs.forEach(input => input.checked = false);
    userAnswers.length = 0
    numberAnswer = 0
    score = 0
    showScoreBoard(false)
}

checkNumberAnswer = () => {
    userAnswers.forEach((userAnswer, i) => {
        userAnswer === correctAnswers[i] ? score += 25 : undefined
    });

    h3Score.textContent = `${score}%`
    showScoreBoard(true)
    setTimeout(clearCheckedInput, 3000);
}
