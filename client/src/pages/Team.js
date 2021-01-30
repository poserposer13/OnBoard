import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Andrew from '../assets/andrew.jpg';
import Josh from '../assets/josh.jpg';
import Sean from '../assets/sean.jpg';
import Joseph from '../assets/joseph.jpg';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as TeamLogo } from '../undraw/team.svg';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';
// import Mailto from 'react-mailto';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

function Team() {
    const classes = useStyles();

    return (
        <div>
            <h2>
        Team <TeamLogo style={{ height: 153, width: 136 }} />
            </h2>
            <br/>
            <br/>
            <br/>
            <Grid container justify="space-evenly" alignItems="center">
                <Grid item>
                    <Avatar alt="Andrew" src={Andrew} className={classes.large} />
                    <h6 style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            Software Engineer
                    </h6>
                    <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="mailto:andrewmosesdrive@gmail.com" target="_top" style={{color:'black'}}><EmailIcon style={{ margin: '0.5rem' }}/></a>
                        <Link href="https://github.com/andrewmosesdrive" style={{ margin: '0.5rem' }} color="inherit">
                            <GitHubIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/andrewjmoses/" style={{ margin: '0.5rem' }} color="inherit">
                            <LinkedInIcon/>
                        </Link>
                    </div>
                </Grid>
                <Grid item>
                    <Avatar alt="Josh" src={Josh} className={classes.large} />
                    <h6 style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            Software Engineer
                    </h6>
                    <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="mailto:jdp237@nau.edu" target="_top" style={{color:'black'}}><EmailIcon style={{ margin: '0.5rem' }}/></a>
                        <Link href="https://github.com/jdilla1212" style={{ margin: '0.5rem' }} color="inherit">
                            <GitHubIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/joshua-padilla-4052371ab/" style={{ margin: '0.5rem' }} color="inherit">
                            <LinkedInIcon/>
                        </Link>
                    </div>
                </Grid>
                <Grid item>
                    <Avatar alt="Sean" src={Sean} className={classes.large} />
                    <h6 style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            Software Engineer
                    </h6>
                    <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="mailto:poserposer@me.com" target="_top" style={{color:'black'}}><EmailIcon style={{ margin: '0.5rem' }}/></a>
                        <Link href="https://github.com/poserposer13" style={{ margin: '0.5rem' }} color="inherit">
                            <GitHubIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sean-kempf-1a39ab1b0/" style={{ margin: '0.5rem' }} color="inherit">
                            <LinkedInIcon/>
                        </Link>
                    </div>
                </Grid>
                <Grid item>
                    <Avatar alt="Joseph" src={Joseph} className={classes.large} />
                    <h6 style={{ display: 'flex', justifyContent: 'center', margin: '1rem' }}>
            Software Engineer
                    </h6>
                    <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="mailto:joey@joeyjepson.com" target="_top" style={{color:'black'}}><EmailIcon style={{ margin: '0.5rem' }}/></a>
                        <Link href="https://github.com/alligatormonday" style={{ margin: '0.5rem' }} color="inherit">
                            <GitHubIcon/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/josephjepson/" style={{ margin: '0.5rem' }} color="inherit">
                            <LinkedInIcon/>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Team;
