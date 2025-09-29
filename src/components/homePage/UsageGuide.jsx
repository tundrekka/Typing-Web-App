import React from 'react'
import { KeyboardReturn } from '@material-ui/icons'

export const UsageGuide = React.memo( () => {

   const spanStyle = {
      position: 'relative',
      color: 'yellow'
   }
   const iconStyle = {
      position: 'absolute',
      left: '5px'
   }

   return (
      <ul className='secondary-text' style={{ marginTop: 0 }}>
         <li>
            If you want to choose another text, click "HOME" and select the one you prefer
         </li>
         <li>
            Line-breaks (Enter key) are represented with this icon <span style={spanStyle}> <KeyboardReturn style={iconStyle} /></span>
         </li>
         {/* <li>
         If you are on mobile and hide the keyboard and want it to appear again, touch the text. Or touch the button stop/continue
         </li> */}
      </ul>
   )
})
