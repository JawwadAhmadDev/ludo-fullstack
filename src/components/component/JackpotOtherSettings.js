import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Button, Input } from '@mui/material';
import { fetchContract } from '../../utils';
import { useRecoilState } from 'recoil'
import { walletState } from '../../state/Wallet';
import { toast } from 'react-toastify'
import TransectionPendingModal from './TransectionPendingModal';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';


export default function JackpotOtherSettings() {
    const [walletStateValue, setWalletState] = useRecoilState(walletState)
    const [time, setTime] = useState()
    const [open, setOpen] = useState(false)
    const [llAddr, setLlAddr] = useState()
    const [marketingWAddr, setMarketingWAddr] = useState()

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const timeSpan = async (e) => {
        e.preventDefault()
        var contract = await fetchContract()
        setOpen(true)
        contract.methods.setJackpotTimespanInSeconds(time).send({ from: walletStateValue.userWallet })
            .then(tx => {
                setOpen(false)
                toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Time Setup Completed ! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
                setTime('')
            })
            .catch(err => {
                setTime('')
                setOpen(false)
                toast.error(err.message);
            })
    }
    const setLockLiquidityAddr = async (e) => {
        e.preventDefault()
        var contract = await fetchContract()
        setOpen(true)
        contract.methods.setLockedLiquidityAddress(llAddr).send({ from: walletStateValue.userWallet })
            .then(tx => {
                setOpen(false)
                toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Lock Liquidity Address added !! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
                setLlAddr('')
            })
            .catch(err => {
                setLlAddr('')
                setOpen(false)
                toast.error(err.message);
            })
    }
    
    const setMarketingWallet = async (e) => {
        e.preventDefault()
        var contract = await fetchContract()
        setOpen(true)
        contract.methods.setMarketingWalletAddress(marketingWAddr).send({ from: walletStateValue.userWallet })
            .then(tx => {
                setOpen(false)
                toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Marketing Wallet Address added !! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
                setMarketingWAddr('')
            })
            .catch(err => {
                setMarketingWAddr('')
                setOpen(false)
                toast.error(err.message);
            })
    }
    
    return (
        <div>
            <TransectionPendingModal open={open} setOpen={setOpen} />
            {['bottom',].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Other Settings</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                    >
                        <Box
                            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                            role="presentation"
                        >
                            <div className='text-right mt-2  mr-2'>
                                <span style={{ cursor: 'pointer' }} onClick={toggleDrawer('bottom', false)}>
                                    <DisabledByDefaultIcon />
                                </span>
                            </div>
                            <div className='container pt-2 pb-5'>
                                <h4 style={{ textAlign: 'center', color: 'black' }}>Jackpot Other Settings</h4 >
                                <hr />
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <form onSubmit={e => timeSpan(e)} class="form-inline">
                                            <div class="form-group mx-sm-3 mb-2">
                                                <Input value={time} required onChange={e => setTime(e.target.value)} type='number' placeholder='Enter Time in Second' />
                                            </div>
                                            <Button variant='outlined' color='secondary' type="submit"  >Submit</Button>
                                        </form>
                                        <form onSubmit={e => setLockLiquidityAddr(e)} class="form-inline mt-3 ">
                                            <div class="form-group mx-sm-3 mb-2">
                                                <Input value={llAddr} required onChange={e => setLlAddr(e.target.value)} placeholder='Locked Liquidity Address' />
                                            </div>
                                            <Button variant='outlined' color='secondary' type="submit"  >Submit</Button>
                                        </form>
                                        <form onSubmit={e => setMarketingWallet(e)} class="form-inline mt-3 ">
                                            <div class="form-group mx-sm-3 mb-2">
                                                <Input value={marketingWAddr} required onChange={e =>setMarketingWAddr(e.target.value)} placeholder='Marketing Wallet Address' />
                                            </div>
                                            <Button variant='outlined' color='secondary' type="submit"  >Submit</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
