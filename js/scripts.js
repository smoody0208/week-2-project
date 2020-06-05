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
 
    if (question1 === "a" && question2 === "a" && question3 === "a" && question4 === "a" && question5 === "a") {
      $("#a-js").show();
      $("#quizForm").hide();
    } else if (question1 === "b" && question2 === "b" && question3 === "b" && question4 === "b" && question5 === "b"){
      $("#a-ruby").show();
      $("#quizForm").hide();
    } else if (question1 === "c" && question2 === "c" && question3 === "c" && question4 === "c" && question5 === "c") {
      $("#a-csharp").show();
      $("#quizForm").hide();
    } else {
      alert("please enter a different combonation")
    }
  });
});

/*let rubyTotal = 0;
let jsTotal = 0;
let cSharpTotal = 0;


if (question1 === "a"){
 cSharpTotal ++;
} else if (question1 === "b"){
 jsTotal ++;
 rubyTotal ++;
} else if (question1 === "c"){
 cSharpTotal ++;
 jsTotal ++;
}

if (question2 === "a"){
 cSharpTotal ++;
} else if (question2 === "b"){
 jsTotal ++;
 rubyTotal ++;
} else if (question2 === "c"){
 jsTotal ++;
}

if (question3 === "a"){
 cSharpTotal ++;
} else if (question3 === "b"){
 jsTotal ++;
} else if (question3 === "c"){
 jsTotal ++;
 cSharpTotal ++;
 rubyTotal ++;
}

if (question4 === "a"){
 cSharpTotal ++;
} else if (question4 === "b"){
 jsTotal ++;
 rubyTotal ++;
} else if (question4 === "c"){
 jsTotal ++;
}

if (question5 === "a"){
 cSharpTotal ++;
} else if (question5 === "b"){
 jsTotal ++;
 rubyTotal ++;
} else if (question5 === "c"){
 jsTotal ++;
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

console.log(cSharpTotal);
event.preventDefault();*/