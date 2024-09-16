import { createContext, useMemo, useState } from "react";
import { food_list } from "../../imgs/imgs";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(new Map());

    const addToCart = (itemDetails) => {
        setCartItems((prevCart) => {
            const newCart = new Map(prevCart);
            let foundExistingItem = false;
            newCart.forEach((existingItem, key) => {
                if (
                    existingItem.id === itemDetails.id &&
                    existingItem.size === itemDetails.size &&
                    JSON.stringify(existingItem.extras) === JSON.stringify(itemDetails.extras)
                ) {

                    newCart.set(key, { ...existingItem, quantity: existingItem.quantity + 1 });
                    foundExistingItem = true;
                }
            });

            if (!foundExistingItem) {
                newCart.set(itemDetails.id + JSON.stringify(itemDetails.extras) + itemDetails.size, { ...itemDetails, quantity: 1 });
            }

            return newCart;
        });
    };

    const removeFromCart = (itemDetails) => {
        const itemKey = itemDetails.id + JSON.stringify(itemDetails.extras) + itemDetails.size;

        setCartItems((prevCart) => {
            const newCart = new Map(prevCart);
            const existingItem = newCart.get(itemKey);

            if (existingItem && existingItem.quantity > 1) {
                newCart.set(itemKey, { ...existingItem, quantity: existingItem.quantity - 1 });
            } else {
                newCart.delete(itemKey);
            }
            return newCart;
        });
    };
    const deleteItemFromCart = (itemDetails) => {
        const itemKey = itemDetails.id + JSON.stringify(itemDetails.extras) + itemDetails.size;

        setCartItems((prevCart) => {
            const newCart = new Map(prevCart);
            newCart.delete(itemKey);
            return newCart;
        });
    };

    const contextValue = useMemo(() => ({
        cartItems,
        food_list,
        addToCart,
        removeFromCart,
        deleteItemFromCart,
      }), [cartItems, food_list]);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;