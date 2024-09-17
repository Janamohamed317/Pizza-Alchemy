import React, { useState } from 'react'
import { Grid, TextField, Typography, Box } from '@mui/material';
import "../button.css";
import Swal from 'sweetalert2';
function UserInfo() {

  const [formInputs, setFormInputs] = useState(
    {
      name: '',
      address: '',
      phone: '',
      notes: '',
    }
  )

  const handleFormChanges = (e) => {
    const { name, value } = e.target
    setFormInputs(
      {
        ...formInputs,
        [name]: value
      }
    )
  }

  const Validation = () => {
    const { name, address, phone, notes } = formInputs;
    if (!name || !address || !phone) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the fields!',
      });
      return false;
    }
    if (phone.length !==  11) {
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
    if (Validation()) {
      Swal.fire({
        icon: 'success',
        title: 'Form Submitted',
        text: 'Thank you! Your Order has been Placed.',
      });
      setFormInputs({
        name: '',
        address: '',
        phone: '',
        notes: '',
      })
    }
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center" sx={{ mt: 5 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={9} md={9}>
          <Typography variant="h3" sx={{ fontSize: 54 }}>Please Enter Your<br /> Delivery Information</Typography>
        </Grid>
        <Grid item xs={12} sm={5} display="flex" justifyContent="center">
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
              <Grid item xs={10} sm={9} md={9}>
                <TextField
                  fullWidth
                  label="Name *"
                  name='name'
                  variant="standard"
                  color="primary"
                  sx={{
                    input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: "#ffd600" },
                  }}
                  value={formInputs.name}
                  onChange={handleFormChanges}
                />
              </Grid>
              <Grid item xs={10} sm={9} md={9}>
                <TextField
                  fullWidth
                  label="Address *"
                  name='address'
                  variant="standard"
                  color="primary"
                  sx={{
                    input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: "#ffd600" },
                  }}
                  value={formInputs.address}
                  onChange={handleFormChanges}
                />
              </Grid>
              <Grid item xs={10} sm={9} md={9}>
                <TextField
                  fullWidth
                  label="Phone Number*"
                  variant="standard"
                  name='phone'
                  type='tel'
                  color="primary"
                  sx={{
                    input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: "#ffd600" },
                  }}
                  value={formInputs.phone}
                  onChange={handleFormChanges}
                />
              </Grid>
              <Grid item xs={10} sm={9} md={9}>
                <TextField
                  fullWidth
                  label="Notes"
                  name='notes'
                  variant="outlined"
                  multiline
                  rows={4}
                  color="primary"
                  sx={{
                    "& .MuiInputBase-root": { color: 'white' },
                    "& .MuiInputLabel-root": { color: "#ffd600" },
                  }}
                  value={formInputs.notes}
                  onChange={handleFormChanges}
                />
              </Grid>
              <Grid item xs={10} sm={9} md={9}>
                <button className='UI-btn'>Send</button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserInfo