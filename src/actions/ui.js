import { types } from '../types/types';


export const setActive = () => ({
   type: types.uiSetActiveTrue,
})

export const setFalse = () => ({
   type: types.uiSetActiveFalse
})

export const setFinished = () => ({
   type: types.uiSetFinished,

})

export const restart = () => ({
   type: types.uiRestart
})

export const clean = () => ({
   type: types.uiClean
})
