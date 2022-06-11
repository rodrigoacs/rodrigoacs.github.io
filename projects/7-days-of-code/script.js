window.onload = getPopularMovies();

function renderMovies(movieTBR) {
    const movie = document.createElement("div")
    movie.classList.add("movie")

    const movieInfos = document.createElement("div")
    movieInfos.classList.add("movie-infos")
    movie.appendChild(movieInfos)

    const moviePoster = document.createElement("div")
    moviePoster.classList.add("movie-poster")
    moviePoster.style.backgroundImage = `url(${movieTBR.image})`
    movieInfos.appendChild(moviePoster)

    const movieTrf = document.createElement("div")
    movieTrf.classList.add("movie-trf")
    movieTrf.innerHTML = `<span>${movieTBR.title} (${movieTBR.year})</span>`
    movieInfos.appendChild(movieTrf)

    const movieRating = document.createElement("div")
    movieRating.classList.add("movie-rating")

    const starIcon = document.createElement("img")
    starIcon.src = "./images/star-icon.png"
    starIcon.style.width = `2.4rem`
    movieRating.appendChild(starIcon)
    movieRating.innerHTML += `<span> ${movieTBR.rating}</span>`

    const movieFavorite = document.createElement("div")
    movieFavorite.classList.add("favorite")
    const favoriteButton = document.createElement("button")
    const favoriteImage = document.createElement("img")
    if (movieTBR.isFavorited) {
        favoriteImage.src = "./images/filled-heart-icon.png"
    } else {
        favoriteImage.src = "./images/empty-heart-icon.svg"
    }
    favoriteImage.style.width = `2.4rem`
    const favoriteText = document.createElement("span")
    favoriteText.innerHTML = " Favoritar"
    favoriteButton.appendChild(favoriteImage)
    movieFavorite.appendChild(favoriteButton)
    movieFavorite.appendChild(favoriteText)
    movieTrf.appendChild(movieRating)
    movieTrf.appendChild(movieFavorite)

    const movieDescription = document.createElement("div")
    movieDescription.classList.add("movie-description")
    movieDescription.innerHTML = `${movieTBR.description}`
    movie.appendChild(movieDescription)

    document.querySelector(".movies").appendChild(movie)
}

async function getPopularMovies() {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=04c83eacb1a1a16fb8cfc98c293b0b6d&language=pt-BR&page=1"
    const fetchResponse = await fetch(url).then(response => response.json())

    let movies = []
    movies = fetchResponse.results.map(movie => {
        return {
            image: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            title: movie.title,
            rating: movie.vote_average,
            year: movie.release_date.split("-")[0],
            description: movie.overview,
            isFavorited: false
        }
    })

    movies.forEach(movie => {
        renderMovies(movie);
    });
}