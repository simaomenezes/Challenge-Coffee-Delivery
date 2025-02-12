import { createContext, ReactNode, useEffect, useReducer } from "react";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";
import { useNavigate } from "react-router-dom";
import { addItemAction } from "../reducers/cart/actions";


interface CartContextType{
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartSate, dispatch] = useReducer(cartReducer,
        {
            cart: [],
            orders: [],
        },
        (cartSate) => {
            const storeedStateAsJSON = localStorage.getItem(
                '@coffee-delivery:cart-state-1.0.0',
            )

            if(storeedStateAsJSON){
                return JSON.parse(storeedStateAsJSON)
            }

            return cartSate
        },
    )
    const navigate = useNavigate()

    const { cart, orders } = cartSate

    function addItem(item: Item){
        dispatch(addItemAction(item))
    }


    useEffect(() => {
        if(cartSate){
            const stateJson = JSON.stringify(cartSate)

            localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJson)
        }
    }, [cartSate])



    return(
        <CartContext.Provider
            value={{
                addItem,
                cart,
                orders,
            }}
        >
            {children}
        </CartContext.Provider>
    )


}