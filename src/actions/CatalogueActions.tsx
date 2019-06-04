import { Type } from "./Type";
import { Movie, MovieType } from "../common/movie";
import { Actions } from "react-native-router-flux";
import { omdbApiKey as apiKey } from '../../app.json'
import { omdbApiUrl as url } from '../../app.json'
import axios from 'axios';

export const fetchMovies = (searchText: string, year: number, type: MovieType) => {
    return (dispatch: any) => {
        axios.get(url, {
            params: {
                'apikey': apiKey,
                's': searchText,
                'y': year,
                'type': type.valueOf()
            }
        }).then((result) => {
            dispatch({
                type: Type.LOAD_MOVIES_SUCCESS,
                payload: {
                    category: searchText,
                    data: result
                }
            })   
        })
        .catch((error) => console.log(error));
    };
};