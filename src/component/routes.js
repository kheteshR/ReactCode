import React, { Component } from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux';
import RegistrationPage from './SignUp';
import LoginPageComponent from './LoginPage';
import ForgotPassword from './forgotPassword';


class Routes extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
               <Stack key="root">
                  <Scene key="login" component={LoginPageComponent} title="Login" initial/>
                  <Scene key="signup" component={RegistrationPage} title="Register" />
                  <Scene key="forgot_password" component={ForgotPassword} title="Forgot Password" />
                </Stack>
            </Router>
         );
    }
}
 
export default Routes;