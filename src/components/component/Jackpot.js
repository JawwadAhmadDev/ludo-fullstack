import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import SetJackpotHardLimit from './SetJackpotHardLimit';
import JackpotOtherSettings from './JackpotOtherSettings';

function preventDefault(event) {
  event.preventDefault();
}

export default function Jackpot() {
  return (
    <React.Fragment>
      <Title>Jackpot Funding & Features</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography> 
      <div className='mt-3' >
        <SetJackpotHardLimit/>
        <JackpotOtherSettings/>
      </div>
    </React.Fragment>
  );
}