var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;
var sum5 = 0;
var sum6 = 0;
var sum7 = 0;

function start() {
  var newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question1, #total{opacity:0} #question1, #total{animation-name: fadeIn} #question1, #total{animation-duration:2s} #question1, #total{animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);
  document.getElementById("start").style.display = "none";
  document.getElementById("question1").style.display = "block";
  document.getElementById("total").style.display = "block";

}

function culcq1() {
  var elements = document.getElementsByName("q1");

  var q1 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q1 = elements[i].value;
      break;
    }
  }

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question2{opacity:0} #question2{animation-name: fadeIn} #question2{animation-duration:2s} #question2{animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question3{opacity:0} #question3{animation-name: fadeIn} #question3{animation-duration:2s} #question3{animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question4, {opacity:0} #question4 {animation-name: fadeIn} #question4 {animation-duration:2s} #question4 {animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question5 {opacity:0} #question5 {animation-name: fadeIn} #question5 {animation-duration:2s} #question5 {animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question6 {opacity:0} #question6 {animation-name: fadeIn} #question6 {animation-duration:2s} #question6 {animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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

  newstyle = document.createElement("style");
  newstyle.type="text/css";
  newstyle.innerText = '#question7{opacity:0} #question7{animation-name: fadeIn} #question7{animation-duration:2s} #question7{animation-fill-mode: forwards} @keyframes fadeIn { from{opacity:0} to{opacity:1}  } ';
  document.getElementsByTagName("body").item(0).appendChild(newstyle);

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
