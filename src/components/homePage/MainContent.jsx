import React from 'react'
import { useSelector } from 'react-redux'
import { ReloadButton } from '../utils/ReloadButton'
import { Dropdown } from './Dropdown'
import { StartButton } from './StartButton'
import { TextContent } from './TextContent'
import { Title } from './Title'

export const MainContent = () => {
   const { errorMsg } = useSelector( state => state.ui )
   const { typingTextsDropdown } = useSelector( state => state.texts )

   return (
      <div className="mainContent-container">
         <Title />

         {/* Error message*/}
         {
            ( typingTextsDropdown.length < 1 && errorMsg )
            &&
            <div style={
               { textAlign: 'center', background: '#0dcaf055', 
                  padding: '.75rem', marginBottom: '.7rem', borderRadius: '.5rem' }
               } >
               <p>{errorMsg}</p>
               <ReloadButton />
            </div>
         }
         
         <Dropdown />
         {window.innerWidth < 600 && (
            <div style={{marginTop: "2rem", color: "yellow"}}>Only available for PC's at this moment</div>
         )}
         <TextContent />
         <StartButton />
      </div>
   )
}
