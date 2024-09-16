import React, { useContext, useMemo } from 'react'
import { StoreContext } from '../Context/StoreContext'
import MenuItem from './MenuItem'
import Grid from '@mui/material/Grid';

function MenuItemsDisplay({ selectedMenu }) {
  const { food_list } = useContext(StoreContext);
  const filtered = useMemo(() => food_list.filter(item => item.category === selectedMenu), [food_list, selectedMenu]);

  
  return (
    <div>
      <Grid container spacing={2}>
        {filtered.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <MenuItem
              name={item.name}
              image={item.image}
              price={item.price}
              id={item._id}
              category={item.category}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MenuItemsDisplay;
