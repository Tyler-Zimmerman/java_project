const quizData = [
    {
        question: 'What is the best coding language currently available?',
        a: 'Python',
        b: 'C++',
        c: 'Java',
        d: 'Ruby',
        correct: 'a'
    }, {
        question: 'What is, subjectively, the best Disney movie ever made?',
        a: 'Moana',
        b: 'Frozen',
        c: 'Hercules',
        d: 'Land and the Tramp',
        correct: 'c'
    }, {
        question: 'What is the best social media platform available for use?',
        a: 'Facebook',
        b: 'Twitter',
        c: 'Instagram',
        d: 'Trick question. Social Media is toxic and does not deserve publicity or utilization.',
        correct: 'd'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer() {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
        
    });
}

submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer = getSelected();

    if(answer) { //increase current quiz to progress
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if(currentQuiz < quizData.length) { //quiz shows alert if all questions completed
            loadQuiz();
        } else {
            //Show results
            quiz.innerHTML = `<h2>You correctly answered ${score}/${quizData.length} questions. 
                \nRefresh the page to try again!</h2>`;
        }  
    }
});