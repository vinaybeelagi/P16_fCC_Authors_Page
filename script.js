// Get references to HTML elements
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Define variables to manage the index range for displaying authors and store author data
let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

// Fetch author data from the provided JSON file
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
  .then((res) => res.json())
  .then((data) => {
    // Store the fetched data in the authorDataArr
    authorDataArr = data;

    // Display the initial set of authors
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => {
    // Display an error message if fetching fails
    authorContainer.innerHTML = '<p class="error-msg">There was an error loading the authors</p>';
  });

