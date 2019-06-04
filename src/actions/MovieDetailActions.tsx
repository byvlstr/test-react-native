import { Movie } from "../common/movie";
import Axios from "axios";
import { omdbApiKey as apiKey } from '../../app.json'
import { omdbApiUrl as url } from '../../app.json'
import { Type } from "./Type";
import { Actions } from "react-native-router-flux";

export const selectMovie = (movie: Movie) => {
    return (dispatch: any) => {
        Axios.get(url, {
            params: {
                'apikey': apiKey,
                'i': movie.imdbID,
                'plot': 'full'
            }
        }).then((result) => {
            const movieDetail: Movie = result.data;
            dispatch({
                type: Type.SELECT_MOVIE,
                payload: movieDetail
            });
            Actions.moviedetail({title: movieDetail.Title});
        })
        .catch((error) => console.log(error));
    };
}