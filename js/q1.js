var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;

function culcq1() {
  var elements = document.getElementsByName("q1");

  var q1 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q1 = elements[i].value;
      break;
    }
  }

  document.getElementById("question1").style.display = "none";
  document.getElementById("question2").style.display = "block";
  document.getElementById("q1write").innerHTML = q1;

  sum1 = +Number(q1);
  sum();
}

function culcq2() {
  var elements = document.getElementsByName("q2");

  var q2 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q2 = elements[i].value;
      break;
    }
  }

  document.getElementById("question2").style.display = "none";
  document.getElementById("question3").style.display = "block";
  document.getElementById("q2write").innerHTML = q2;

  sum2 = +Number(q2);
  sum();
}

function culcq3() {
  var elements = document.getElementsByName("q3");

  var q3 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q3 = elements[i].value;
      break;
    }
  }

  document.getElementById("question3").style.display = "none";
  document.getElementById("question4").style.display = "block";
  document.getElementById("q3write").innerHTML = q3;

  sum3 = +Number(q3);
  sum();
}

function culcq4() {
  var elements = document.getElementsByName("q4");

  var q4 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q4 = elements[i].value;
      break;
    }
  }

  document.getElementById("question4").style.display = "none";
  document.getElementById("question5").style.display = "block";
  document.getElementById("q4write").innerHTML = q4;

  sum4 = +Number(q4);
  sum();
}

function culcq5() {
  var elements = document.getElementsByName("q5");

  var q5 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q5 = elements[i].value;
      break;
    }
  }

  document.getElementById("question5").style.display = "none";
  document.getElementById("question6").style.display = "block";
  document.getElementById("q5write").innerHTML = q5;

  sum5 = +Number(q5);
  sum();
}

function culcq6() {
  var elements = document.getElementsByName("q6");

  var q6 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q6 = elements[i].value;
      break;
    }
  }

  document.getElementById("question6").style.display = "none";
  document.getElementById("question7").style.display = "block";
  document.getElementById("q6write").innerHTML = q6;

  sum6 = +Number(q6);
  sum();
}

function culcq7() {
  var elements = document.getElementsByName("q7");

  var q7 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q7 = elements[i].value;
      break;
    }
  }

  document.getElementById("question7").style.display = "none";
  document.getElementById("q7write").innerHTML = q7;

  sum7 = +Number(q7);
  sum();
}

function sum() {
  console.log(sum1, sum2, sum3, sum4, sum5, sum6, sum7);
  var total = sum1 + sum2 + sum3 + sum4 + sum5 + sum6 + sum7;
  console.log(total);
  document.getElementById("sum").innerHTML = total;
}

function back2() {
  //表示要素の選択
  document.getElementById("question1").style.display = "block";
  document.getElementById("question2").style.display = "none";

  //金額のリセット
  sum1 = 0;
  document.getElementById("q1write").innerHTML = 0;
  total = sum2 + sum3 + sum4 + sum5 + sum6 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q1")) {
    element.checked = false;
  }
}

function back3() {

  document.getElementById("question2").style.display = "block";
  document.getElementById("question3").style.display = "none";

  sum2 = 0;
  document.getElementById("q2write").innerHTML = 0;
  total = sum1 + sum3 + sum4 + sum5 + sum6 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q2")) {
    element.checked = false;
  }
}
function back4() {

  document.getElementById("question3").style.display = "block";
  document.getElementById("question4").style.display = "none";

  sum3 = 0;
  document.getElementById("q3write").innerHTML = 0;
  total = sum1 + sum2 + sum4 + sum5 + sum6 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q3")) {
    element.checked = false;
  }
}
function back5() {

  document.getElementById("question4").style.display = "block";
  document.getElementById("question5").style.display = "none";

  sum4 = 0;
  document.getElementById("q4write").innerHTML = 0;
  total = sum1 + sum2 + sum3 + sum5 + sum6 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q4")) {
    element.checked = false;
  }
}
function back6() {

  document.getElementById("question5").style.display = "block";
  document.getElementById("question6").style.display = "none";

  sum5 = 0;
  document.getElementById("q5write").innerHTML = 0;
  total = sum1 + sum2 + sum3 + sum4 + sum6 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q5")) {
    element.checked = false;
  }
}
function back7() {

  document.getElementById("question6").style.display = "block";
  document.getElementById("question7").style.display = "none";

  sum6 = 0;
  document.getElementById("q6write").innerHTML = 0;
  total = sum1 + sum2 + sum3 + sum4 + sum5 + sum7;
  document.getElementById("sum").innerHTML = total;

  for(element of document.getElementsByName("q6")) {
    element.checked = false;
  }
}
