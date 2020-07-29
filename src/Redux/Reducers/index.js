
  /**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: Root Reducer
 * Date: 2020/04/15
 */

import { combineReducers } from 'redux';

import Login from './Login.reducer';
import SignUp from './SignUp.reducer';
import ForgetPassword from './ForgetPassword.reducer.js';
import UserProfile from './UserProfiler.reducer';
import SelectLocation from './SelectLocation.reducer';
import Searchpharmacy from './SearchPharmacies.reducer';
import ViewPharmacyList from './ViewPharmacyList.reducer';
import SelectItems from './SelectItems.reducer';
import SelectTime from './SelectTime.reducer';
import ConfirmTime from './ConfirmTime.reducer';
import ReportSearch from './ReportSearch.reducer';
import AddReportQuality from './AddReportQuality.reducer';
import AddReportDetail from './AddReportDetails.reducer';
import SuccessSubmit from './SuccessSubmit.reducer';

export default combineReducers({
  Login,
  SignUp,
  ForgetPassword,
  UserProfile,
  SelectLocation,
  Searchpharmacy,
  ViewPharmacyList,
  SelectItems,
  SelectTime,
  ConfirmTime,
  ReportSearch,
  AddReportQuality,
  AddReportDetail,
  SuccessSubmit
});