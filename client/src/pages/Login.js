import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Login = () => {
    const classes = useStyles();
    const { login, isLoggedIn } = useAuth();

    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirector
    const [redirectToSignup, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    return (
        <div>
            <Container maxWidth="sm">
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Login Page
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='email'>Email:</label>
                                <input
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    autoComplete='username'
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <br />
                                <label htmlFor='password'>Password:</label>
                                <input
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    autoComplete='password'
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                                <br />
                            </form>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Need an account?  <Button type="submit" size="small" onClick={() => toggleRedirect(true)}>Signup Here</Button>
                        </Typography>
                        <CardActions variant="body2" component="p">

                        </CardActions>
                    </CardContent>
                    <CardActions>
                        <form onSubmit={handleSubmit}>
                            <Button type="submit" size="small">Login</Button>
                        </form>
                    </CardActions>
                </Card>
            </Container>
            

        </div >
    );
};

export default Login;