import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Input } from 'reactstrap';
import { useState } from 'react';
import { JACKPOT_BIGBANG_BUYBACK_MAX, JACKPOT_BIGBANG_BUYBACK_MIN, MAX_PCT } from '../../constants';
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


export default function SetJackpotHardLimit() {
    const [jackpotHardBuyBack, setJackpotHardBuyBack] = useState()
    const [jackpotHardLimit, setJackpotHardLimit] = useState()

    const [open, setOpen] = React.useState(false);
    const [walletStateValue, setWalletState] = useRecoilState(walletState)
    const [isPendingTx, setIsPendingTx] = useState(false)


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
        contract.methods.setJackpotHardFeatures(jackpotHardBuyBack , jackpotHardLimit).send({ from: walletStateValue.userWallet })
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
            <Button variant='outlined' color='secondary' onClick={handleOpen}>Set Jackpot</Button>
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
                                <h4 className='alert  text-center' style={{ color: 'black' }}> Jackpot Hard Limit Features</h4>
                                <form onSubmit={e => submitFee(e)} className='buy_form form'>
                                    <label className=" buy_form_label mt-2">Jackpot Hard BuyBack ({`${JACKPOT_BIGBANG_BUYBACK_MIN}-${JACKPOT_BIGBANG_BUYBACK_MAX}`})  </label>
                                    <Input type='number' min={JACKPOT_BIGBANG_BUYBACK_MIN} max={JACKPOT_BIGBANG_BUYBACK_MAX} required placeholder='Liquidity Fee' onChange={e => setJackpotHardBuyBack(e.target.value)} />
                                    <label className=" buy_form_label mt-2">Jackpot Hard Limit</label>
                                    <Input required placeholder='Marketing Fee' onChange={e => setJackpotHardLimit(e.target.value)} />
                                    <div className='mt-3'>
                                        <Button variant='outlined' color='secondary' type='submit'> {isPendingTx ? "View TX Status" : "Submit "} </Button>
                                    </div>
                                </form>
                            </div>
                    }
                </Box>
            </Modal>
        </div>
    );
}
