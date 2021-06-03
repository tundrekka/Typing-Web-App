import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { typingLogicReducer } from '../reducers/typingLogicReducer';
import { uiReducer } from '../reducers/uiReducer';


const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;


const reducers = combineReducers({
   typingL: typingLogicReducer,
   ui: uiReducer
})

export const store = createStore(
   reducers,
   composeEnhancers(
      applyMiddleware( thunk )
   )
)
