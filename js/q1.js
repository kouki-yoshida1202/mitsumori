var elements = document.getElementsByName('q1');



for( var a="", i=elements.length; i--;) {
  if(elements[i].checked) {
    var a = elements[i].value
    break;
  }
  document.write(a);
}
