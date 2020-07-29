/**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: SignUp Action
 * Date: 2020/04/18
 */

import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from './ActionTypes';
import {API, APIEndPoints} from '../../Helpers/URL';
import {Alert} from 'react-native';
import * as RootNavigation from '../../config/RootNavigation';
import LocalStorage from '../../Helpers/LocalStorage';

let localStorage = new LocalStorage();

export const sendLoginData = (email, password) => {
  console.log('values', email);
  console.log(`${API.baseURL}${APIEndPoints.login}`);

  //Apend Data as FormData
  let formData = new FormData();
  formData.append('user[email]', email);
  formData.append('user[password]', password);

  return async(dispatch) => {
    dispatch({type: FETCHING_DATA});
    fetch(`${API.baseURL}${APIEndPoints.login}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if(!res.success){
          dispatch({type: FETCHING_DATA_FAILURE});
          Alert.alert(
            "Error",
            ""+res.message,
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );

        }else if(res.success){
          dispatch({type: FETCHING_DATA_SUCCESS});
          console.log('res.data.token =========== > ', res.data.token);
          if(res.data != null){
            localStorage.storeData("clientAuthToken", res.data.token);
            RootNavigation.navigate('SelectLocation');
          }
          
        }
        console.log('RESPONSE =========== > ', res);
      })
      .catch((e) => {
        dispatch({type: FETCHING_DATA_FAILURE});
        Alert.alert(
          "Error",
          ""+e,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ],
          { cancelable: false }
        );
      });
  };
};
