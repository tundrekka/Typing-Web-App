import React from 'react'

export const TextContent = React.memo( () => {
   return (
      <div className="text-content">
         <p>Choose one demo-text from the above dropdown menu and click <b>Start Typing</b></p>
         <p>This web aplication is made with react. I'm not the best with UI, I was focused mainly in the functionality and UX of this app</p>
      </div>
   )
})
