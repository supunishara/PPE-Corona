
  /**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: SignUp Action
 * Date: 2020/04/18
 */

import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from './ActionTypes';
import {API, APIEndPoints} from '../../Helpers/URL';

export const sendUserProfileData = (values) => {
    console.log("values",values);
    return dispatch => {
        dispatch({ type: FETCHING_DATA });
        fetch(`${API.baseURL}${APIEndPoints.signup}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                fullname: values.fullname,
                identificationNo: values.identificationNo,
                Email: values.Email,
                phoneNo: values.phoneNo,
                password: values.password,
                ConfirmPassword: values.ConfirmPassword,
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

