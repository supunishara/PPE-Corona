/**
 * Author : Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: Redux Store
 * Date: 2020/04/15
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
// import { registerServices } from "./services/registerServices";
import RootReducer from '../Reducers/index';
import logger from 'redux-logger';

export default function configureStore(serviceManager) {
  const store = createStore(
    RootReducer,
    // applyMiddleware(ReduxThunk, logger)
    composeWithDevTools(
      applyMiddleware(ReduxThunk.withExtraArgument(serviceManager),logger)
    )
  );
  return store;
}
