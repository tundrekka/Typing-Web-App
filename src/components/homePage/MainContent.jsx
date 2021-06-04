import React from 'react'
import { loadNotes } from '../../helpers/getTextFirestore'
import { Dropdown } from './Dropdown'
import { StartButton } from './StartButton'
import { TextContent } from './TextContent'
import { Title } from './Title'

export const MainContent = () => {

   loadNotes().then( resp => console.log( resp ) )

   return (
      <div className="main-container">
         <Title />
         <Dropdown />
         <TextContent />
         <StartButton />
      </div>
   )
}
