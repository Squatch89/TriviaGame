//hide all elements besides title and start button
$(".question").hide();
$("#done").hide();
$("#timer").hide();
$("#stats").hide();

var questionsObj = [
    {
        question: "This is questions 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    
    {
        question: "This is questions 2",
        choices: ["new answer1", "new answer2", "new answer3", "new answer4"],
        answer: "answer3"
    }
    
];

var questionCount = 0;
var correct = 0;
var incorrect =0;
var unanswered = questionsObj.length;


$(document).ready(function () {
    
    var timer;
    var time = 30;
    
    //click on start button. Start and display timer, display questions and hide start button
    $("#start").on("click", function() {
        
        $("#timer").show();
        $(".question").show();
        $("#done").show();
        $("#stats").hide();
        $("#start").hide();
        
        // start timer
       timer = setInterval(countdown, 1000);
       
       showQuestion();
    });
    
    $(".answer").on("click", function() {
       
        if (questionCount === questionsObj.length) {
           stop();
       }
       else {
           if ($(this).text() === questionsObj[questionCount].answer) {
               console.log("yay right answer");
               questionCount++;
               correct++;
               unanswered--;
               showQuestion();
           }
           else {
               console.log("boo wrong answer");
               questionCount++;
               incorrect++;
               unanswered--;
               showQuestion();
           }
           
       }
    });
    
    //set timeout for screen between
    
    //display the correct answer info between questions
    
    //continue on with the questions
    
    //display the question and the possible answers
    function showQuestion() {
    $("#question").html(questionsObj[questionCount].question);
    $("#answer1").html(questionsObj[questionCount].choices[0]);
    $("#answer2").html(questionsObj[questionCount].choices[1]);
    $("#answer3").html(questionsObj[questionCount].choices[2]);
    $("#answer4").html(questionsObj[questionCount].choices[3]);
    };
    
    $("#done").on("click", stop);
    
    //create timer/interval
    function countdown() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        
        if (time === 0) {
            stop();
        }
    }
    
    //end game if timer runs out display the number of correct and incorrect answers and how many went unanswered
    function stop() {
        clearInterval(timer);
        $(".question").hide();
        $("#done").hide();
        $("#timer").hide();
        $("#stats").show();
        $("#start").show();
        time = 30;
        $("#timer").html("<h2>" + time + "</h2>");
        $("#correct").html("<p>" + "Correct Answers: " + correct + " </p>");
        $("#wrong").html("<p>" + "Incorrect Answers: " + incorrect + "</p>");
        $("#unanswered").html("<p>" + "Unanswered Questions: " + unanswered + "</p>");
        
        //display the stats
    }
    
});


//click on done display the number of correct and incorrect answers and how many went unanswered
