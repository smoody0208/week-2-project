$(document).ready(function(){
  $("#quizForm").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
    const question4 = $("input:radio[name=question4]:checked").val();
    const question5 = $("input:radio[name=question5]:checked").val();

    $(".name").text(nameInput);

    let rubyTotal = 0;
    let jsTotal = 0;
    let cSharpTotal = 0;

    if (question1 === "a"){
      cSharpTotal +=1;
    } else if (question1 === "b"){
      jsTotal +=1;
      rubyTotal +=1;
    } else if (question1 === "c"){
      cSharpTotal +=1;
      jsTotal +=1;
    }

    if (question2 === "a"){
      cSharpTotal +=1;
    } else if (question2 === "b"){
      jsTotal +=1;
      rubyTotal +=1;
    } else if (question2 === "c"){
      jsTotal +=1;
    }

    if (question3 === "a"){
      cSharpTotal +=1;
    } else if (question3 === "b"){
      jsTotal +=1;
    } else if (question3 === "c"){
      jsTotal +=1;
      cSharpTotal +=1;
      rubyTotal +=1;
    }

    if (question4 === "a"){
      cSharpTotal +=1;
    } else if (question4 === "b"){
      jsTotal +=1;
      rubyTotal +=1;
    } else if (question4 === "c"){
      jsTotal +=1;
    }

    if (question5 === "a"){
      cSharpTotal +=1;
    } else if (question5 === "b"){
      jsTotal +=1;
      rubyTotal +=1;
    } else if (question5 === "c"){
      jsTotal +=1;
    }

    if (cSharpTotal === 0 && jsTotal === 0 && rubyTotal === 0){
      alert("please select your answers")
    } else if (cSharpTotal > rubyTotal && cSharpTotal > jsTotal){
      $("#a-csharp").show();
      $("#quizForm").hide();
    } else if (rubyTotal > cSharpTotal && rubyTotal > jsTotal){
      $("#a-ruby").show();
      $("#quizForm").hide();
    } else if (jsTotal > cSharpTotal && jsTotal > jsTotal){
      $("#jsTotal").show();
      $("#quizForm").hide();
    } else {
      $("#cSharp").show();
      $("#quizForm").hide();
    } 




    /*if (question1 === "medium" && question2 === "fun" && question3 === "highschool" || "tradeschool" && question4 === "web" || "app" && question5 === "no") {
      $("#a-js").show();
      $("#quizForm").hide();
    } else if (question1 === "small" || "medium" && question2 === "change" && question3 === "highschool" && question4 === "web" && question5 === "yes"){
      $("#a-ruby").show();
      $("#quizForm").hide();
    } else {
      $("#a-csharp").show();
      $("#quizForm").hide();
    }*/
  })

})
