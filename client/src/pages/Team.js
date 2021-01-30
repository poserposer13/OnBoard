import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Andrew from '../assets/andrew.jpg';
import Josh from '../assets/josh.jpg';
import Sean from '../assets/sean.jpg';
import Joseph from '../assets/joseph.jpg';
import Grid from '@material-ui/core/Grid';
import {ReactComponent as TeamLogo} from '../undraw/team.svg';
import {GoMail} from 'react-icons/go';

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
        justifyContent: 'center'
    }
}));


function Team() {
    const classes = useStyles();

    return (
        <div>
            <h2 >
                Team <TeamLogo style={{ height: 153, width: 136 }}/>
            </h2>
            <h2 className={classes.center}>
                Meet your team
                
            </h2>
            <Grid container justify="space-evenly" alignItems="center">
                <Grid item> 
                    <Avatar alt="Andrew" src={Andrew} className={classes.large} />
                    <p style={{ display: 'flex', justifyContent: 'center'}}>Software Engineer</p>
                    <GoMail/>
                </Grid>
                <Grid item>
                    <Avatar alt="Josh" src={Josh} className={classes.large} />
                    <p style={{ display: 'flex', justifyContent: 'center'}}>Software Engineer</p>
                    <GoMail/>
                </Grid>
                <Grid item>
                    <Avatar alt="Sean" src={Sean} className={classes.large} />
                    <p style={{ display: 'flex', justifyContent: 'center'}}>Software Engineer</p>
                    <GoMail/>
                </Grid>
                <Grid item>
                    <Avatar alt="Joseph" src={Joseph} className={classes.large} />
                    <p style={{ display: 'flex', justifyContent: 'center'}}>Software Engineer</p>
                    <GoMail/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Team;