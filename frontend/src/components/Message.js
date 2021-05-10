import React from 'react'
import { Alert } from '@material-ui/lab'

const Message = ({ variant, children }) => {
  return (
    <Alert severity='error' variant={variant}>
      {children}
    </Alert>
  )
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
