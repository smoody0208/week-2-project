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

    if (question1 === "medium" && question2 === "fun" && question3 === "highschool" || "tradeschool" && question4 === "web" && question5 === "no") {
      $("#a-js").show();
      $("#quizForm").hide();
    } else if (question1 === "small" && question2 === "change" && question3 === "highschool" && question4 === "web" && question5 === "yes"){
      $("#a-ruby").show();
      $("#quizForm").hide();
    } else {
      $("#a-csharp").show();
      $("#quizForm").hide();
    }
  })

})
