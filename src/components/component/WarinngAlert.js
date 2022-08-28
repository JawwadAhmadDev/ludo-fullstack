import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function WarningAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}> 
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Are you Sure to make This user Authorized ?  — <strong>check Note below !</strong>
      </Alert> 
    </Stack>
  );
}
