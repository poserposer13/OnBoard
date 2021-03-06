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
import BgCircles from '../components/ParticleBg';
import TextField from '@material-ui/core/TextField';
import { ReactComponent as LoginLogo } from '../undraw/login.svg';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 120
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
    loginLogo: {
        height: 193,
        width: 176,
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

    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        if (event.keyDown === 13) {
            login(email, password).then((res) => {
                history.replace(from);
            });
        }
        login(email, password).then((res) => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    return (
        <div>
            <Container maxWidth="md">
                <BgCircles />
                <Card className={classes.root}>
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            <Box display="flex" justifyContent="center">
                                <Typography variant="h2">Welcome to OnBoard!</Typography>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <LoginLogo className={classes.loginLogo} />
                            </Box>
                            <Box display="flex" justifyContent="center">
                                <Typography style={{ marginBottom: 10 }} variant="h5">
                                    Login to get started
                                </Typography>
                            </Box>
                        </Typography>
                        <Box display="flex" justifyContent="center">
                            <Typography variant="h5" component="h2">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="email"></label>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="email"
                                        type="email"
                                        autoComplete="username"
                                        id="email"
                                        label="Email Address"
                                        value={email}
                                        autoFocus
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="password"></label>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        id="password"
                                        label="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <br />
                                    <CardActions>
                                        <Button
                                            style={{ marginLeft: '3.7rem' }}
                                            variant="contained"
                                            color="primary"
                                            size="medium"
                                            type="submit"
                                        >
                                            Login
                                        </Button>
                                    </CardActions>
                                </form>
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center">
                            <Typography
                                className={classes.pos}
                                color="textSecondary"
                                style={{ fontSize: '12px', marginTop: 20 }}
                            >
                                <a href='/admin'>Administrator Login</a>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
