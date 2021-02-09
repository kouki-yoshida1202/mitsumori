var params = (new URL(document.location)).searchParams;
var total = params.get('total');
document.getElementById("result").innerHTML = total;
