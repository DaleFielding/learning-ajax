let xhr = new XMLHttpRequest();

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); // retrieves the URL, were making a requests to the ci-swapi api 
xhr.send(); // sends the request 

/*
The xhr object maintains an internal state as it's completed various parts of our request operation
Ready state of 4 means that the operation has been completed + status 200 means request succeeded and content delivered.
Once completed we access the div with the id of data, then set its inner html to the response text that comes back from our xhr object
*/
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("data").innerHTML = this.responseText;
  }
};