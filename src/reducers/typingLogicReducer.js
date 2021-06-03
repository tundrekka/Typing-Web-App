import { types } from '../types/types';

/*
 {
    typingText: 'ksdfksj',
    textarea: ''

 }
*/
const initialState = {
   typingText: '',
}

export const typingLogicReducer = ( state = initialState, action ) => {

   switch ( action.type ) {
      case types.typingLogicTypingText:
         return {
            ...state,
            typingText: action.payload
         }
         
      default:
         return state
   }
   
}
