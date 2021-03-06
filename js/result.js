var params = new URL(document.location).searchParams;
var total = params.get("total");
var sum1 = params.get("sum1");
var sum2 = params.get("sum2");
var sum3 = params.get("sum3");
var sum4 = params.get("sum4");
var sum5 = params.get("sum5");
var sum6 = params.get("sum6");
var sum7 = params.get("sum7");
var sum8 = params.get("sum8");
var sum9 = params.get("sum9");
var answer1 = params.get("answer1");
var answer2 = params.get("answer2");
var answer3 = params.get("answer3");
var answer4 = params.get("answer4");
var answer5 = params.get("answer5");
var answer6 = params.get("answer6");
var answer7 = params.get("answer7");
var answer8 = params.get("answer8");
var answer9 = params.get("answer9");
var text1 = params.get("text1");
var text2 = params.get("text2");
var text3 = params.get("text3");
var text4 = params.get("text4");
var text5 = params.get("text5");
var text6 = params.get("text6");
var text7 = params.get("text7");
var text8 = params.get("text8");
var text9 = params.get("text9");
var lat = "0";
var lng = "0";
var formattedAddress = "取得NG";
var requestURL = "";
navigator.geolocation.getCurrentPosition(
  success,
  console.log("位置情報取得NG")
);
function success(pos) {
  lat = pos.coords.latitude; //緯度を取得して定数latに代入
  lng = pos.coords.longitude; //経度を取得して定数lngに代入
  requestURL = "https://maps.google.com/maps?q=" + lat + "," + lng + ",20z";

  // var requestAjax = function(endpoint, callback) {
  //   var xhr = newXMLHttpRequest();
  //   xhr.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       callback(this.response);
  //     }
  //   };
  //   xhr.responseType = "json";
  //   xhr.open("GET", endpoint, true);
  //   xhr.send();
  // };

  // // 東京駅の緯度経度
  // var latitude = lat;
  // var longitude = lng;
  // var apiKey = "";
  // requestURL =
  //   "https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false";
  // requestURL += "&latlng=" + latitude + "," + longitude;

  // requestURL += "&key=" + apiKey;
  // requestAjax(requestURL, function(response) {
  //   if (response.error_message) {
  //     console.log(response.error_message);
  //   } else {
  //     formattedAddress = response.results[0]["formatted_address"];
  //     // 住所は「日本、〒100-0005 東京都千代田区丸の内一丁目」の形式
  //     console.log(formattedAddress);
  //     var data = formattedAddress.split(" ");
  //     if (data[1]) {
  //       // id=addressに住所を設定する
  //       document.getElementById("address").innerHTML = data[1];
  //     }
  //   }
  // });
}
document.getElementById("result").innerHTML = total;
setTimeout(function() {
  $("#priceHidden").val(total);
}, 1000);
setTimeout(function() {
  // console.log(
  //   "total" + total,
  //   "sum1" + sum1,
  //   "sum2" + sum2,
  //   "sum3" + sum3,
  //   "sum4" + sum4,
  //   "sum5" + sum5,
  //   "sum6" + sum6,
  //   "sum7" + sum7,
  //   "sum8" + sum8,
  //   "sum9" + sum9,
  //   "text1" + text1,
  //   "text2" + text2,
  //   "text3" + text3,
  //   "text4" + text4,
  //   "text5" + text5,
  //   "text6" + text6,
  //   "text7" + text7,
  //   "text8" + text8,
  //   "text9" + text9,
  //   "answer1" + answer1,
  //   "answer2" + answer2,
  //   "answer3" + answer3,
  //   "answer4" + answer4,
  //   "answer5" + answer5,
  //   "answer6" + answer6,
  //   "answer7" + answer7,
  //   "answer8" + answer8,
  //   "answer9" + answer9,
  //   "lat" + lat,
  //   "lng" + lng,
  //   "formattedAddress" + formattedAddress
  // );
  $.ajax("../php/result.php", {
    type: "post",
    data: {
      total: total,
      sum1: sum1,
      sum2: sum2,
      sum3: sum3,
      sum4: sum4,
      sum5: sum5,
      sum6: sum6,
      sum7: sum7,
      sum8: sum8,
      sum9: sum9,
      text1: text1,
      text2: text2,
      text3: text3,
      text4: text4,
      text5: text5,
      text6: text6,
      text7: text7,
      text8: text8,
      text9: text9,
      answer1: answer1,
      answer2: answer2,
      answer3: answer3,
      answer4: answer4,
      answer5: answer5,
      answer6: answer6,
      answer7: answer7,
      answer8: answer8,
      answer9: answer9,
      lat: lat,
      lng: lng,
      requestURL: requestURL
      // formattedAddress: formattedAddress
    },
    dataType: "json"
  });
}, 3000);
