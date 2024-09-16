import React, { useState } from 'react';
import { Grid, TextField, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2';
import "../button.css";

function ContactUs() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, message } = formValues;
        if (!firstName || !lastName || !email || !phone || !message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all the fields!',
            });
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address!',
            });
            return false;
        }
        
        if (phone.length !== 11) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Phone Number',
                text: 'Phone number should be at least 11 digits long!',
            });
            return false;
        }

        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone)) {
            Swal.fire(
                {
                    icon: 'error',
                    title: 'Invalid Phone Number',
                    text: 'Please Enter Numbers!'
                }
            )
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted',
                text: 'Thank you! Your message has been sent.',
            });
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            })
           
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 15 }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">
                    <Box textAlign="center">
                        <Typography variant="h2" sx={{fontSize:110}}>Contact Us</Typography>
                        <Typography variant="h4"sx={{fontSize:55}}>Have questions?</Typography>
                        <Typography variant="h4" sx={{fontSize:45}}>We can help.</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} display="flex" justifyContent="center">
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                            <Grid item xs={11} sm={9} md={9}>
                                <TextField
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    label="First Name*"
                                    variant="standard"
                                    color="primary"
                                    sx={{
                                        input: { color: 'white' },
                                        "& .MuiInputLabel-root": { color: "#ffd600" },
                                    }}

                                    value={formValues.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={11} sm={9} md={9}>
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name*"
                                    variant="standard"
                                    color="primary"
                                    sx={{
                                        input: { color: 'white' },
                                        "& .MuiInputLabel-root": { color: "#ffd600" },
                                    }}

                                    value={formValues.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={11} sm={9} md={9}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email*"
                                    variant="standard"
                                    color="primary"
                                    sx={{
                                        input: { color: 'white' },
                                        "& .MuiInputLabel-root": { color: "#ffd600" },
                                    }}

                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={11} sm={9} md={9}>
                                <TextField
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    label="Phone Number*"
                                    variant="standard"
                                    color="primary"
                                    type='tel'
                                    sx={{
                                        input: { color: 'white' },
                                        "& .MuiInputLabel-root": { color: "#ffd600" },
                                    }}
                                    value={formValues.phone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={11} sm={9} md={9}>
                                <TextField
                                    fullWidth
                                    id="message"
                                    name="message"
                                    label="Write Your Message*"
                                    variant="outlined"
                                    multiline
                                    rows={8}
                                    color="primary"
                                    sx={{
                                        "& .MuiInputBase-root": { color: 'white' },
                                        "& .MuiInputLabel-root": { color: "#ffd600" },
                                    }}

                                    value={formValues.message}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={11} sm={9} md={9}>
                                <button className="UI-btn" type="submit">Send</button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUs;
