import * as React from 'react';
import { Alert, AlertTitle, Badge, Button } from '@mui/material';
import SetBuyFeeModal from './SetBuyFeeModal';

export default function SetBuyFee() {
  return (
    <React.Fragment>
      <Alert severity="success">
        <AlertTitle>Set Buy Fee (Jackpot) </AlertTitle>
        Click below to  Set  Liquidity Fee , Marketing Fee , Development Fee   and Jackpot Fee   — <strong>check it out!</strong>
      </Alert>
      <div className='mt-1'>
        <SetBuyFeeModal/>
      </div>
    </React.Fragment>
  );
}