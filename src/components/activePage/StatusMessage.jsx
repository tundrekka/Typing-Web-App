import React from 'react'
import { useSelector } from 'react-redux'

export const StatusMessage = () => {

   const { active } = useSelector( state => state.ui )
   return (
      <div>
         {
            active
            ? 'tamo activo mamawebo, tas escribiendo'
            : 'empieza wn, no seas cagao'
         }
      </div>
   )
}
