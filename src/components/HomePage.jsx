import React from 'react'
import { MainContent } from './homePage/MainContent'
import { Sidebar } from './ui/sidebar/Sidebar'

export const HomePage = () => {
   return (
      <div className="twa-container">
         <MainContent />
         <Sidebar />
      </div>
   )
}
