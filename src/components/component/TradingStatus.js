import React, { useState } from 'react';
import Title from './Title';
import { Button } from '@mui/material';
import TransectionPendingModal from './TransectionPendingModal';
import { fetchContract } from '../../utils';
import { useRecoilState } from 'recoil'
import { walletState } from '../../state/Wallet';
import { toast } from 'react-toastify'


export default function TradingStatus() {
  const [walletStateValue, setWalletState] = useRecoilState(walletState)
  const [open, setOpen] = useState(false)
  const enableTrading = async () => {
    var contract = await fetchContract()
    setOpen(true)
    contract.methods.enableTrading().send({ from: walletStateValue.userWallet })
      .then(tx => {
        setOpen(false)
        toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Trading Enabled ! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
      })
      .catch(err => {
        setOpen(false)
        toast.error(err.message);
      })
  }
  return (
    <React.Fragment>
      <TransectionPendingModal open={open} setOpen={setOpen} />
      <Title>Trading Status</Title>
      {
        walletStateValue.isLoaded ?
          <div>
            {
              walletStateValue.tradingOpen ?
                <Button variant='outlined' color='secondary' >Enabled</Button>
                :
                <Button variant='outlined' color='secondary' onClick={e => { enableTrading() }}>Enable</Button>
            }
            <p className='mt-3'>
              NOTE: Trading currently <span className='badge badge-primary text-white'>{walletStateValue.tradingOpen ? "Enabled" : "Disabled"}</span> , Click below to Enable Trading  .
            </p>
          </div> :
          <div style={{ textAlign: 'center', overflow: 'hidden' }}>
            <img style={{ width: '70%' }} src="/images/loadinga.gif" />
          </div>
      }
    </React.Fragment>
  );
}