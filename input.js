const quiz = [{q:'what is your favorite', options:['eba','rice', 'beans','yam'], answer:'yam'},
                    {q:'who are you', options:['man','woman', 'gay','lesbian'], answer:'man'},
                    {q:'Reactjs is a ______', options:['library','add-on', 'framework','extension'], answer:'library'},
                    {q:'SpiderMonkey is a javaScript engine for______', options:['chrome','firefox', 'internet explorer','safari'], answer:'firefox'},
                    {q:'User Interface can be termed as _______', options:['backend development','web design', 'web development','frontend development'], answer:'frontend development'},
                    {q:"A book titled 'simplified javascript for vips' was written by _______", options:['elon musk','wole soyinka', 'ebenezer don'], answer:'ebenezer don'},
                    {q:"what does this apparently symbolize in software development?", img:"../assets/bug.jpg" , options:['software testing','scanning', 'troubleshooting', 'debugging'], answer:'debugging'}]

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const myInput = document.querySelector(".input");
const validAnswer = document.getElementById("demo");
const myClick = document.getElementsByClassName("button");
const myBtn = document.getElementById("btn");


let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let p=0;

function setAvailableQuestions(){
    for(let i=0; i<quiz.length; i++){
        availableQuestions.push(quiz[i])
        // console.log(totalquestions)
    }
}

console.log(availableQuestions)

function getNewQuestion(){
    questionNumber.innerHTML='Question'+ (questionCounter+1) + ' of ' + quiz.length
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    //let get the index of the question
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1=availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);

    if(currentQuestion.hasOwnProperty("img")){
        const img = document.createElement("img");
        img.src=currentQuestion.img;
        questionText.appendChild(img);
    }
    const optionLen = currentQuestion.options.length;

    for(let i=0; i<optionLen; i++){
        availableOptions.push('<input type = "radio" name="radio" value= "'+currentQuestion.options[i]+'">' + currentQuestion.options[i]);
    }
    console.log(availableOptions)

    optionContainer.innerHTML = '';
    let animationDelay = 0.2;

    for(let i=0; i<optionLen; i++){
        const optionIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        const option= document.createElement("div");
        // option.appendChild(input);
        option.innerHTML = optionIndex;
        // console.log(currentQuestion.options[i])
        availableOptions.splice(index2,1);
        option.id = i;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.2;
        option.className="option";
        optionContainer.appendChild(option);
        console.log(option)
        var radioButton = document.querySelectorAll("input");
        console.log(radioButton)
    }
    console.log(optionContainer)
    questionCounter++
}



function myNext(){
    var radioButton = document.querySelectorAll("input");
    if(questionCounter == quiz.length){
        for(button of radioButton){
            if(button.checked && button.value === currentQuestion.answer){
                p++;
                console.log(p)
            }
        }
        myBtn.classList.add("disengage");
        // myClick.disabled=false;
        alert("Your score is: "  + p);
    }else{
        for(var j=0; j<radioButton.length; j++){
            if(radioButton[j].checked && radioButton[j].value != currentQuestion.answer){
                getNewQuestion();
            }else if(radioButton[j].checked && radioButton[j].value == currentQuestion.answer){
                getNewQuestion();
                p++;
                console.log(p)
            }
        }
    }
    validAnswer.innerText=p
}

/*function myNext(){
    var radioButton = document.querySelectorAll("input");
    if(questionCounter < quiz.length){
        for(var j=0; j<radioButton.length; j++){
            if(radioButton[j].checked && radioButton[j].value != currentQuestion.answer){
                getNewQuestion();
            }else if(radioButton[j].checked && radioButton[j].value === currentQuestion.answer){
                getNewQuestion();
                p++;
                console.log(p)
            }
        }
    }else if(questionCounter == quiz.length){
        p++;
        // alert('click the submit button');

    }
}*/

window.onload = function(){
    myTimer();
    setAvailableQuestions();
    getNewQuestion();
}