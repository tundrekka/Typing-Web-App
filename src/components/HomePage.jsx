import React from 'react'
import { MainContent } from './home/MainContent'
import { Sidebar } from './sidebar/Sidebar'

export const HomePage = () => {
   return (
      <div className="twa-container">
         <MainContent />
         <Sidebar />
      </div>
   )
}
