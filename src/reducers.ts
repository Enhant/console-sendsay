import { combineReducers } from 'redux';
import consoleReducer from './redux/reducer';

const rootReducer = combineReducers({
    console: consoleReducer,
});

export default rootReducer;
