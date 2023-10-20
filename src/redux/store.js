import { combineReducers, configureStore } from '@reduxjs/toolkit';


/** call reducers */

import questionReducer from './reducers/questionReducer';
import resultReducer from './reducers/resultReducer';

const rootReducer = combineReducers({
    question : questionReducer,
    result : resultReducer
})


/** create store with reducer */
export default configureStore({ reducer : rootReducer});