
  /**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: Forget Password Actions
 * Date: 2020/04/20
 */


import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './ActionTypes';
import {API, APIEndPoints} from '../../Helpers/URL';


export const sendReportSearchData = (values) => {
    console.log("values",values);
    console.log(`${API.baseURL}${APIEndPoints.login}`);
    return dispatch => {
        dispatch({ type: FETCHING_DATA });
        fetch(`${API.baseURL}${APIEndPoints.login}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                email: values.email,
                // `${API.email}${email}`
              })
        })
        .then(res => res.json())
        .then(res => {
          //Handle the response accordingly
          if (res.data !== null) {
            
          } else {
            dispatch({ type: FETCHING_DATA_SUCCESS });
          }
        })
        .catch(e => {
            dispatch({ type: FETCHING_DATA_FAILURE });
        });
    };
  }
