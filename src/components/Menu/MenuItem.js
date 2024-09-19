import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import Box from '@mui/material/Box';
import { StoreContext } from '../Context/StoreContext';


function MenuItem({ id, image, name, price, category }) {
    const navigate = useNavigate();
    const { addToCart } = useContext(StoreContext);
    const handleAddToCartClick = () => {
        if (category === 'salad' || category === 'appetizers') {
            const saladItem = { id, image, name, price, quantity: 1, category };
            addToCart(saladItem);
            navigate('/cart');
        } else {
            navigate('/add-to-cart', { state: { id, image, name } });
        }
    };
    return (
        <Card sx={{ backgroundColor: '#F5F5DC', mb: 5, height: "94%" }}>
            <CardMedia
                sx={{
                    paddingTop: '100%'
                }}
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{ color: '#76453B' }}>
                    <strong >{name}</strong>
                </Typography>

                {(category === "salad" || category === 'appetizers') ?
                    <Typography variant='h6' sx={{ color: '#76453B' }}>
                        ${parseFloat(price).toFixed(2)}
                    </Typography> :
                    null
                }

            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 1 }}>
                <IconButton sx={{ color: '#76453B' }} onClick={handleAddToCartClick}>
                    <AddCircleSharpIcon />
                </IconButton>
            </Box>
        </Card>
    );
}

export default MenuItem;
