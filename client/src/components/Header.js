import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import useAuth from '../hooks/auth';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as OnboardLogo } from '../undraw/onboard-logo.svg';


function Header() {
    const drawerWidth = 240;
    const useStyles = makeStyles((theme) => ({
        toolbar: {
            paddingRight: 24,
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
            color: 'black'
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
            color: 'black'
        },
    }));
    const { getProfile, isLoggedIn, logout } = useAuth();
    const classes = useStyles();
    const [open] = React.useState(false);

    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <OnboardLogo style={{ height: 133, width: 116 }} />
                    <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                        {isLoggedIn() ?
                            <>
                                <h1>Hello, {getProfile().firstName} {getProfile().lastName}!</h1>
                            </>
                            :
                            <>
                                <h1>Hello, Please Log-In</h1>
                            </>
                        }
                    </Typography>
                    <Typography>
                        {isLoggedIn() ?
                            <>
                                <Button startIcon={<LockIcon />} variant='outlined' size='large' onClick={() => logout()} to='/login'>Logout</Button>
                            </>
                            :
                            <>
                            </>
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;