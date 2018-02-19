$(document).ready(function() {
 
    // variables
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // random numbers are genertated
    var rockOne = Math.floor(Math.random() * 12) + 1;
    var rockTwo = Math.floor(Math.random() * 12) + 1;
    var rockThree = Math.floor(Math.random() * 12) + 1;
    var rockFour = Math.floor(Math.random() * 12) + 1;

    var computerScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

    $("#boardCompScore").text(computerScore);

    // reset function
    function reset() {

        userScore = 0;
        rockOne = Math.floor(Math.random() * 12) + 1;
        rockTwo = Math.floor(Math.random() * 12) + 1;
        rockThree = Math.floor(Math.random() * 12) + 1;
        rockFour = Math.floor(Math.random() * 12) + 1;
        computerScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);

        $("#boardCompScore").text(computerScore);
        $("#boardMyScore").text(" "+userScore);

    };

    //click functions
    $(".rock").on("click", function() {
        var rockId = $(this).attr("id");

        var rockPoints = 0;

        switch (rockId) {
            case "rockOne":
                rockPoints = rockOne;
                break;
            case "rockTwo":
                rockPoints = rockTwo;
                break;
            case "rockThree":
                rockPoints = rockThree;
                break;
            case "rockFour":
                rockPoints = rockFour;
                break;
        }

        userScore += rockPoints;
        $("#boardMyScore").text(" "+userScore);


        if (userScore === computerScore) {
            wins++;
            $("#boardWins").text(" "+wins);
            alert("You Win!")
            reset();

        }

        if (userScore > computerScore) {
            losses++;
            $("#boardLosses").text(" "+losses);
            alert("You Lose!")
            reset();

        }

    })




});


// animation
