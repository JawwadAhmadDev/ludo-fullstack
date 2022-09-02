import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Input } from 'reactstrap';
import { useState } from 'react';
import {  MAX_PCT } from '../../constants';
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


export default function SetBuyFeeModal() {
    const [liquidityFee, setLiquidityFee] = useState()
    const [marketingFee, setMarketingFee] = useState()
    const [developmentFee, setDevelopmentFee] = useState()
    const [jackpotFee, setJackpotFee] = useState()
    const [open, setOpen] = React.useState(false);
    const [walletStateValue, setWalletState] = useRecoilState(walletState)
    const [isPendingTx, setIsPendingTx] = useState(false)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const pctToMaxPCT = (pct) => {
        return MAX_PCT * pct / 100;
    }
    const submitFee = async (e) => {
        e.preventDefault()
        var contract = await fetchContract()
        setIsPendingTx(true)
        toast.info("Transection Submitted with given informations")
        contract.methods.setBuyFees(pctToMaxPCT(liquidityFee), pctToMaxPCT(marketingFee), pctToMaxPCT(developmentFee), pctToMaxPCT(jackpotFee)).send({ from: walletStateValue.userWallet })
            .then(tx => {
                console.log(tx)
                setIsPendingTx(false)
                setOpen(false)
                toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Buy fee set Completed .🔗 View On BSC Scan !!</a>, { autoClose: false })
            })
            .catch(err => {
                toast.error(err.message)
                setIsPendingTx(false)
                setOpen(false)
            })
    }

    return (
        <div>
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Set Fee</Button>
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
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Set Buy Fee</h4>
                                <form onSubmit={e => submitFee(e)} className='buy_form form'>
                                    <label className=" buy_form_label mt-2">Liquidity (%)</label>
                                    <Input required placeholder='Liquidity Fee' onChange={e => setLiquidityFee(e.target.value)} />
                                    <label className=" buy_form_label mt-2">Marketing (%)</label>
                                    <Input required placeholder='Marketing Fee' onChange={e => setMarketingFee(e.target.value)} />
                                    <label className=" buy_form_label mt-2">Development (%)</label>
                                    <Input required placeholder='Development Fee' onChange={e => setDevelopmentFee(e.target.value)} />
                                    <label className=" buy_form_label mt-2">Jackpot (%)</label>
                                    <Input required placeholder='Jackpot Fee' onChange={e => setJackpotFee(e.target.value)} />
                                    <div className='mt-3'>
                                        <Button variant='outlined' color='secondary' type='submit'> {isPendingTx ? "View TX Status" : "Set  Fee"} </Button>
                                    </div>
                                </form>
                            </div>
                    }
                </Box>
            </Modal>
        </div>
    );
}
