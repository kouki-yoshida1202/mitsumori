var params = new URL(document.location).searchParams;
var total = params.get("total");
document.getElementById("result").innerHTML = total;
setTimeout(function() {
  $("#priceHidden").val(total);
}, 1000);

$.ajax("../php/result.php", {
  type: "post",
  data: { total: total },
  dataType: "json"
});
