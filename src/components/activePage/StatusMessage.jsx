import React from 'react'
import { useSelector } from 'react-redux'

export const StatusMessage = () => {

   const { active } = useSelector( state => state.ui )
   return (
      <div className="statusMessage">
         
         <p>
         {
            active
            ? 'Typing'
            : 'Start or Continue'
         }
         </p>

         {/* This input is thinked for mobile support */}
         <input
          type="text" name="hidden" id="hidden"
          autoComplete='off'
          style={{
            position: 'absolute', 
            right: '15px', 
            top: '50px',
            background: 'rgba(9, 1, 18, 0.902)',
            outline: 'none',
            color: 'rgb(9, 1, 18)',
            border: 'none',
            zIndex: '-1',
            opacity: '.001'
         }}
          />
      </div>
   )
}
