import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'
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
      <Provider store={store} >
         <ThemeProvider theme={theme}>
            <AppRouter />
         </ThemeProvider>
      </Provider>
   )
}
