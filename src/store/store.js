import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { textsReducer } from '../reducers/textsReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;


const reducers = combineReducers({
   texts: textsReducer,
   ui: uiReducer
})

export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware( thunk )
   )
)
