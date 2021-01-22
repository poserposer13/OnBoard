// // import { Link } from 'react-router-dom';
// // import useAuth from '../hooks/auth';
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
// }));

// export default function ButtonAppBar() {
//     const classes = useStyles();

//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" className={classes.title}>
//             News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }

// const Navbar = () => {
//     const { isLoggedIn, logout, getProfile } = useAuth();
//     return (
//         <div>
//             <h3>Navbar</h3>
//             <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to='/tasks'>Tasks</Link></li>
//                 <li><Link to='/mydocuments'>My Documents</Link></li>
//                 <li><Link to='/policies'>Policies</Link></li>
//                 <li><Link to='/team'>Team</Link></li>
//                 <li><Link to='/calendar'>Calendar</Link></li>
//                 {isLoggedIn() ?
//                     <>
//                         <li>Hello, {getProfile().email}</li>
//                         <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
//                     </>
//                     :
//                     <>
//                         <li><Link to="/login">Login</Link></li>
//                     </>
//                 }
                
//             </ul>
//         </div>
//     );
// };

// export default Navbar;