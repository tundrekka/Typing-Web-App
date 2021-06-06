import { Button } from '@material-ui/core'
import { Cached } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reloadRequest } from '../../actions/ui'

export const ReloadButton = React.memo( () => {
   const dispatch = useDispatch()
   const { loading } = useSelector( state => state.ui )
   const handleReload = () => {
      dispatch( reloadRequest( true ) )
   }

   return (
      <Button disabled={ loading } onClick={handleReload} type="button"
         startIcon={<Cached />} color="secondary" variant="contained"
      >Retry</Button>
   )
})
