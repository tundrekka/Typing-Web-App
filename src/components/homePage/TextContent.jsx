import React, { useState } from 'react'
import { About } from './About'
import { UsageGuide } from './UsageGuide'
import { ArrowRightSharp } from '@material-ui/icons'

export const TextContent = React.memo( () => {

   const [ showAbout, setShowAbout ] = useState( false )

   const aboutStyles = {
      marginBottom: '1.2rem', 
      marginTop: '2.1rem',
      cursor: 'pointer',
      width: 'max-content',
      display: 'flex',
   }

   const handleShow = () => {
      setShowAbout( !showAbout )
   }
   return (
      <div className="text-content">
         <h2>Choose your demo-text and <b>Start Typing</b></h2>
         <h4 className='secondary-title-color-2' style={{ marginBottom: '.5rem', marginTop: '1.7rem' }}>Usage Guide</h4>
         <UsageGuide />
         <h4 className='secondary-title-color-2' onClick={ handleShow } style={ aboutStyles }>About the App <ArrowRightSharp /></h4>
         {
            showAbout 
            &&
            <About />
         }
         
      </div>
   )
})
