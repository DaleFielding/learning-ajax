let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); // retrieves the URL, were making a requests to the ci-swapi api 
xhr.send(); // sends the request 

// Used to store the data that is returned from onreadystatechange.
function setData(jsonData) {
  data = jsonData;
  console.log(data);
}
/*
The xhr object maintains an internal state as it's completed various parts of our request operation
Ready state of 4 means that the operation has been completed + status 200 means request succeeded and content delivered.
Once completed we parse the responseText (string) into a json object and pass as a parameter to the setData function.
*/
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    setData(JSON.parse(this.responseText));
  }
};