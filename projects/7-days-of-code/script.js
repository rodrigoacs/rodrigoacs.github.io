const movies = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        rating: 9.2,
        year: 2022,
        description: "Descrição do filme…",
        isFavorited: true,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 9.2,
        year: 2019,
        description: "Descrição do filme…",
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 9.2,
        year: 2022,
        description: "Descrição do filme…",
        isFavorited: false
    },
]

function renderMovies(movieTBR) {
    const movie = document.createElement('div')
    movie.classList.add('movie')

    const movieInfos = document.createElement('div')
    movieInfos.classList.add('movie-infos')
    movie.appendChild(movieInfos)

    const moviePoster = document.createElement('div')
    moviePoster.classList.add('movie-poster')
    moviePoster.style.backgroundImage = `url(${movieTBR.image})`
    movieInfos.appendChild(moviePoster)

    const movieTrf = document.createElement('div')
    movieTrf.classList.add('movie-trf')
    movieTrf.innerHTML = `<span>${movieTBR.title} (${movieTBR.year})</span>`
    movieInfos.appendChild(movieTrf)

    const movieRating = document.createElement('div')
    movieRating.classList.add('movie-rating')

    const starIcon = document.createElement('img')
    starIcon.src = './images/star-icon.png'
    starIcon.style.width = `2.4rem`
    movieRating.appendChild(starIcon)
    movieRating.innerHTML += `<span> ${movieTBR.rating}</span>`
    
    const movieFavorite = document.createElement('div')
    movieFavorite.classList.add('favorite')
    const favoriteButton = document.createElement('button')
    const favoriteImage = document.createElement('img')
    if (movieTBR.isFavorited) {
        favoriteImage.src = './images/filled-heart-icon.png'
    } else {
        favoriteImage.src = './images/empty-heart-icon.svg'
    }
    favoriteImage.style.width = `2.4rem`
    const favoriteText = document.createElement('span')
    favoriteText.innerHTML = ' Favoritar'
    favoriteButton.appendChild(favoriteImage)
    movieFavorite.appendChild(favoriteButton)
    movieFavorite.appendChild(favoriteText)
    movieTrf.appendChild(movieRating)
    movieTrf.appendChild(movieFavorite)

    const movieDescription = document.createElement('div')
    movieDescription.classList.add('movie-description')
    movieDescription.innerHTML = `<span>${movieTBR.description}</span>`
    movie.appendChild(movieDescription)

    document.querySelector('.movies').appendChild(movie)
}