import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChangeCompletion from './ChangeCompletion';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
    footer: {
        position: 'fixed',
        bottom: 20,
        left: 'calc(50% + 100px)',
        transform: 'translateX(-50%)'
    }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab icon={<FormatListNumberedOutlinedIcon />} label="In Progress" onClick={() => props.setSelected('In-Progress')} {...a11yProps(0)} />
                    <Tab icon={<CheckCircleRoundedIcon />} label="Completed" onClick={() => props.setSelected('Completed')} {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ol> {props.tasks.filter(task => !task.isComplete).map(task => {
                        return (
                            <li key={task._id} onClick={handleClick}>
                                <strong>{task.title}</strong> {task.body} <ChangeCompletion onChange={props.toggleTask} id={task._id} isChecked={task.isComplete} />
                                <sub>Assigned By: {task.user.firstName} {task.user.lastName}</sub>
                            </li>
                        );
                    })} </ol>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ol>{props.tasks.filter(task => task.isComplete).map(task => {
                        return (
                            <li key={task._id}>
                                <strong>{task.title}</strong> {task.body} <ChangeCompletion onChange={props.toggleTask} id={task._id} isChecked={task.isComplete} />
                                <sub>Assigned By: {task.user.firstName} {task.user.lastName}</sub>
                            </li>
                        );
                    })} </ol>
                </TabPanel>
            </SwipeableViews>
            <Snackbar className={classes.footer} open={open} autoHideDuration={1500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Nice work!
                </Alert>
            </Snackbar>
        </div>
    );
}
