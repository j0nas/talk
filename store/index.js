import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import users from './users';
import currentUser from './currentUser';
import thunk from 'redux-thunk';

const store = combineReducers({
  users,
  currentUser,
});

const composeEnhancers =
  (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const initialiseStore = initialState => createStore(store, initialState, composeEnhancers(applyMiddleware(thunk)));
export default initialiseStore;
