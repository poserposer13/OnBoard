import Navbar from './components/Navbar';
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
        catch (err) { console.error(err);}
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return (
        <Router>
            <Navbar />
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
            </Switch>
        </Router>
    );
}

// Yanked straight from the react-router docs for redirects
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


export default App;
