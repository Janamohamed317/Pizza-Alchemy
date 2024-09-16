import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';
import './AddToCart.css';
import { extrasList, sizeList } from '../../imgs/imgs';
import Swal from 'sweetalert2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function AddToCart() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { addToCart } = useContext(StoreContext);

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [notes, setNotes] = useState('');

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleExtrasChange = (e) => {
        const value = e.target.value;
        setSelectedExtras((prev) =>
            prev.includes(value) ? prev.filter((extra) => extra !== value) : [...prev, value]
        );
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            return Swal.fire({
                icon: 'error',
                title: 'Size Required',
                text: 'Please select a size before adding to cart!',
            });
        }
        else{
            Swal.fire({
                icon:'success',
                text: "Added To Cart"
            })
        }
        const selectedSizePrice = sizeList.find((size) => size.name === selectedSize)?.price || 0;
        const selectedExtrasPrice = selectedExtras.reduce((total, extra) => {
            const extraItem = extrasList.find((item) => item.name === extra);
            return total + (extraItem?.price || 0);
        }, 0);

        const itemDetails = {
            ...state,
            size: selectedSize,
            extras: selectedExtras,
            sizePrice: selectedSizePrice,
            extrasPrice: selectedExtrasPrice,
            notes,
            price: (state.price || 0) + selectedSizePrice + selectedExtrasPrice,
        };
        addToCart(itemDetails);
        navigate('/cart');
    };

    const handleBackClick = () =>
        {
          navigate('/menu')
        }

    return (
        <div className='container'>
            <ArrowBackIcon onClick={handleBackClick}  sx={{mt:5, ml:5 ,mb:4 ,fontSize:35 ,cursor:'pointer'}}/>
            <div className="card">
                <img
                    src={state.image}
                    alt={state.name}
                    className="card-media"
                />
                <div>
                    <h1>{state.name}</h1>
                    <hr />
                    <div>
                        <h2>Size</h2>
                        <br />
                        {sizeList.map((size) => (
                            <>
                                <div className="radio-group">
                                    <label key={size.name} className='radio-item' >
                                        <input
                                            type="radio"
                                            name="size"
                                            value={size.name}
                                            checked={selectedSize === size.name}
                                            onChange={handleSizeChange}
                                        />
                                    </label>
                                    <span>{size.name}</span>
                                    <span className='price'>${size.price}</span>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                     
                    <div>
                        <h2>Extras</h2>
                        <br />
                        {extrasList.map((extra) => (
                            <>
                                <div className="extras-group">
                                    <label key={extra.name} className='checkBox'>
                                        <input
                                            type="checkbox"
                                            value={extra.name}
                                            onChange={handleExtrasChange}
                                            checked={selectedExtras.includes(extra.name)}
                                        />
                                        <div className='transition'></div>
                                    </label>
                                    <span>{extra.name}</span>
                                    <span className='price'>${extra.price.toFixed(2)}</span>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                   
                    <div className="form-group">
                        <textarea 
                        className='txt'
                            id="notes"
                            placeholder="Notes"
                            rows="3"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>
                    <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
