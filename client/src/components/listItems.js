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
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MenuBookIcon from '@material-ui/icons/MenuBook';


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
    <div>
        <ListItemLink href='/' button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemLink>
        <ListItemLink href='/tasks' button>
            <ListItemIcon>
                <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
        </ListItemLink>
        <ListItemLink href='/mydocuments' button>
            <ListItemIcon>
                <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Documents" />
        </ListItemLink>
        <ListItemLink href='/team' button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Team" />
        </ListItemLink>
        <ListItemLink href='/policies' button>
            <ListItemIcon>
                <PolicyIcon />
            </ListItemIcon>
            <ListItemText primary="Policies" />
        </ListItemLink>
        <ListItemLink href='/calender' button>
            <ListItemIcon>
                <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Calender" />
        </ListItemLink>
        <ListItemLink href='/training' button>
            <ListItemIcon>
                <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Training" />
        </ListItemLink>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Hello</ListSubheader>
        <ListItemLink href='/login' button>
            <ListItemIcon>
                <LockOpenIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
        </ListItemLink>
    </div>
);