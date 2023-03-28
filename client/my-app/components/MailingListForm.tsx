
import { useForm } from 'react-hook-form';
import {TextField} from "@mui/material";
import MailingListConfirmation from "./MailingListConfirmation"

import React from 'react';
import Button from "@mui/material/Button";

export default function MailingListForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = () => {
        alert("You have successfully registered to the CUTEA mailing list!");
    };

    return (
        <div>

            <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <br/><br/>
            <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
            <br/><br/>
            <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <br/><br/>
            <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <br/><br/>
            <button onClick={MailingListConfirmation}>Submit</button>
        </div>
    );
}