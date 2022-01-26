var fetchButton = document.getElementById('fetch-button');
var repoNames = document.querySelector('ul');

// `getApi` function is called when the `fetchButton` is clicked

function getApi() {
  // TODO: Insert the API url to get a list of your repos
  var requestUrl = 'https://api.github.com/users/cedean1029/repos';

  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      // Looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        // Create a list element
        var listItem = document.createElement('li');
        var repoLink = document.querySelector('a href');

        listItem.textContent = data[i].name;
        repoLink = data[i].html_url;
        console.log(repoLink);

        // Set the text of the list element to the JSON response's .html_url property
        //listItem.textContent = data[i].html_url;

        // Append the li element to the id associated with the ul element.
        
        repoLink.appendChild(repoNames);
        repoNames.appendChild(listItem);
        
      }
    });
}

fetchButton.addEventListener('click', getApi);
