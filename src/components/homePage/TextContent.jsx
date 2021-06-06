import React from 'react'
import { UsageGuide } from './UsageGuide'

export const TextContent = React.memo( () => {
   return (
      <div className="text-content">
         <p>Choose one demo-text from the above dropdown menu and click <b>Start Typing</b></p>
         <p style={{ marginBottom: '.5rem', marginTop: '1.7rem' }}>Usage Guide</p>
         <UsageGuide />
         <p style={{ marginTop: '2rem' }}>This web aplication is made with react. I'm not the best with UI, I was focused mainly in the functionality and UX of this app</p>
      </div>
   )
})
