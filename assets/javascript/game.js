
    let wins = 0;
    let losses = 0;

    let crystalRed = $("#Crystal-1");
    let crystalYellow = $("#Crystal-2");
    let crystalGreen = $("#Crystal-3");
    let crystalBlue = $("#Crystal-4");


    let random = Math.floor(Math.random() * 120) + 19;

    $("#random").text(random);

        
    $("#Crystal-1").on("click", function() {
        let Red = Math.floor(Math.random() * 12) + 1;
        console.log(Red);
        $("#total").text(Red);
    
    });

    $("#Crystal-2").on("click", function() {
        let Yellow = Math.floor(Math.random() * 12) + 1;
        console.log(Yellow);
        $("#total").text(Yellow);
    
    });

    $("#Crystal-3").on("click", function() {
        let Green = Math.floor(Math.random() * 12) + 1;
        console.log(Green);
        $("#total").text(Green);
    
    });

    $("#Crystal-4").on("click", function() {
        let Blue = Math.floor(Math.random() * 12) + 1;
        console.log(Blue);
        $("#total").text(Blue);
    
    });


    if (total === random)   {
        wins++;
        $("#wins").text(wins);
        random = 0;
    } else if (total > random)  {
        losses++;
        $("#losses").text(losses);
        random = 0;
    }
