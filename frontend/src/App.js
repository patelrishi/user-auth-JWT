import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from './components/Header'
import { Provider } from 'react-redux'
import store from './store/store'
//screens
import RegisterScreen from './screens/RegisterScreen'
import loginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container maxWidth='lg'>
        <Router>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/login' component={loginScreen} />
          <Route path='/register' component={RegisterScreen} />
        </Router>
      </Container>
    </Provider>
  )
}

export default App
