//hide all elements besides title and start button
$(".question").hide();
$("#done").hide();
$("#timer").hide();
$("#stats").hide();

var questionCount = 0;
var correct = 0;
var incorrect =0;

var questionsObj = [
    {
        question: "This is questions 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer1"
    },
    {
        question: "This is questions 2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        answer: "answer3"
    }
];


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
        
        //display the stats
    }
    
    
});


//click on done display the number of correct and incorrect answers and how many went unanswered
