/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: All the API URL's and Const String Values
 * Date:
 */

//Protocol and Host Links
const PROTOCOL = 'https://';
const HOST = 'delta4diserver.herokuapp.com';

//API END POINT LINKS
//FETCH ALL UPLOADED FILES
const GET_UPLOADED_FILES = PROTOCOL + HOST + '/file/get';

//Exporting All API Links to Use
export default {
  GET_UPLOADED_FILES: GET_UPLOADED_FILES,
};
