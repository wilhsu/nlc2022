var answerA = document.getElementById('guess-inputa').name;

// var hint = document.getElementById('guess-input').value;

function guessAnswer() {
  $("button.guess-submita").click(function(event) {
    
    var guessA = $('#guess-inputa').val();
    guessA = guessA.toLowerCase();

    if ( guessA == answerA) {
      $('#correct').show().fadeOut(2000);
      $('#wrong').hide();
    } else {
      $('#wrong').show().fadeOut(2000);
    //   $('#guess-input').val(hint);
    }

  });

}

function enterSubmit() {
   $("#guess-inputa").keyup(function(event){
      if(event.keyCode == 13){
          $("#guess-submita").click();
      }
   });

  guessAnswer();
}

enterSubmit();


$(document).ready(function(){
    $(".divs .part").each(function(e) {
        if (e != 0)
            $(this).hide();
    });

    $("#next").click(function(){
        if ($(".divs .part:visible").next().length != 0)
            $(".divs .part:visible").next().show().prev().hide();
        else {
            $(".divs .part:visible").hide();
            $(".divs .part:first").show();
        }
        return false;
    });

    $("#prev").click(function(){
        if ($(".divs .part:visible").prev().length != 0)
            $(".divs .part:visible").prev().show().next().hide();
        else {
            $(".divs .part:visible").hide();
            $(".divs .part:last").show();
        }
        return false;
    });
});

window.alert("hey girly! welcome to the bestie quiz! this part will quiz u on the 26 facts that I have given u previously, so if u have not burned all that info into ur brain, go back and review!!! good luck in here xoxo");
