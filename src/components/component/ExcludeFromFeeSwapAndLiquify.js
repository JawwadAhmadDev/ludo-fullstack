import React, { useState } from 'react';
import Title from './Title';
import { Button, Input } from '@mui/material';
import TransectionPendingModal from './TransectionPendingModal';
import { fetchContract } from '../../utils';
import { useRecoilState } from 'recoil'
import { walletState } from '../../state/Wallet';
import { toast } from 'react-toastify'


export default function ExcludeFromSwapAndLiquify() {
  const [walletStateValue, setWalletState] = useRecoilState(walletState)
  const [addr, setAddr] = useState()
  const [open, setOpen] = useState(false)

  
  const submitHandler = async (e) => {
    e.preventDefault()
    var contract = await fetchContract()
    setOpen(true)
    contract.methods.excludeFromSwapAndLiquify(addr).send({ from: walletStateValue.userWallet })
      .then(tx => {
        setOpen(false)
        toast(<a target="_blank" style={{ color: 'gray' }} href={`https://testnet.bscscan.com/tx/${tx.transactionHash}`}>Excluded completed !! .🔗 View Tx On BSC Scan !!</a>, { autoClose: false })
        setAddr('')
      })
      .catch(err => {
        setAddr('')
        setOpen(false)
        toast.error(err.message);
      })
  }
  return (
    <React.Fragment>
      <TransectionPendingModal open={open} setOpen={setOpen} />
      <div>
      <Title>Exclude From Swap And Liquify </Title>
        <form onSubmit={e=>submitHandler(e)} >
        <Input style={{width:'100%'}} value={addr} onChange={e=>setAddr(e.target.value)} required className='mt-3' placeholder='Enter Wallet Address' />
        <div className='mt-3'>
          <Button type="submit" variant='outlined' color='secondary'>Exclude</Button>
        </div>
        </form>
      </div>
    </React.Fragment>
  );
}