import { loadTextById } from '../helpers/getTextById'
import { loadTextsId } from '../helpers/getTextFirestore'
import { types } from '../types/types'
import { reloadRequest, setErrorMessage, setLoadingFalse, setLoadingTrue } from './ui'

export const startLoadingTextsId = () => {
   return async( dispatch ) => {

      dispatch( setLoadingTrue() )

         const texts = await loadTextsId()

         if( texts.length < 1 ) {
            dispatch( setErrorMessage( 'Check your connection and try again' ) )
            
         } else dispatch( setErrorMessage( false ) )
         dispatch( reloadRequest( false ) )
         dispatch( setLoadingFalse() )
         dispatch( setDropdown( texts ) )

   }
}

export const startLoadingTextById = ( textId, history ) => {
   return async( dispatch ) => {
      dispatch( setLoadingTrue() )
      try {
         const { content, id, errType } = await loadTextById( textId )
         dispatch( setLoadingFalse() )
         dispatch( reloadRequest( false ) )

         if( errType && errType === 'offline' ) {
            dispatch( setErrorMessage( 'Check your connection and try again' ) )
            return
         } else if( errType && errType === 'wrongURL' ) {
            history.replace( '/' )
            return
         }
         dispatch( setErrorMessage( false ) )
         dispatch( setFinalText( content ) )
         dispatch( setTextslist({ id, content }) )
         
      } catch ( error ) {
         dispatch( setLoadingFalse() )
      }
   }
}

// syncronous actions

export const setDropdown = ( texts ) => ({
   type: types.textDropdown,
   payload: texts
})

export const setFinalText = ( text ) => ({
   type: types.textSetFinalText,
   payload: text
})

export const setTextslist = ( text ) => ({
   type: types.textSetTextsList,
   payload: text
})

export const setTypingTextId = ( textId ) => ({
   type: types.textSetTypingTextId,
   payload: textId
})
