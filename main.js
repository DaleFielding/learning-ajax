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

function getTableHeaders(obj) {
  var tableHeaders = [];

  Object.keys(obj).forEach(function (key) {
    tableHeaders.push(`<td>${key}</td>`)
  })
  return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
  let tableRows = [];
  let element = document.getElementById("data");
  element.innerHTML = "";

  getData(type, function (data) {
    data = data.results;
    let tableHeaders = getTableHeaders(data[0]);

    data.forEach(function (item) {
      let dataRow = [];
      Object.keys(item).forEach(function (key) {
        // ${item[key]} gets the value of the key
        dataRow.push(`<td>${item[key]}</td>`)
      })
      tableRows.push(dataRow);
    })
    element.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
  })
}