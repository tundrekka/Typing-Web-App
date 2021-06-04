import { types } from '../types/types';


export const setTypingTextId = ( textId ) => ({
   type: types.typingLogicTypingTextId,
   payload: textId
})
export const setTypingText = ( text ) => ({
   type: types.typingLogicSetTypingText,
   payload: text
})
