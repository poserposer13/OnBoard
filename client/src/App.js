import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import useAuth from './hooks/auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import MyDocuments from './pages/MyDocuments';
import Policies from './pages/Policies';
import Team from './pages/Team';
import Training from './pages/Training';
import React from 'react';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from './components/Copyright';


function App() {
    // Pull auth token from storage, in case you refresh the page
    const { getToken, logout } = useAuth();
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    // A nice trick that if we EVER get back a 401, will pop the token off
    axios.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, error => {
        try {
            const { message } = error.toJSON();
            // If we had time, we could write our own custom method to the auth middleware
            // However, we are just gonna use their message.
            if (message === 'Request failed with status code 401') {
                logout();
            }
        }
        catch (err) { console.error(err); }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
    }));
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <SideBar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Box pt={4}>
                        <Router>
                            <Switch>
                                <Route path='/login'>
                                    <Login />
                                </Route>
                                <PrivateRoute exact path='/'>
                                    <Home />
                                </PrivateRoute>
                                <PrivateRoute exact path='/tasks'>
                                    <Tasks />
                                </PrivateRoute>
                                <PrivateRoute exact path='/mydocuments'>
                                    <MyDocuments token={getToken()} />
                                </PrivateRoute>
                                <PrivateRoute exact path='/policies'>
                                    <Policies />
                                </PrivateRoute>
                                <PrivateRoute exact path='/team'>
                                    <Team />
                                </PrivateRoute>
                                <PrivateRoute exact path='/training'>
                                    <Training />
                                </PrivateRoute>
                            </Switch>
                        </Router>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
    function PrivateRoute({ children, ...rest }) {
        const { isLoggedIn } = useAuth();
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    isLoggedIn() ? (
                        children
                    ) :
                        (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: location }
                                }}
                            />
                        )
                }
            />
        );
    }
}

export default App;
