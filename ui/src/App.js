import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import { cyan, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: cyan,
		secondary: indigo
	},
	typography: {
		useNextVariants: true
	}
})

class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<Router>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/signup" component={Signup} />
							</Switch>
						</div>
					</Router>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
