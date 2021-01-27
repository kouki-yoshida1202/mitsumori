function culc() {
  var elements = document.getElementsByName("q1");

  var a = "";

  for (var i = 0; i < elements.length; i++) {
    console.log(elements[i]);
    if (elements[i].checked) {
      var a = elements[i].innerHTML();
      break;
    }
  }
  console.log(a);
  var sample = document.getElementById("aiueo").innerHTML;
  console.log(sample);
  document.getElementById("q1write").innerHTML = a;
}
