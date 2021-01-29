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
        marginTop: 150
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
    }
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

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
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
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            
                        </Typography>
                        <Box display='flex' justifyContent='center'>
                            <Typography variant="h5" component="h2">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor='email'>Email: </label>
                                    <input
                                        style={{ marginLeft: 10, marginBottom: 10 }}
                                        name='email'
                                        placeholder='Enter your email'
                                        type='email'
                                        autoComplete='username'
                                        value={email}
                                        onChange={event => setEmail(event.target.value)}
                                    />
                                    <br />
                                    <label htmlFor='password'>Password: </label>
                                    <input
                                        style={{ marginLeft: 10 }}
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
                        </Box>
                        <Box display='flex' justifyContent='center'>
                            <Typography className={classes.pos} color="textSecondary">
                                Need an account? Speak with your administrator!
                            </Typography>
                        </Box>
                    </CardContent>
                    <Box display='flex' justifyContent='center'>
                        <CardActions>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='email'></label>
                                <TextField
                                    style={{margin: 'auto', padding: '0.5rem'}}
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                    autoComplete='username'
                                    id='outlined-text-area'
                                    label='Email'
                                    multiline
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={event => setEmail(event.target.value)}
                                />
                                <br />
                                <label htmlFor='password'></label>
                                <TextField
                                    style={{margin: 'auto', padding: '0.5rem'}}
                                    name='password'
                                    placeholder='Password'
                                    type='password'
                                    autoComplete='password'
                                    id='outlined-basic'
                                    label='Password'
                                    multiline
                                    variant="outlined"
                                    fullWidth
                                    value={password}
                                    onChange={event => setPassword(event.target.value)}
                                />
                                <br />
                            </form>
                        </Typography>
                        </Box>
                        <Typography className={classes.pos} color="textSecondary" style={{fontSize: '12px'}}>
                            Need an account? Speak with your administrator!
                        </Typography>
                        <CardActions variant="body2" component="p">
                        </CardActions>
                    </CardContent>
                    <CardActions >
                        <form onSubmit={handleSubmit} style={{margin: 'auto', marginTop: '-2rem', marginBottom: '1rem'}}>
                            <Button variant='contained' color='primary' size='medium' type="submit" >Login</Button>
                        </form>
                    </CardActions>
                </Card>
            </Container>


        </div >

    );
};

export default Login;