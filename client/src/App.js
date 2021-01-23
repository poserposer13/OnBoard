// import Navbar from './components/Navbar';
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
import Calendar from './pages/Calendar';
import Training from './pages/Training';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Copyright from './components/Copyright';
import { mainListItems, secondaryListItems } from './components/listItems';


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
    
    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),

        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
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
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const { getProfile, isLoggedIn } = useAuth();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {isLoggedIn() ?
                            <>
                                <li>Hello, {getProfile().email} </li>
                                <li><Link onClick={() => logout()} to='/login'>Logout</Link></li>
                            </>
                            :
                            <>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        }
                    </Typography>
                    <IconButton color="inherit" href='/login'>
                        <LockOpenIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{['/login', '/home'].includes(window.location.pathname) ? secondaryListItems : mainListItems}</List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Box pt={4}>
                        <Router>
                            <Switch>
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route path='/login'>
                                    <Login />
                                </Route>
                                <PrivateRoute exact path='/tasks'>
                                    <Tasks />
                                </PrivateRoute>
                                <PrivateRoute exact path='/mydocuments'>
                                    <MyDocuments />
                                </PrivateRoute>
                                <PrivateRoute exact path='/policies'>
                                    <Policies />
                                </PrivateRoute>
                                <PrivateRoute exact path='/team'>
                                    <Team />
                                </PrivateRoute>
                                <PrivateRoute exact path='/calendar'>
                                    <Calendar />
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
