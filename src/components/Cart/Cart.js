import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../Context/StoreContext';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import { imgs } from '../../imgs/imgs';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteItemFromCart } = useContext(StoreContext);

  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let total = 0;
    Array.from(cartItems.values()).forEach(item => {
      total += (item.price * item.quantity);
    });
    return total.toFixed(2);
  };

  const handleBackClick = () => {
    navigate('/menu');
  };

  const handleCheckoutCLick = () => {
    if (cartItems.size === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please Make Sure There is at Least One Item in The Cart!!'
      });
    } else {
      navigate('/userinfo');
    }
  };

  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ArrowBackIcon onClick={handleBackClick} sx={{ mb: 4, ml: 5, mt: 4, cursor: 'pointer' }} />
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Image</strong></TableCell>
                  <TableCell><strong>Name</strong></TableCell>
                  <TableCell><strong>Price</strong></TableCell>
                  <TableCell><strong>Quantity</strong></TableCell>
                  <TableCell><strong>Actions</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from(cartItems.values()).map((item) => {
                  if (item.quantity > 0) {
                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          <img className='cart-img' src={item.image} alt={item.name} style={{ width: '80px', height: '80px' }} />
                        </TableCell>
                        <TableCell>
                          {item.name} <br />
                          {(item.category === "salad" || item.category === 'appetizers') ? (
                            null
                          ) : (
                            <>
                              <strong>Size:</strong> {item.size} (${item.sizePrice}) <br />
                              <strong>Extras:</strong> {(item.extras || []).join(', ')} (${item.extrasPrice}) <br />
                              <strong>Notes:</strong> {item.notes}
                            </>
                          )}
                        </TableCell>
                        <TableCell>
                          ${item.price}
                        </TableCell>
                        <TableCell>
                          <img onClick={() => addToCart(item)} src={imgs.increment} alt="increment" />
                          <Typography sx={{ ml: 1.5 }}>{item.quantity}</Typography>
                          <img onClick={() => removeFromCart(item)} src={imgs.decrement} alt="decrement" />
                        </TableCell>
                        <TableCell>
                          <Button variant="contained" color='error' sx={{ width: 92 }} startIcon={<DeleteIcon />}
                            onClick={() => deleteItemFromCart(item)}>
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  }
                  return null;
                })}
              </TableBody>
            </Table>
            <h4>Total Price: ${calculateTotalPrice()}</h4>
          </TableContainer>
        </Grid>

        <Grid item xs={12}>
          <section className='check-btn'>
            <button className='checkout-btn' onClick={handleCheckoutCLick}> Checkout </button>
          </section>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cart;
