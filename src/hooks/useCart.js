import { useContext } from "react";
import { CartContext } from "../context/Cart.jsx";

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error ('useCart must be within a CartProvider')
    }

    return context
}

