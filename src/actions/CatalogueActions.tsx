import { Type } from "./Type";
import { MovieType } from "../common/movie";
import { omdbApiKey as apiKey } from '../../app.json'
import { omdbApiUrl as url } from '../../app.json'
import axios from 'axios';

export const fetchMovies = (searchText: string, year: number, type: MovieType, page: number = 1) => {
    return (dispatch: any) => {
        axios.get(url, {
            params: {
                'apikey': apiKey,
                's': searchText,
                'y': year,
                'type': type.valueOf(),
                'page': page
            }
        }).then((result) => {
            dispatch({
                type: Type.LOAD_MOVIES_SUCCESS,
                payload: {
                    category: searchText,
                    data: result,
                    page: page
                }
            });   
        })
        .catch((error) =>{
            dispatch({
                type: Type.LOAD_MOVIES_ERROR,
                payload: error.response
            });
        });
    };
};