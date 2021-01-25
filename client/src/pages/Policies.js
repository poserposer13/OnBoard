import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import nda from '.././assets/sampleDocs/nda.png';
import nonCompete from '.././assets/sampleDocs/nonCompete.png';
import empHandbook from '.././assets/sampleDocs/empHandbook.png';

function Policies() {

    const useStyles = makeStyles((theme) => ({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));

    const classes = useStyles();
    // 1
    const [open1, setOpen1] = React.useState(false);
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleToggle1 = () => {
        setOpen1(!open1);
    };
    // 2
    const [open2, setOpen2] = React.useState(false);
    const handleClose2 = () => {
        setOpen2(false);
    };
    const handleToggle2 = () => {
        setOpen2(!open2);
    };
    // 3
    const [open3, setOpen3] = React.useState(false);
    const handleClose3 = () => {
        setOpen3(false);
    };
    const handleToggle3 = () => {
        setOpen3(!open3);
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
                    <Button variant="outlined" color="primary" onClick={handleToggle1}>
                        <img src={nda} alt="non-disclosure-agreement" style={{ height: '400px', width: '320px' }} />
                    </Button>

                    <Button variant="outlined" color="secondary" onClick={handleClose1}>Acknowledge</Button>
                </div>
                <div className="col">
                    <Button variant="outlined" color="primary" onClick={handleToggle2}>
                        <img src={nonCompete} alt="non-compete-agreement" style={{ height: '400px', width: '320px' }} />
                    </Button>

                    <Button variant="outlined" color="secondary" onClick={handleClose2}>Acknowledge</Button>

                </div>
                <div className="col">
                    <Button variant="outlined" color="primary" onClick={handleToggle3}>
                        <img src={empHandbook} alt="employee-handbook-agreement" style={{ height: '400px', width: '320px' }} />
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleClose3}>Acknowledge</Button>
                </div>
            </div>
            <Backdrop className={classes.backdrop} open={open1} onClick={handleClose1}>
                <div className="row">
                    <img src={nda} alt="non-disclosure-agreement" style={{ height: '800px', width: '640px' }} />
                </div>

            </Backdrop>
            <Backdrop className={classes.backdrop} open={open2} onClick={handleClose2}>
                <img src={nonCompete} alt="non-disclosure-agreement" style={{ height: '800px', width: '640px' }} />
            </Backdrop>
            <Backdrop className={classes.backdrop} open={open3} onClick={handleClose3}>
                <img src={empHandbook} alt="non-disclosure-agreement" style={{ height: '800px', width: '640px' }} />

            </Backdrop>
        </div>
    );
}

export default Policies;