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

export const setLastPathId = ( path ) => ({
   type: types.uiSetLastPath,
   payload: path
})

export const setLoadingTrue = () => ({
   type: types.uiSetLoadingTrue,
})
export const setLoadingFalse = () => ({
   type: types.uiSetLoadingFalse,
})

export const setErrorMessage = ( msg ) => ({
   type: types.uiErrorMsg,
   payload: msg
})

export const reloadRequest = ( state ) => ({
   type: types.uiReloadRequest,
   payload: state
})
