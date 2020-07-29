/**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: API UTILS
 * Date: 2020/04/15
 */

import {FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE} from '../Redux/Actions/ActionTypes';

export default class APIUtil {

  async getHeader(){
      let header = {
        'Content-Type': 'multipart/form-data',
      };
      return header;
    
  }


  async callPost(url, header, body){
    return fetch(url, {
      method: 'POST',
      headers: header,
      body: body,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('RESPONSE =========== > ', res);
        // //Handle the response accordingly
        // if (res.data !== null) {
        // } else {
        //   dispatch({type: FETCHING_DATA_SUCCESS});
        // }
      })
      .catch((e) => {
        dispatch({type: FETCHING_DATA_FAILURE});
      });
  }


}
