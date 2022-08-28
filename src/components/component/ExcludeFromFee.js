import * as React from 'react';
import Title from './Title';
import {  Button, Input } from '@mui/material';
 
export default function ExcludeFromFee() {
  return (
    <React.Fragment>
      <Title>Exclude From Fee</Title>
      <br/>
      <Input className='mt-3' placeholder='Enter Wallet Address' />
      <div className='mt-3'>
        <Button variant='outlined' color='secondary'>Exclude</Button>
      </div>
    </React.Fragment>
  );
}