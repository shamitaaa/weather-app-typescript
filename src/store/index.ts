import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import weatherReducers from './reducers/weatherReducers';

const store = createStore(
    weatherReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof weatherReducers>;

export default store;