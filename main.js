/*
printDataToConsole(data) is passed as a parameter to getData. 
Inside the function this is represented by name 'callback'
As such data becomes callback(JSON.parse(this.responseText));
*/

function getData(callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
}

function printDataToConsole(data) {
  console.log(data)
}

getData(printDataToConsole);