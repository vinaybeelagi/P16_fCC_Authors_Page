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

// Function to fetch and display more authors when the "Load More" button is clicked
const fetchMoreAuthors = () => {
  // Update the index range for the next set of authors
  startingIndex += 8;
  endingIndex += 8;

  // Display the next set of authors
  displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

  // Check if there are no more authors to load
  if (authorDataArr.length <= endingIndex) {
    // Disable the "Load More" button and update its appearance
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = "not-allowed";
    loadMoreBtn.textContent = 'No more data to load';
  }
};

// Function to display authors in the HTML
const displayAuthors = (authors) => {
  // Loop through the authors and add HTML elements for each author to the container
  authors.forEach(({ author, image, url, bio }, index) => {
    authorContainer.innerHTML += `
      <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar">
        <div class="purple-divider"></div>
        <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author} author page</a>
      </div>
    `;
  });
};
// Add an event listener to the Load More button to trigger fetching more authors
loadMoreBtn.addEventListener('click', fetchMoreAuthors);


