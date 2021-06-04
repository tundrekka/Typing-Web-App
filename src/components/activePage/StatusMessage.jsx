import React from 'react'
import { useSelector } from 'react-redux'

export const StatusMessage = () => {

   const { active } = useSelector( state => state.ui )
   return (
      <div className="statusMessage">
         {
            active
            ? 'Typing'
            : 'Start or Continue'
         }
      </div>
   )
}
