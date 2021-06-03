import { types } from '../types/types';

/* 
   {
      active: false
      finished: false
   }
*/
const initialState = {
   active: false,
   finished: false
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
   
      default:
         return state
   }
}
