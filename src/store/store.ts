import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'; // Import thunk
import RootReducer, { RootState } from '../reducers';

export interface Root {
  root: RootState;
  // Add other reducers as needed
}

const rootReducer = combineReducers({
  root: RootReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

export default store;
