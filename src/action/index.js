
import { 
    GET_LIST_RESULT,
    GET_LIST_RESULT_SUCCESS,
    GET_LIST_RESULT_FAILED,
} from '../constant';

import { getListListResultPromise } from '../services';

export const getListResult = () => ({
    type: GET_LIST_RESULT,    
});

export const getListResultSuccess = data => ({
    type: GET_LIST_RESULT_SUCCESS,
    payload: data,
});

export const getListResultFailed = err => ({
    type: GET_LIST_RESULT_FAILED,
    payload: err,
});
export const getResult = (value) => (dispatch) => {
    dispatch(getListResult());
    return getListListResultPromise(value.toLowerCase())
      .then((data) => {
        dispatch(getListResultSuccess(({value,data})));
        return Promise.resolve(({value,data}));
    })
    .catch((error) => {
        dispatch(getListResultFailed(error));
        return Promise.resolve(error);
    });
};


  