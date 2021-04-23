import './index.css'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom'

import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { CssBaseline } from '@material-ui/core'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const App = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
            </Helmet>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Users />
                        </Route>

                        <Route path="/places/new" exact>
                            <NewPlace />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </ThemeProvider>
        </HelmetProvider>
    )
}

export default App
