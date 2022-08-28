import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { backendURL } from '../../../constants';
import axios from 'axios'
import ConfirmationModal from '../../component/ConfirmationModal';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

function preventDefault(event) {
    event.preventDefault();
}

export default function Requests() {
    const [requests, setRequests] = useState([])
    const dateOption = { year: 'numeric', month: 'short', day: 'numeric' };

    useEffect(() => {
        axios.get(`${backendURL}/api/wallet/unauthorized`)
            .then(res => {
                setRequests(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <React.Fragment>

            <Typography component="h1" variant="h4" color="primary" align='center' gutterBottom>
                Recent Authorizatoin Requests
            </Typography>
            <hr />
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Wallet Address</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {requests.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell>{new Date(row.date).toLocaleDateString('de-DE', dateOption)}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.wallet}</TableCell>
                            <TableCell>{row.details}</TableCell>
                            <TableCell align="right"> <ConfirmationModal id={row._id} name={row.name} wallet={row.wallet} details={row.details} /> </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
            {requests.length == 0 ? (
                <h6 style={{marginTop:'20px', color: 'black', textAlign: 'center' }}>No Request Finded </h6>
            ) : ''}
        </React.Fragment>
    );
}