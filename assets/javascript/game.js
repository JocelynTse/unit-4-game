
    let wins = 0;
    let losses = 0;
    let total = 0;

    let random = Math.floor(Math.random() * 120) + 19;
    $("#random").text(random);

    let crystalRed = $("#Crystal-1");
    let crystalYellow = $("#Crystal-2");
    let crystalGreen = $("#Crystal-3");
    let crystalBlue = $("#Crystal-4");

    let Red = Math.floor(Math.random() * 12) + 1;
    let Yellow = Math.floor(Math.random() * 12) + 1;
    let Green = Math.floor(Math.random() * 12) + 1;
    let Blue = Math.floor(Math.random() * 12) + 1;


    $("#Crystal-1").on("click", function() {
        total += Red;
        console.log(total);
        $("#total").text(total);
        totalCheck();

    });

    $("#Crystal-2").on("click", function() {
        total += Yellow;
        console.log(total);
        $("#total").text(total);
        totalCheck();

    });

    $("#Crystal-3").on("click", function() {
        total += Green;
        console.log(total);
        $("#total").text(total);
        totalCheck();

    });

    $("#Crystal-4").on("click", function() {
        total += Blue;
        console.log(total);
        $("#total").text(total);
        totalCheck();

    });

    function totalCheck()   {
        if (total === random)   {
        wins++;
        $("#wins").text(wins);
        alert("You defeated the Crystal King!");

        } else if (total > random)  {
        losses++;
        $("#losses").text(losses);
        alert("You lost. Try again.");
        reset();
    };

    function reset()    {
        let random = Math.floor(Math.random() * 120) + 19;
        let Red = Math.floor(Math.random() * 12) + 1;
        let Yellow = Math.floor(Math.random() * 12) + 1;
        let Green = Math.floor(Math.random() * 12) + 1;
        let Blue = Math.floor(Math.random() * 12) + 1;
    };

    };

