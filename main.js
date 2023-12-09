let xhr = new XMLHttpRequest();
let data;

// retrieves the URL, were making a requests to the ci-swapi api 
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");

// sends the request 
xhr.send();

// The xhr object maintains an internal state as it's completed various parts of our request operation.
// Ready state of 4 means that the operation has been completed + status 200 means request succeeded and content delivered.
// Once completed we parse the responseText (string) into a json object and pass as a parameter to the setData function.
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
  }
};

// Used to ensure the onreadystatechange function has completing it function and and storing the data, before logging data to the console.
setTimeout(function () {
  console.log(data);
}, 500);