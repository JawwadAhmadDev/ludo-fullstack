import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Input } from 'reactstrap';
import axios from 'axios';
import { backendURL, fromWei, toWei, JACKPOT_BUYER_SHARE_MAX, JACKPOT_BUYER_SHARE_MIN, JACKPOT_CASHOUT_MAX, JACKPOT_CASHOUT_MIN, JACKPOT_MINBUY_MAX, JACKPOT_MINBUY_MIN, MAX_PCT } from '../../constants';
import { toast } from 'react-toastify'
import { fetchContract } from '../../utils';
import { useRecoilState } from 'recoil'
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


export default function SetjackpotFeaturesModal() {
    const [open, setOpen] = React.useState(false);
    const [walletStateValue, setWalletState] = useRecoilState(walletState)
    const [isPendingTx, setIsPendingTx] = useState(false)

    const [cashout, setCashout] = useState()
    const [buyerShare, setBuyerShare] = useState()
    const [minimumBuy, setMinimumBuy] = useState()



    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }; 
    const submitFee = async (e) => {
        e.preventDefault()
        var contract = await fetchContract()
        setIsPendingTx(true)
        toast.info("Transection Submitted with given informations")
        console.log(toWei(cashout), toWei(buyerShare), toWei(minimumBuy))
        contract.methods.setJackpotFeatures(toWei(cashout), toWei(buyerShare), toWei(minimumBuy)).send({ from: walletStateValue.userWallet })
            .then(tx => {

                console.log(tx)
                setIsPendingTx(false)
                setOpen(false)
                toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Buy fee set Completed .🔗 View On BSC Scan !!</a>, { autoClose: false })
            })
            .catch(err => {
                console.log(err)
                toast.error(err.message)
                setOpen(false)
                setIsPendingTx(false)
            })
        return
    }

    return (
        <div>
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Set Features</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style }}>
                    {
                        isPendingTx ?
                            <div>

                                <h4 className='alert  text-center' style={{ color: 'black' }}> Transection Pending </h4>
                                <img style={{ width: '100%' }} src='/images/loading.gif' />

                            </div> :
                            <div>
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Set Jackpot Features</h4>
                                <form onSubmit={e => submitFee(e)} className='buy_form form'>
                                    <label className=" buy_form_label mt-2">Cashout ({`${JACKPOT_CASHOUT_MIN} - ${JACKPOT_CASHOUT_MAX}`}) </label>
                                    <Input type='number' min={JACKPOT_CASHOUT_MIN} max={JACKPOT_CASHOUT_MAX} required placeholder='Cash Out' onChange={e => setCashout(e.target.value)} />
                                    <label className=" buy_form_label mt-2"> Buyer Share ({`${JACKPOT_BUYER_SHARE_MIN} -${JACKPOT_BUYER_SHARE_MAX}`}) </label>
                                    <Input type='number' min={JACKPOT_BUYER_SHARE_MIN} max={JACKPOT_BUYER_SHARE_MAX} required placeholder='Buyer Share' onChange={e => setBuyerShare(e.target.value)} />
                                    <label className=" buy_form_label mt-2">Minimum Buy ({`${fromWei(JACKPOT_MINBUY_MIN)}-${fromWei(JACKPOT_MINBUY_MAX)}`}) </label>
                                    <Input type='number' min={fromWei(JACKPOT_MINBUY_MIN)} max={fromWei(JACKPOT_MINBUY_MAX)} required placeholder='Minimum Buy' onChange={e => setMinimumBuy(e.target.value)} />
                                    <div className='mt-3'>
                                        <Button variant='outlined' color='secondary' type='submit'> {isPendingTx ? "View TX Status" : "Set  Features"} </Button>
                                    </div>
                                </form>
                            </div>
                    }
                </Box>
            </Modal>
        </div>
    );
}
