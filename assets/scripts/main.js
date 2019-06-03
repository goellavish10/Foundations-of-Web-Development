function buildList(data) {
  // console.log(data);

  // convert response to JSON
  let sanitize = JSON.parse(data);

  // get number of items in response
  let count = sanitize.length;

  console.log(sanitize);
  // console.log(sanitize[0]);
  console.log(sanitize[0].capital);

  // add count to the paragraph
  document.querySelector(".country_count").innerHTML = count;

  // loop through response items and build list
  for (i = 0; i <= count; i++) {
    let list = document.querySelector(".country_list");

    let country = sanitize[i] ? sanitize[i].name : null;
    let capital = sanitize[i] ? sanitize[i].capital : null;

    if (country) {
      let list_item = document.createElement("li");
      list_item.innerHTML = '<span class="country">' + country + "</span>";
      list_item.innerHTML =
        '<span class="country">' +
        country +
        '</span><span class="capital">' +
        capital +
        "</span>";
      list.append(list_item);
    }
  }
}

window.onload = function() {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process completed requests
  xhr.onload = function() {
    // Process our return data
    if (xhr.status >= 200 && xhr.status < 300) {
      // What do when the request is successful
      // console.log("success!", xhr);

      buildList(xhr.response);
    } else {
      // What do when the request fails
      console.log("The request failed!");
    }

    // Code that should run regardless of the request status
    // console.log("This always runs...");
  };

  // Create and send a GET request
  // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
  // The second argument is the endpoint URL
  xhr.open("GET", "https://restcountries.eu/rest/v2/all");
  xhr.send();
};
