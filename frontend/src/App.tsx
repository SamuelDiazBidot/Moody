import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, Container, theme } from "@chakra-ui/react"
import { AuthProvider } from "./views/components/AuthProvider"
import Navbar from "./views/components/Navbar"
import Home from "./views/home/Home"

export const App = () => (
    <ChakraProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </AuthProvider>
      </Router>
    </ChakraProvider>
)
