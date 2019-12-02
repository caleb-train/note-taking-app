import {
  combineReducers
} from 'redux';
import note from './noteReducer'

const reducers = combineReducers({
  note
});

export default reducers;