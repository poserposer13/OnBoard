import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import nda from '.././assets/sampleDocs/nda.png';

function Policies() {

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div>
            <h2>
                Policies
            </h2>
            <p>
                After reviewing a policy, click the associated "acknowledge" button to accept, and confirm when prompted.
            </p>
            <div className="row">
                <div className="col">
                    <Button variant="outlined" color="primary" onClick={handleToggle}>
                        <img src={nda} alt="non-disclosure-agreement" style={{ height: '400px', width: '320px' }} />
                    </Button>
                </div>
            </div>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <img src={nda} alt="non-disclosure-agreement" style={{ height: '800px', width: '640px' }} />
            </Backdrop>
        </div>
    );
}

export default Policies;