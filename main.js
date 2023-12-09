const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
}

function writeToDocument(type) {
  let element = document.getElementById("data");
  element.innerHTML = "";
  getData(type, function (data) {
    data = data.results;

    data.forEach(function (item) {
      element.innerHTML += "<p>" + item.name + "</p>";
    })
  })
}