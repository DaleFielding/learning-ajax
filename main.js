const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);
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
    tableHeaders.push(`<td>${key}</td>`);
  });
  return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
  if (next && prev) {
    return `<button onclick="writeToDocument('${prev}')">Previous</button>
            <button onclick="writeToDocument('${next}')">Next</button>`;
  } else if (next && !prev) {
    return `<button onclick="writeToDocument('${next}')">Next</button>`;
  } else if (!next && prev) {
    return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
  }
}

function writeToDocument(url) {
  let tableRows = [];
  let element = document.getElementById("data");
  element.innerHTML = "";

  getData(url, function (data) {
    let pagination = "";
    if (data.next || data.previous) {
      pagination = generatePaginationButtons(data.next, data.previous);
    }
    data = data.results;
    let tableHeaders = getTableHeaders(data[0]);

    data.forEach(function (item) {
      let dataRow = [];
      Object.keys(item).forEach(function (key) {
        // ${item[key]} gets the value of the key
        let rowData = item[key].toString();
        let truncatedData = rowData.substring(0, 15);
        dataRow.push(`<td>${truncatedData}</td>`)
      });
      tableRows.push(`<tr>${dataRow}</tr>`);
    });
    element.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;
  })
}