import * as React from 'react';
import Title from './Title';
import {  Button, Input } from '@mui/material';
 
export default function ExcludeFromSwapAndLiquify() {
  return (
    <React.Fragment>
      <Title>Exclude From Swap And Liquify </Title>
      <Input className='mt-3' placeholder='Enter Wallet Address' />
      <div className='mt-3'>
        <Button variant='outlined' color='secondary'>Exclude</Button>
      </div>
    </React.Fragment>
  );
}