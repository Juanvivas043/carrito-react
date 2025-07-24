import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer.js";
// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

export function CartProvider ({ children }) {
    const { state, addToCart, removeFromCart, clearCart} = useCartReducer()

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}