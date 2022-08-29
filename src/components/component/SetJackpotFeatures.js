import * as React from 'react';
import { Alert, AlertTitle, Badge, Button } from '@mui/material';
import SetjackpotFeaturesModal from './SetBuyJackpotFeaturesModal';

export default function SetjackpotFeatures() {
  return (
    <React.Fragment>
      <Alert severity="success">
        <AlertTitle>Set Jackpot Features </AlertTitle>
        Click below to  Set Jackpot Case out   Buyer Share  and  Minimum Buy   — <strong>check it out!</strong>
      </Alert>
      <div className='mt-4'>
        <SetjackpotFeaturesModal />
      </div>
    </React.Fragment>
  );
}