import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useRecoilState} from 'recoil'
import { utilStates } from '../../state/Wallet';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};


export default function TransectionPendingModal({open, setOpen}) {
    return (
        <div>
            <Button variant='outlined' color='secondary' id="txn_pending" style={{display:'none'}} >Pending</Button>
            <Modal
                open={open}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                            <div>
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Request Pending </h4>
                                <img style={{ width: "100%" }} src='/images/loading.gif' />
                            </div> 
                </Box>
            </Modal>
        </div>
    );
}
