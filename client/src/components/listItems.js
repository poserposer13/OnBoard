import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import PolicyIcon from '@material-ui/icons/Policy';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Documents" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Team" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PolicyIcon />
            </ListItemIcon>
            <ListItemText primary="Policies" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Calender" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);