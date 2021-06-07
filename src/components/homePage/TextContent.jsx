import React, { useState } from 'react'
import { About } from './About'
import { UsageGuide } from './UsageGuide'

export const TextContent = React.memo( () => {

   const [ showAbout, setShowAbout ] = useState( false )

   const aboutStyles = {
      marginBottom: '1.2rem', 
      marginTop: '2.1rem',
      cursor: 'pointer',
      width: 'max-content' 
   }

   const handleShow = () => {
      setShowAbout( !showAbout )
   }
   return (
      <div className="text-content">
         <p>Choose one demo-text from the above dropdown menu and click <b>Start Typing</b></p>
         <h4 style={{ marginBottom: '.5rem', marginTop: '1.7rem' }}>Usage Guide</h4>
         <UsageGuide />
         <h4 onClick={ handleShow } style={ aboutStyles }>About the App</h4>
         {
            showAbout 
            &&
            <About />
         }
         
      </div>
   )
})
