import {
  combineReducers
} from 'redux';
import note from './noteReducer'
import auth from './authReducer'

const reducers = combineReducers({
  note,
  auth
});

export default reducers;