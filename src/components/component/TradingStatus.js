import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Badge, Button } from '@mui/material';
 
export default function TradingStatus() {
  return (
    <React.Fragment>
      <Title>Trading Status</Title>
      <p>
        Trading currently <span  className='badge badge-primary text-white'>Disabled</span> , Click below to Enable Trading  . 
      </p> 
      <div>
        <Button variant='outlined' color='secondary'>Enable</Button>
      </div>
    </React.Fragment>
  );
}