export interface Movie {
    Poster: string,
    Title: string,
    Type: MovieType,
    Year: string,
    imdbID: string,

    Runtime: string,
    Country: string,
    Director: string,
    Actors: string,
    imdbRating: string,
    Plot: string,
    Language: string
}

export enum MovieType {
    SERIES = 'series',
    MOVIE = 'movie',
    EPISODE = 'episode'
}
