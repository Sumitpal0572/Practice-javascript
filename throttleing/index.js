// const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=ad9cf180';

// function searchMovie() {
//     const movieName = document.getElementById('movieInput').value;
//     fetch(`${apiKey}&s=${movieName}`)
//         .then(response => response.json())
//         .then(data => displayMovies(data.Search))
//         .catch(error => console.error('Error fetching data:', error));
// }

// function displayMovies(movies) {
//     const movieList = document.getElementById('movieList');
//     movieList.innerHTML = '';

//     movies.forEach(movie => {
//         const movieItem = document.createElement('div');
//         movieItem.textContent = movie.Title;
//         movieItem.style.cursor = 'pointer';
//         movieItem.addEventListener('click', () => showMovieDetails(movie.imdbID));
//         movieList.appendChild(movieItem);
//     });
// }

// function showMovieDetails(imdbID) {
//     window.open(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`, '_blank');
// }


const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=ad9cf180';

let timeoutId;

function throttledSearchMovie() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(searchMovie, 1000); // Throttle by 500ms
}

function searchMovie() {
    const movieName = document.getElementById('movieInput').value;
    fetch(`${apiKey}&s=${movieName}`)
        .then(response => response.json())
        .then(data => displayMovies(data.Search))
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';

    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.textContent = movie.Title;
            movieItem.addEventListener('click', () => showMovieDetails(movie.imdbID));
            movieList.appendChild(movieItem);
        });
    } else {
        movieList.textContent = 'No movies found';
    }
}

function showMovieDetails(imdbID) {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => displayMovieDetails(data))
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(data) {
    const movieDetails = document.getElementById('movieDetails');
    // movieDetails.innerHTML = `
    //     <h2>${movie.Title}</h2>
    //     <p><strong>Year:</strong> ${movie.Year}</p>
    //     <p><strong>Genre:</strong> ${movie.Genre}</p>
    //     <p><strong>Director:</strong> ${movie.Type}</p>
    //     <img src="${movie.Poster}" alt="Poster" style="max-width: 200px;">
    // `;

    movieDetails.innerHTML = ""

    let title = document.createElement("h2");
    title.textContent = data.Title;

    let poster = document.createElement("img");
    poster.src = data.Poster;

    let year = document.createElement("p");
    year.textContent = `Year: ${data.Year}`;

    let genre = document.createElement("p");
    genre.textContent = `Genre: ${data.Genre}`;

    let plot = document.createElement("p");
    plot.textContent = `Plot: ${data.Plot}`;
    movieDetails.append(poster, title, year, genre, plot);
}
