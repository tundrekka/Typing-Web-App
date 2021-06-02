import { types } from '../types/types';

/*
 {
    typingText: 'ksdfksj',
    textarea: ''

 }
*/
const initialState = {
   typingText: '',
   textarea: '',
   iterator: 0
}

export const typingLogicReducer = ( state = initialState, action ) => {

   switch ( action.type ) {
      case types.typingLogicTextarea:
         
         return {
            ...state,
            textarea: action.payload
         }

      case types.typingLogicTypingText:
         
         return {

         }

      case types.typingLogicPlusIterator:
         return {
            ...state,
            iterator: state.iterator + 1
         }
         
      case types.typingLogicResetIterator:
         return {
            ...state,
            iterator: 0
         }
   
      default:
         return state
   }
   
}
