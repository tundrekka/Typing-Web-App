import React from 'react'
import { Dropdown } from './Dropdown'
import { StartButton } from './StartButton'
import { TextContent } from './TextContent'
import { Title } from './Title'

export const MainContent = () => {
   return (
      <div className="main-container">
         <Title />
         <Dropdown />
         <TextContent />
         <StartButton />
      </div>
   )
}
