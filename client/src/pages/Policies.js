import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import nda from '.././assets/nda.png';
import nonCompete from '.././assets/nonCompete.png';
import empHandbook from '.././assets/empHandbook.png';
import { ReactComponent as PolicyLogo } from '../undraw/policy.svg';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}


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
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    // backdrop
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

    // modal
    const [modalStyle] = React.useState(getModalStyle);
    const [openA, setOpenA] = React.useState(false);
    const handleOpenA = () => {
        setOpenA(true);
    };

    const [openB, setOpenB] = React.useState(false);
    const handleOpenB = () => {
        setOpenB(true);
    };

    const [openC, setOpenC] = React.useState(false);
    const handleOpenC = () => {
        setOpenC(true);
    };

    const handleCloseA = () => {
        setOpenA(false);
    };

    const handleCloseB = () => {
        setOpenB(false);
    };

    const handleCloseC = () => {
        setOpenC(false);
    };

    const [flag, setFlag] = React.useState(true);
    const changeButton = () => {
        setFlag(!flag);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Confirm policy review</h2>
            <p id="simple-modal-description">
                By clicking "confirm" you are verifying that you have read and understand the policy.
            </p>
            <Button color="primary" onClick={() => {
                changeButton();
                handleCloseA();
            }}>Confirm</Button>
            <Button color="secondary" onClick={handleCloseA}>Cancel</Button>
        </div>
    );

    const [flag2, setFlag2] = React.useState(true);
    const changeButton2 = () => {
        setFlag2(!flag2);
    };

    const body2 = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Confirm policy review</h2>
            <p id="simple-modal-description">
                By clicking "confirm" you are verifying that you have read and understand the policy.
            </p>
            <Button color="primary" onClick={() => {
                changeButton2();
                handleCloseB();
            }}>Confirm</Button>
            <Button color="secondary" onClick={handleCloseB}>Cancel</Button>
        </div>
    );

    const [flag3, setFlag3] = React.useState(true);
    const changeButton3 = () => {
        setFlag3(!flag3);
    };

    const body3 = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Confirm policy review</h2>
            <p id="simple-modal-description">
                By clicking "confirm" you are verifying that you have read and understand the policy.
            </p>
            <Button color="primary" onClick={() => {
                changeButton3();
                handleCloseC();
            }}>Confirm</Button>
            <Button color="secondary" onClick={handleCloseC}>Cancel</Button>
        </div>
    );

    return (
        <>
            <h2>
                Policies <PolicyLogo style={{ height: 153, width: 136 }} />
            </h2>
            <p style={{fontSize: 20, color: '#696969', lineHeight: '1.25rem', letterSpacing: '0.08rem' }}>
                Click on a policy image to review. Once completed, click the "acknowledge" button to verify that you have read and understand the policy.
            </p>
            <div className='row'>
                <div className='col' style={{ margin: '10px' }}>
                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="outlined" color="primary" onClick={handleToggle1} style={{ margin: '10px' }}>
                            <img src={nda} alt="non-disclosure-agreement" style={{ height: '400px', width: '320px' }} />
                        </Button>
                    </div>

                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        {flag ? (
                            <Button variant="contained" color='primary' onClick={handleOpenA}>Acknowledge</Button>
                        ) : (
                            <Button variant="contained" color='primary' disabled>Acknowledged</Button>
                        )}
                    </div>

                    <Modal
                        open={openA}
                        onClose={handleCloseA}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>
                </div>
                <div className='col' style={{ margin: '10px' }}>
                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="outlined" color="primary" onClick={handleToggle2} style={{ margin: '10px' }}>
                            <img src={nonCompete} alt="non-compete-agreement" style={{ height: '400px', width: '320px' }} />
                        </Button>
                    </div>

                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        {flag2 ? (
                            <Button variant="contained" color='primary' onClick={handleOpenB}>Acknowledge</Button>
                        ) : (
                            <Button variant="contained" color='primary' disabled>Acknowledged</Button>
                        )}
                    </div>

                    <Modal
                        open={openB}
                        onClose={handleCloseB}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body2}
                    </Modal>

                </div>
                <div className='col' style={{ margin: '10px' }}>
                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        <Button variant="outlined" color="primary" onClick={handleToggle3} style={{ margin: '10px' }}>
                            <img src={empHandbook} alt="employee-handbook-agreement" style={{ height: '400px', width: '320px' }} />
                        </Button>
                    </div>

                    <div className='row' style={{display: 'flex', justifyContent: 'center'}}>
                        {flag3 ? (
                            <Button variant="contained" color='primary' onClick={handleOpenC}>Acknowledge</Button>
                        ) : (
                            <Button variant="contained" color='primary' disabled>Acknowledged</Button>
                        )}
                    </div>

                    <Modal
                        open={openC}
                        onClose={handleCloseC}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body3}
                    </Modal>
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
        </>
    );
}

export default Policies;