//hide all elements besides title and start button
$(".question").hide();
$("#reset").hide();
$("#timer").hide();
$("#stats").hide();

var questionsObj = [
    {
        question: "How many moons does Jupiter have?",
        choices: ["42", "53", "25", "13"],
        answer: "53"
    },
    
    {
        question: "How long does it take for sun light to reach earth?",
        choices: ["1 month", "1 hour 35 min", "35 seconds", "8 min 20 sec"],
        answer: "8 min 20 sec"
    },
    
    {
        question: "How much does a neutron star weigh?",
        choices: ["10 billion  tons", "10 million tons", "10 tons", "0 tons"],
        answer: "10 million tons"
    },
    
    {
        question: "How many earths can fit in Uranus?",
        choices: ["63", "43", "125", "12"],
        answer: "63"
    },
    
    {
        question: "How many earth days is a day on Mercury?",
        choices: ["48.9", "43.2", "23.4", "58.6"],
        answer: "58.6"
    },
    
    {
        question: "How far away is the Sun from Earth?",
        choices: ["93 million", "145 million", "25 million", "87 million"],
        answer: "93 million"
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
        
        start();
     
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
    
    $("#reset").on("click", function() {
        reset();
        $("#reset").hide();
    });
    
    function start() {
        $("#timer").show();
        $(".question").show();
        $("#stats").hide();
        $("#start").hide();
        $("#reset").hide();
    
        // start timer
        timer = setInterval(countdown, 1000);
        showQuestion();
        questionTimer = setInterval(questionCountdown, 1000);
    }
    
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
        $("#timer").hide();
        $("#stats").show();
        time = 30;
        displayResults();
        setTimeout(empty, 5000);
        //display the stats
    }
    
    function displayResults() {
        $("#timer").html("<h2>" + time + "</h2>");
        $("#correct").html("<p>" + "Correct Answers: " + correct + " </p>");
        $("#wrong").html("<p>" + "Incorrect Answers: " + incorrect + "</p>");
        $("#unanswered").html("<p>" + "Unanswered Questions: " + unanswered + "</p>");
    }
    
    function empty() {
        $("#stats").hide();
        $("#reset").show();
    }
    
    function reset() {
        questionCount = 0;
        correct = 0;
        incorrect =0;
        unanswered = questionsObj.length;
        timer;
        questionTimer;
        time = 30;
        questionTime = 5;
        $(".question").show();
        start();
        
    }
    
});


//click on done display the number of correct and incorrect answers and how many went unanswered
