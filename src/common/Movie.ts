export interface Movie {
    Poster: string,
    Title: string,
    Type: MovieType,
    Year: string,
    imdbID: string
}

export enum MovieType {
    SERIES = 'series',
    MOVIE = 'movie',
    EPISODE = 'episode'
}
