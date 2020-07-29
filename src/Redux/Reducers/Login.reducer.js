
  /**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: Auth Reducer
 * Date: 2020/04/15
 */

import {FETCHING_DATA,FETCHING_DATA_SUCCESS,FETCHING_DATA_FAILURE,} from '../../Redux/Actions/ActionTypes';

  const INITIAL_STATE = {
    isLoading:false,
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCHING_DATA:
        return {
          ...state,
          isLoading: true,
        };
      case FETCHING_DATA_SUCCESS: 
        return{
            ...state,
            isLoading: false,
        };
      case FETCHING_DATA_FAILURE:
          return {
              ...state,
              isLoading: false,
          }
      default:
        return state;
    }
  };
  