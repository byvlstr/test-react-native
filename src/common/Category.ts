import { MovieType } from "./movie";

export interface Category {
    subject: MovieCategory,
    year: number, 
    type: MovieType 
}

export enum MovieCategory {
    STAR = 'Star',
    BEE = 'Bee',
    HOPE = 'Hope',
    BATTLE = 'Battle',
    SUN = 'Sun'
}