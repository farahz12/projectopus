const questions=[
    {
        question: "How is AI used in education ?",
        answers: [
            { text: "To eliminate teachers.", correct: false },
            { text: "To provide a personalized learning experience.", correct: true },
            { text: "To replace school textbooks.", correct: false },
            { text: "To create teaching robots or robot teachers.", correct: false }
        ]
    },
    {
        question: "What is adaptive learning ?",
        answers: [
            { text: "A system where students teach each other.", correct: false },
            { text: "A system where teachers adapt to students.", correct: false },
            { text: "A system that adapts the content and activities based on the needs of the students.", correct: true },
            { text: "A system where students can choose their own curriculum or study program.", correct: false }
        ]

    },
    {
        question: "How do intelligent virtual tutors help students ?",
        answers: [
            { text: " By doing their homework for them.", correct: false },
            { text: " By providing personalized educational support.", correct: true },
            { text: "By playing with them during breaks.", correct: false },
            { text: " By organizing group activities.", correct: false }
        ]

    },

    {
        question: "How can AI recommend educational content to students ?",
        answers: [
            { text: "Based on the interests and skills of each student.", correct: true },
            { text: "  By randomly selecting resources.", correct: false },
            { text: " By following the preferences of the teachers.", correct: false },
            { text: "By providing only paid resources. ", correct: false }
        ]

    },

    {
        question: "Why is AI useful in automatic grading of assignments and tests",
        answers: [
            { text: " To prevent students from making mistakes.", correct: false },
            { text: "To provide quick and accurate assessments of assignments and tests.", correct: false },
            { text: "To automate students' responses ", correct: false },
            { text: " To relieve the workload of teachers", correct: true }
        ]

    },


];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";

    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const isCorrect = selectbtn.dataset.correct=== "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
        score++;
       
    } else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    });
    nextButton.style.display="block";
}

function showscore() {
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showscore();
}

}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    } else {
        startQuiz();
       }
});
 startQuiz();



 