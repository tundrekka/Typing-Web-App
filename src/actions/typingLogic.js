import { types } from '../types/types';

export const setTextareaValue = ( value ) => ({
   type: types.typingLogicTextarea,
   payload: value
})


// actions para el iterador
export const plusOneIterator = () => ({
   type: types.typingLogicPlusIterator
})

export const resetIterator = () => ({
   type: types.typingLogicResetIterator
})

// FIN actions para el iterador
