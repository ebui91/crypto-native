import axios from 'axios';
import { apiBaseURL } from './../utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL,
} from './../utils/ActionTypes';


export default function FetchCoinData() {
    return dispatch=> {
        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
            .then(response=> {
                return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response.data });
            })
            .catch(err=> {
                return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err });
            });
    }
}
