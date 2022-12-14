import { createContext, useContext, ReactNode, useState } from "react"
import ShoppingCart from "../Component/ShoppingCart"

type ShoppingCartProviderPoops = {
    children: ReactNode
}

type ShoppingCartContextPoops = {
    openCart: () => void
    closeCart: () => void
    getItemsQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems : CartItem[]
}

type CartItem = {
    id: number
    quantity: number
}


const ShoppingCartContext = createContext({} as ShoppingCartContextPoops);



export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderPoops) => {

    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)


    const getItemsQuantity = (id: number) => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const increaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }]
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decreaseCartQuantity = (id: number) => {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

   const removeFromCart = (id: number) => {
     setCartItems( currItems =>{
        return currItems.filter(item => item.id !== id)
     })
   }


    return (
        <ShoppingCartContext.Provider value={{ 
            getItemsQuantity, 
            increaseCartQuantity,
            decreaseCartQuantity, 
            removeFromCart,
            cartQuantity,
            openCart,
            closeCart,
            cartItems
            }}>
            {children}
            <ShoppingCart isOpen={isOpen}></ShoppingCart>
        </ShoppingCartContext.Provider>
    )
}


