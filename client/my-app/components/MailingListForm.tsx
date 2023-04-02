
import { useForm } from 'react-hook-form';
import {TextField} from "@mui/material";
import MailingListConfirmation from "./MailingListConfirmation"
import axios from 'axios';
import React, {useState} from 'react';
import Button from "@mui/material/Button";



export default function MailingListForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    function handleSubmit(event) {
        event.preventDefault(); // Prevents the form from submitting via the browser
        axios.post('http://127.0.0.1:8000/api/user/', formData)
            .then((response) => {
                console.log(response.data); // Logs the response from the server
            })
            .catch((error) => {
                console.log(error); // Logs any errors that occur during the post request
            });
        return alert("You have successfully registered to the CUTEA mailing list!");
    }
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };


    const onSubmit = () => {
        alert("You have successfully registered to the CUTEA mailing list!");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={formData.name} name = "name" type="text" placeholder="Name" onChange={handleChange}/>
                <br/><br/>
                <input value={formData.email} name = "email" type="text" placeholder="Email" onChange={handleChange}/>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            <div id="data-container"></div>
        </div>
    );
}