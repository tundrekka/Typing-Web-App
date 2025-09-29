import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setFinalText, startLoadingTextById } from '../actions/texts'
import { reloadRequest, setErrorMessage, setActive } from '../actions/ui'

import { getTextFromStore } from '../helpers/getTextFromStore'
import { ButtonsContainer } from './activePage/ButtonsContainer'
import { TextAndStats } from './activePage/TextAndStats'

export const ActivePage = ({ history }) => {

   const dispatch = useDispatch()
   const { textsList } = useSelector( state => state.texts )
   const { reloadRequest: reload } = useSelector( state => state.ui )

   const { demoTextId } = useParams()

   useEffect( () => {

      // If the text exists in the store, then take it from there
      if( textsList.length > 0 ) {
         const text = getTextFromStore( textsList, demoTextId )
         if( text ) {
            dispatch( setFinalText( text ) )
            dispatch( reloadRequest( false ) )
            dispatch( setErrorMessage( false ) )
            dispatch( setActive() )

            return
         }
      }
      // if it does not exist in the store, look for it in the database
      dispatch( startLoadingTextById( demoTextId, history ) )
            
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ demoTextId, dispatch, reload ] )
   

   return (
      <div className="activePage-container">
         <TextAndStats />
         <ButtonsContainer />
      </div>
   )
}
