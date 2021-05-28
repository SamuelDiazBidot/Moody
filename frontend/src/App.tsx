import * as React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react"
import { AuthProvider } from "./views/components/AuthProvider"
import Navbar from "./views/components/Navbar"
import Home from "./views/home/Home"

export const App = () => (
    <Router>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </AuthProvider>
        </ChakraProvider>
    </Router>
)
