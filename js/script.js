var changeVisibility = function () {

  var currentClassName = document.getElementById('popup').className;

  if (currentClassName == "invisiblePopup") {
    document.getElementById('popup').className = "visiblePopup";
  } else {
    document.getElementById('popup').className = "invisiblePopup";
  }
}

var sendAlert = function () {
  alert("Message Sent!");
}
