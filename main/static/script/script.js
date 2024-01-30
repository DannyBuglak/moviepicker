let inputValues = {};

// JavaScript for Rating Stars
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');
    const ratingInput = document.getElementById('rating');
    const genreInput = document.getElementById('genre');
    const releaseDateInput = document.getElementById('release-date');
    const freePaidInput = document.getElementById('free-paid');
    
    // Event listener for each star
    stars.forEach(function(star) {
      star.addEventListener('click', function() {
        const rating = parseInt(star.getAttribute('data-rating'));
        ratingInput.value = rating; // Set the rating input value
        console.log(ratingInput.value);
        highlightStars(rating); // Highlight stars up to the selected one
        logAllInputValues();
      });
    });
    
    // Function to highlight stars up to the selected one
    function highlightStars(selectedRating) {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const starRating = parseInt(star.getAttribute('data-rating'));
        if (starRating <= selectedRating) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      }
    }

    // Event listeners for other input fields
    genreInput.addEventListener('change', logAllInputValues);
    releaseDateInput.addEventListener('input', logAllInputValues);
    freePaidInput.addEventListener('change', logAllInputValues);

    // Function to add and log all input values
    function logAllInputValues() {
        inputValues = {
            rating: ratingInput.value,
            genre: genreInput.value,
            releaseDate: releaseDateInput.value,
            freePaid: freePaidInput.value
        };
        console.log(inputValues);
    }
});
  