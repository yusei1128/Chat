import React from 'react'

import Login from './pages/Login'
import Room from './pages/Room'
import SignUp from './pages/SignUp'

import  {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { AuthProvider} from './AuthService'
import LoggedInRoute from './LoggedInRoute'


const App = () => {
    return (
       <AuthProvider>
        <Router>
         <Switch>
           <Route exact path = '/Login' component = {Login} />
           <LoggedInRoute exact path = '/' component = {Room} />
           <Route exact path = '/SignUp' component = {SignUp} />
          </Switch>
        </Router>
       </AuthProvider> 
    )
}

export default App