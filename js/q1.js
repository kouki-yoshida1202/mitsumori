




function culcq1() {
  var elements = document.getElementsByName("q1");

  var q1 = "";
  sum1 = 0;

  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    if (elements[i].checked) {
      var q1 = elements[i].value;
      break;
    }
  }
  console.log(q1);
  document.getElementById("q1write").innerHTML = q1;
  var sum1 =+ Number( q1 );
  return sum1;
}


function culcq2() {
  var elements = document.getElementsByName("q2");

  var q2 = "";
  sum2 = 0;

  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    if (elements[i].checked) {
      var q2 = elements[i].value;
      break;
    }
  }
  console.log(q2);
  document.getElementById("q2write").innerHTML = q2;
  var sum2 =+ Number( q2 );
  return sum2;
}

console.log(culcq1());
console.log(culcq2());
var total = culcq1() + culcq2();
document.getElementById("sum").innerHTML = total;
