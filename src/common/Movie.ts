export interface Movie {
    poster: string,
    title: string,
    type: MovieType,
    year: string,
    imdbID: string
}

enum MovieType {
    SERIES = 'series',
    MOVIE = 'movie',
    EPISODE = 'episode'
}