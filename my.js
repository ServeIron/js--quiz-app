function Question(text,choices,answer){
    this.yazi = text;
    this.secim = choices;
    this.cevap = answer;
}

Question.prototype.cevapKontrol = function(cevap){
    return this.cevap === cevap;
}

function Quiz(question){
    this.question = question;
    this.score = 0;
    this.questionIndex =0;
}

Quiz.prototype.getQuestion = function(){
    return this.question[this.questionIndex];
}

Quiz.prototype.Finish = function(){
    return this.question.length === this.questionIndex;
}

Quiz.prototype.quess = function(answer){
 var question = this.getQuestion();
 if(question.cevapKontrol(answer)){
     this.score++;
 }
 this.questionIndex++;
}
var q1 = new Question("en sevdiğin programlama dili?",["c#","php","java"],"php"); // random questions
var q2 = new Question("en popüler programlama dili?",["c#","php","java"],"php");
var q3 = new Question("en sevdiğin modern programlama dili?",["c#","php","java"],"php");

var question = [q1,q2,q3];

var quiz = new Quiz(question);

loadQuestion();

function loadQuestion(){
    if(quiz.Finish()){
        showScore();
    }
    else{
        var question = quiz.getQuestion();
        var choise = question.secim;
        document.querySelector('#question').textContent = question.yazi;
        
        for(var i=0; i < choise.length; i++){
            
          document.querySelector(`#choisea${i}`).innerHTML = choise[i];
            guess('btn'+i,choise[i]);
        }
        islemSonucu();
    }
}

function guess(id,gues){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.quess(gues);
        loadQuestion();
    }
}
function showScore(){
var html = `<h2>score</h2> <h4> ${quiz.score} </h4>`;
document.querySelector('.card-body').innerHTML = html;
}


function islemSonucu(){
    var  kacSoru = quiz.question.length;
    var  kacinci = quiz.questionIndex+1;
    document.querySelector('#progres').innerHTML = kacinci+" in "+kacSoru;
}