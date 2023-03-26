import React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";



const MailingListForm = () => {
    return (
        <div>
            <TextField  size="small" color="success" id="outlined-basic" label="Name" variant="outlined" />
            <TextField size="small" color="success" id="outlined-basic" label="Email" variant="outlined" />

        </div>
    );
};

export default MailingListForm;