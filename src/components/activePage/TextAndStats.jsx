import React from 'react'
import { StatsContainer } from './StatsContainer'
import { TypingText } from './TypingText'

export const TextAndStats = () => {
   return (
      <div className="textAndStats-container">
         <StatsContainer />
         <TypingText />
      </div>
   )
}
