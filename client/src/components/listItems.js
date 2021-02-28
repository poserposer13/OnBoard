import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import DashboardIcon from '@material-ui/icons/Dashboard';
import ListIcon from '@material-ui/icons/List';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import PolicyIcon from '@material-ui/icons/Policy';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Copyright from './Copyright';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
    <>
        <div>
            {/* <ListItemLink href='/' button>
                <ListItemIcon>
                    <DashboardIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemLink>  */}
            <ListItemLink style={{color: 'white'}} href='/tasks' button>
                <ListItemIcon>
                    <ListIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Tasks" />
            </ListItemLink>
            <ListItemLink style={{color: 'white'}} href='/mydocuments' button>
                <ListItemIcon>
                    <DescriptionIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Documents" />
            </ListItemLink>
            <ListItemLink style={{color: 'white'}} href='/team' button>
                <ListItemIcon>
                    <PeopleIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Team" />
            </ListItemLink>
            <ListItemLink style={{color: 'white'}} href='/policies' button>
                <ListItemIcon>
                    <PolicyIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Policies" />
            </ListItemLink>
            <ListItemLink style={{color: 'white'}} href='/training' button>
                <ListItemIcon>
                    <MenuBookIcon style={{color: '#f2f4ff' }}/>
                </ListItemIcon>
                <ListItemText primary="Training" />
            </ListItemLink>
            <Copyright style={{color: '#f2f4ff' }}/>
        </div>

    </>
);

export const secondaryListItems = (
    <div>
        <ListItemLink href='/admin' button>
            <ListItemIcon>
                <LockOpenIcon style={{color: '#f2f4ff' }} />
            </ListItemIcon>
            <ListItemText style={{color: '#f2f4ff' }} primary="Admin?" />
        </ListItemLink>
    </div>
);