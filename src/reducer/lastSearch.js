import {
    GET_LIST_RESULT_SUCCESS,
} from '../constant';

const initialState = {};

const ObjectState = (state = initialState, {type, payload={}}) => { 
    const {value, data} = payload;
    switch (type) {
      case GET_LIST_RESULT_SUCCESS:   
        return  { 
          ...state, 
          [value]:data,
        };
      default:
        return state;
    }
};
export default ObjectState;