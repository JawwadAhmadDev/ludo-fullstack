import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import WarningAlert from './WarinngAlert';
import axios from 'axios'
import { toast } from 'react-toastify'
import { fetchContract } from '../../utils';
import { backendURL } from '../../constants';
import { useRecoilState } from "recoil"
import { walletState } from '../../state/Wallet';

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


export default function ConfirmationModal({ id, name, wallet, details }) {
    const [open, setOpen] = React.useState(false);
    const [walletStateValue, setWalletState] = useRecoilState(walletState)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const processRequest = async () => {
        toast.info("Please Wait , Transection  Mining !")
        setOpen(false)
        var contract = await fetchContract()
        var tx = await contract.methods.authorize(wallet).send({ from: walletStateValue.userWallet })
        console.log(tx);
        toast("Authorization completed in Smart contract ")
        axios.put(`${backendURL}/api/wallet/${wallet}`)
            .then(res => {
                console.log(res)
                toast("Authorization completed in Server Side ")
                toast.info("Page will Refrash soon  , to be updated  . ")
                setTimeout(() => {
                    window.location.reload()
                }, 3000);
            })
            .catch(err => {
                console.log(err)
                toast.error("Server Error !!")
            })
    }

    return (
        <div>
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Authorise</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    <h4 className='alert  text-center' style={{ color: 'black' }}> Authorizatoin Request </h4>
                    <WarningAlert />
                    <p className='mt-5' style={{ textDecoration: 'italic' }}>Note: After doing this action  , ({wallet}) this user able to  invest in jackpot as  Authorized user.</p>
                    <div className='text-right' >
                        <Button variant='contained' color='secondary' onClick={e => { processRequest() }} >Confirm</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
