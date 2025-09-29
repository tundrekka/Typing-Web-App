import { types } from '../types/types';

/* 
   {
      active: false
      finished: false
   }
*/
const initialState = {
   active: true,
   finished: false,
   lastPath: null,
   loading: false,
   errorMsg: false,
   reloadRequest: false,
} 

export const uiReducer = ( state = initialState, action ) => {

   switch ( action.type ) {
      case types.uiSetActiveTrue:
         return {
            ...state,
            active: true
         }
      case types.uiSetActiveFalse:
         return {
            ...state,
            active: false
         }

      case types.uiSetFinished:
         return {
            ...state,
            finished: true,
            active: false
         }
      case types.uiRestart:
         return {
            ...state,
            finished: false,
            active: true
         }
      case types.uiClean:
         return {
            ...state,
            finished: false,
            active: false
         }
      case types.uiSetLastPath:
         return {
            ...state,
            lastPath: action.payload
         }
      case types.uiSetLoadingTrue:
         return {
            ...state,
            loading: true
         }
      case types.uiSetLoadingFalse:
         return {
            ...state,
            loading: false
         }

      case types.uiErrorMsg:
         return {
            ...state,
            errorMsg: action.payload
         }

      case types.uiReloadRequest:
         return {
            ...state,
            reloadRequest: action.payload
         }
   
      default:
         return state
   }
}
