import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react"
import { AuthProvider } from "./views/components/AuthProvider"
import Navbar from "./views/components/Navbar"
import Home from "./views/home/Home"
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";

export const App = () => (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/signin' exact component={SignIn}/>
            <Route path='/signup' exact component={SignUp}/>
          </Switch>
        </AuthProvider>
      </Router>
    </ChakraProvider>
)
