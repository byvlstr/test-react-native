export interface Movie {
    poster: string,
    title: string,
    type: MovieType,
    year: string,
    imdbID: string
}

export enum MovieType {
    SERIES = 'series',
    MOVIE = 'movie',
    EPISODE = 'episode'
}