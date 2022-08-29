import React, { useState } from 'react';
import Title from './Title';
import { Button } from '@mui/material';
import TransectionPendingModal from './TransectionPendingModal';
import { fetchContract } from '../../utils';
import { useRecoilState } from 'recoil'
import { walletState } from '../../state/Wallet';
import { toast } from 'react-toastify'


export default function SwapAndLiquify() {
  const [walletStateValue, setWalletState] = useRecoilState(walletState)
  const [open, setOpen] = useState(false)
  const enableSwapAndLiquify = async () => {
    var contract = await fetchContract()
    setOpen(true)
    contract.methods.setSwapAndLiquifyEnabled(!walletStateValue.swapAndLiquify).send({ from: walletStateValue.userWallet })
      .then(tx => {
        setOpen(false)
        setWalletState({ ...walletStateValue, swapAndLiquify: !walletStateValue.swapAndLiquify })
        toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Swap and Liquify Enabled ! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
      })
      .catch(err => {
        setOpen(false)
        toast.error(err.message);
      })
  }
  return (
    <React.Fragment>
      <TransectionPendingModal open={open} setOpen={setOpen} />
      <Title>Swap and Liquify </Title>
      {
        walletStateValue.isLoaded ?
          <div>
            {
              walletStateValue.swapAndLiquify ?
                <Button variant='outlined' color='secondary' onClick={e => { enableSwapAndLiquify() }}>Disable</Button>
                :
                <Button variant='outlined' color='secondary' onClick={e => { enableSwapAndLiquify() }}>Enable</Button>
            }
            <p className='mt-3'>
              NOTE: Currently Swap and Liquify is  <span className='badge badge-primary text-white'>{walletStateValue.swapAndLiquify ? "Enabled" : "Disabled"}</span> , Click below to Enable it .
            </p>
          </div> :
          <div style={{ textAlign: 'center', overflow: 'hidden' }}>
            <img style={{ width: '70%' }} src="/images/loadinga.gif" />
          </div>
      }
    </React.Fragment>
  );
}