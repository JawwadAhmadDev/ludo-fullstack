import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { Badge, Button } from '@mui/material';
 
export default function SwapAndLiquify() {
  return (
    <React.Fragment>
      <Title>Swap and Liquify </Title>
      <p>
        Currently Swap and Liquify is  <span  className='badge badge-primary text-white'>Disabled</span> , Click below to Enable it . 
      </p> 
      <div>
        <Button variant='outlined' color='secondary'>Enable</Button>
      </div>
    </React.Fragment>
  );
}