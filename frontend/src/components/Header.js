import React from 'react'
import Link from '@material-ui/core/Link'

import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Authentication App
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
