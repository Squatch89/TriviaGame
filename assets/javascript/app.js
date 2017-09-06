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
        answer: "new answer3"
    }
    
];

var questionCount = 0;
var correct = 0;
var incorrect =0;
var unanswered = questionsObj.length;

$(document).ready(function () {
    
    var timer;
    var questionTimer;
    var time = 30;
    var questionTime = 5;
    
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
       questionTimer = setInterval(questionCountdown, 1000);
     
    });
    
        $(".answer").on("click", function() {
            clearInterval(questionTimer);
            clearInterval(timer);
            console.log(questionTimer);
            //display the correct answer info between questions
            if ( $(this).text() === questionsObj[questionCount].answer) {
                $("#question").html("You chose correct! The answer was: " + questionsObj[questionCount].answer);
                correct++;
                unanswered--;
                console.log("yay right answer");
                //set timeout between questions
                setTimeout(showQuestion, 3000);
                setTimeout(resetQC, 3000);
                setTimeout(resetTimer, 3000);
            }
            else {
                $("#question").html("You  chose incorrect. The correct answer was: " + questionsObj[questionCount].answer);
                incorrect++;
                unanswered--;
                console.log("boo incorrect");
                setTimeout(showQuestion, 3000);
                setTimeout(resetQC, 3000);
                setTimeout(resetTimer, 3000);
            }
            $(".answer").empty();
            questionCount++;
        });
    
    $("#done").on("click", stop);
    
    //display the question and the possible answers
    function showQuestion() {
        if (questionCount === questionsObj.length) {
            stop();
        }
        else {
            $("#question").html(questionsObj[questionCount].question);
            $("#answer1").html(questionsObj[questionCount].choices[0]);
            $("#answer2").html(questionsObj[questionCount].choices[1]);
            $("#answer3").html(questionsObj[questionCount].choices[2]);
            $("#answer4").html(questionsObj[questionCount].choices[3]);
            questionTime = 5;
        }
    }
    
    //create timer/interval
    function countdown() {
        time--;
        $("#timer").html("<h2>" + time + "</h2>");
        
        if (time === 0) {
            stop();
        }
    }
    
    function questionCountdown() {
        questionTime--;
        if (questionTime === 0) {
            questionCount++;
            showQuestion();
        }
        else if (questionCount === questionsObj.length) {
            stop();
        }
    }
    //reset question countdown timer
    function resetQC() {
        questionTimer = setInterval(questionCountdown, 1000);
    }
    
    //reset timer
    function resetTimer() {
        timer = setInterval(countdown, 1000);
    }
    
    //end game if timer runs out display the number of correct and incorrect answers and how many went unanswered
    function stop() {
        clearInterval(timer);
        clearInterval(questionTimer);
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
