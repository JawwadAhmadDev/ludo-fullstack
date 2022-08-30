import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Input } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { backendURL } from '../../constants';
import {toast} from 'react-toastify'

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


export default function NestedModal({walletAddress}) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState()
    const [details, setDetails] = useState()
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const sendRequest= (e)=>{
        e.preventDefault()
        axios.post(`${backendURL()}/api/wallet`, {wallet:walletAddress , name , details})
        .then(res=>{ 
            console.log(res.data)
            if(res.data.status==true){
                toast.success(res.data?.message)
            }else{
                toast.success("Request Submitted !!")
                setOpen(!open)
            }
        })
        .catch(err=>{
            console.log("err response", err.response)
        })
    }
    return (
        <div>
            <Button style={{ display: 'none', color: 'black' }} id="req_modal" onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <h4 className='alert  text-center' style={{color:'black'}}> Authorizatoin Request </h4>
                    <form onSubmit={e=>sendRequest(e)}>
                        <Input className='mb-2' placeholder='Wallet Address' value={walletAddress}   />
                        <Input className='mb-2' placeholder='Name' required onChange={e => setName(e.target.value)} />
                        <textarea className='form-control ' rows="4" placeholder='Details' required onChange={e => setDetails(e.target.value)} />
                        <button className='mt-4 btn btn-success' type='submit'>Request</button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
