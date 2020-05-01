const radioInputs = document.querySelectorAll('input')
const scoreBoard = document.querySelector('.scoreboard')
const h3Score = document.querySelector('h3')
const correctAnswers = ['B', 'B', 'B', 'B']
const userAnswers = []
let numberAnswer = 0
let score = 0
let itemChecked = ''
let questionChecked = ''

const getUserAnswers = event => {
    const answervalue = event.target.value
    const idItemChecked = event.target.id
    const idParentElement = event.target.parentElement.parentElement.id

    if (idItemChecked === itemChecked) return
    if (idParentElement === questionChecked) return

    itemChecked = idItemChecked
    questionChecked = idParentElement
    userAnswers.push(answervalue)
    numberAnswer += 1
    numberAnswer === 4 ? checkAnswer() : undefined
}

const addsListeningForInput = input => {
    input.addEventListener('click', getUserAnswers)
}

radioInputs.forEach(addsListeningForInput)

const showScoreBoard = state => {
    state ? scoreBoard.style.display = 'inline-block' : scoreBoard.style.display = 'none'
}

const showStartMessage = () => {
    const divMessage = document.querySelector('#message')
    divMessage.style.display = 'inline'
    setInterval(() => {
        divMessage.style.display = 'none'
    }, 1000);

}

const clearCheckedInput = () => {
    radioInputs.forEach(input => input.checked = false);
    userAnswers.length = 0
    numberAnswer = 0
    score = 0
    showScoreBoard(false)
    scrollTo(0, 0)
    showStartMessage()
}

const countPoints = score => {
    let scoreCounter = 0
    const timerPoints = setInterval(() => {
        score ? scoreCounter++ : undefined
        scoreCounter >= score ? clearInterval(timerPoints) : undefined
        h3Score.textContent = `acertou \n ${scoreCounter}%`
    }, 10);
    console.log(scoreCounter, 'scoreCounter')
}

checkAnswer = () => {
    userAnswers.forEach((userAnswer, i) => {
        userAnswer === correctAnswers[i] ? score += 25 : undefined
    });

    console.log(score, 'score')
    countPoints(score)
    showScoreBoard(true)
    setTimeout(clearCheckedInput, 3000);
}

document.onreadystatechange = () => {
    if (document.readyState == 'complete') showStartMessage()
}