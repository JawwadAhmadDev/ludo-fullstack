import  React,{useState} from 'react';
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
    const [isTxPending, setIsTxPending] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const processRequest = async () => {
        setIsTxPending(true)
        var contract = await fetchContract()
        contract.methods.authorize(wallet).send({ from: walletStateValue.userWallet })
            .then(tx => {
                console.log(tx);
                toast("Authorization completed in Smart contract ")
                axios.put(`${backendURL}/api/wallet/${wallet}`)
                    .then(res => {
                        console.log(res)
                        toast("Authorization completed in Server Side ")
                        toast.info("Page will Refrash soon  , to be updated  . ")
                        setOpen(false)
                        isTxPending(false)
                        setTimeout(() => {
                            window.location.reload()
                        }, 3000);
                    })
                    .catch(err => {
                        console.log(err)
                        toast.error("Server Error !!")
                    })
            })
            .catch(err => {
                toast.error(err.message)
                setOpen(false)
                isTxPending(false)
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
                    {
                        isTxPending ?
                            <div>
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Request Pending </h4>
                                <img style={{ width: "100%" }} src='/images/loading.gif' />
                            </div> :
                            <div>
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Authorizatoin Request </h4>
                                <WarningAlert />
                                <p className='mt-5' style={{ textDecoration: 'italic' }}>Note: After doing this action  , ({wallet}) this user able to  invest in jackpot as  Authorized user.</p>
                                <div className='text-right' >
                                    <Button variant='contained' color='secondary' onClick={e => { processRequest() }} >Confirm</Button>
                                </div>
                            </div>
                    }
                </Box>
            </Modal>
        </div>
    );
}
