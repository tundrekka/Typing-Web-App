import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { AppRouter } from './routers/AppRouter'
import './styles/styles.scss'

export const TypingApp = () => {

   const theme = createMuiTheme({
      palette: {
         primary: {
            main: '#220A32'
         }
      }
   })
   return (
      <ThemeProvider theme={theme}>
         <AppRouter />
      </ThemeProvider>
   )
}
