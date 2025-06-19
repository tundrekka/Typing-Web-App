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
         <p>🚀 Ready to boost your typing skills? Pick your favorite text from the menu above and dive into the ultimate typing challenge!</p>
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
