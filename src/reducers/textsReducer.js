import { types } from '../types/types';

/*
 {
    typingText: 'ksdfksj',
    textarea: ''

 }
*/
const initialState = {
   typingTextId: '',
   typingTextsDropdown: '',
   textsList: [],
   text: ''
}

export const textsReducer = ( state = initialState, action ) => {

   switch ( action.type ) {
      case types.textSetTypingTextId:
         return {
            ...state,
            typingTextId: action.payload
         }
      case types.textDropdown:
         return {
            ...state,
            typingTextsDropdown: action.payload
         }
      case types.textSetFinalText:
         return {
            ...state,
            text: action.payload
         }
      case types.textSetTextsList:
         return {
            ...state,
            textsList: [ action.payload, ...state.textsList ]
         }
         
      default:
         return state
   }
   
}
