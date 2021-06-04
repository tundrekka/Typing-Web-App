import { types } from '../types/types';

/*
 {
    typingText: 'ksdfksj',
    textarea: ''

 }
*/
const initialState = {
   typingTextId: '',
   typingText: '',
}

export const typingLogicReducer = ( state = initialState, action ) => {

   switch ( action.type ) {
      case types.typingLogicTypingTextId:
         return {
            ...state,
            typingTextId: action.payload
         }
      case types.typingLogicSetTypingText:
         return {
            ...state,
            typingText: action.payload
         }
         
      default:
         return state
   }
   
}
