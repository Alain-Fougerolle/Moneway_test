import { createStore } from 'redux';
import changeStatus from './reducers/usersReducer'

export default createStore(changeStatus);
