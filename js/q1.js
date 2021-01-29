var sum1 = 0;
var sum2 = 0;

function culcq1() {
  var elements = document.getElementsByName("q1");

  var q1 = "";

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      var q1 = elements[i].value;
      break;
    }
  }

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

  document.getElementById("q2write").innerHTML = q2;

  sum2 = +Number(q2);
  sum();
}

function sum() {
  console.log(sum1, sum2);
  var total = sum1 + sum2;
  console.log(total);
  document.getElementById("sum").innerHTML = total;
}
