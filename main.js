/*
printDataToConsole(data) is passed as a parameter to getData. 
Inside the function this is represented by name 'callback'
As such data becomes callback(JSON.parse(this.responseText));
*/

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
  getData(type, function (data) {
    document.getElementById("data").innerHTML = data;
  })
}