const $startGameButton = document.querySelector(".start-quiz")
const $questionContainer = document.querySelector(".question-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")


$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex = 0
let totalCorrect = 0

function startGame() {
    $startGameButton.classList.add("hide")
    $questionContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if(questions.length === currentQuestionIndex) {
        return finishGame()
    }

    $questionText.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = answer.text
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    while($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
   const answerClicked = event.target

   if (answerClicked.dataset.correct) {
            document.body.classList.add("correct")
            totalCorrect
    } else {
            document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true

        })

        $nextQuestionButton.classList.remove("hide")
        currentQuestionIndex++
}

function finishGame() {
    const totalQuestions = questions.length
    const performance = Math.floor (totalCorrect*100/totalQuestions)
    
    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excelente :)"
            break;
        case (performance >= 70):
        message = "Muito bom"
            break;
        case (performance >= 50):
            message = "Bom"
            break;
        default: "Pode melhorar :("
    }

    $questionContainer.innerHTML = 
    `
        <p class="final-message">
            Você acertou ${totalCorrect} de ${totalQuestions} questões!
            <span>Resultado: ${message}</span>
        </p>
        <button onclick=window.location.reload() class="button">
            Refazer teste
        </button>
    `
}











const questions = [
    {
        question : "Qual era a motivação das disputas entre Firmo e Jeronimo?",
        answers: [
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "A mulher chamada Rita Baiana", correct: true },
            { text: "Ambos eram musicos e tinham uma richa por conta dos diferentes estilos musicais", correct: false },
        ]
    },
    {
        question : "Qual era o nome do rival de João Romão?",
        answers: [
            { text: "a", correct: false },
            { text: "Miranda", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
    {
        question : "Por que João Romão teve de reconstruir o cortiço?",
        answers: [
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "Foi por conta de Paula, que ateou fogo no lugar", correct: true },
        ]
    },
    {
        question : "Qual o nome do cortiço de João Romão?",
        answers: [
            { text: "a", correct: false },
            { text: "Cortiço São Romão", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
    {
        question : "Qual o nome de um dos cortiços famosos do Rio de Janeiro que foi citado no livro Dez dias de um cortiço?",
        answers: [
            { text: "Cabeça de porco", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
    {
        question : "Para onde a mulher de Eduardo foi com o filho mais novo?",
        answers: [
            { text: "Para Buzios", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
    {
        question : "No que Matias trabalhava?",
        answers: [
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "Ele era marinheiro", correct: true },
            { text: "a", correct: false },
        ]
    },
    {
        question : "Qual foi o trabalho que Eduardo havia inventado para de disfarçar?",
        answers: [
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "Trabalhador de Gráfica", correct: true },
        ]
    },
    {
        question : "Qual foi o objeto doado pela esposa de Eduardo para Zeca?",
        answers: [
            { text: "Um liquidificador", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
    {
        question : "Qual o nome do autor do livro Dez dias de um cortiço?",
        answers: [
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "Ivan Jaf", correct: true },
        ]
    },

     {
        question : "Qual o nome da banda de forró citada no livro?",
        answers: [
            { text: "Britadeira", correct: true },
            { text: "a", correct: false },
            { text: "a", correct: false },
            { text: "a", correct: false },
        ]
    },
]