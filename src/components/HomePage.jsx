import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingTextsId } from '../actions/texts'
import { MainContent } from './homePage/MainContent'
import { Sidebar } from './ui/sidebar/Sidebar'

export const HomePage = () => {

   const dispatch = useDispatch()

   const { reloadRequest } = useSelector( state => state.ui )
   const { typingTextsDropdown } = useSelector( state => state.texts )

   useEffect( () => {
      if( typingTextsDropdown === '' || typingTextsDropdown.length < 1 ) {
         dispatch( startLoadingTextsId() )
      }

   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [ dispatch, reloadRequest ] )


   return (
      <div className="home-container">
         <MainContent />
         <Sidebar />
      </div>
   )
}
