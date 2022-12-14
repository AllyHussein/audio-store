import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const Context = createContext()

export const StateContext= ({children}) => {
    const [showCart , setShowCart] = useState(false)
    const [cartItems , setCartItems] = useState([])
    const [totalPrice , setTotalPrice] = useState(0)
    const [totalQuantities , setTotalQuantities] = useState(0)
    const [qty , setQty] = useState(1)

    let foundProduct
    
    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id)

        setTotalPrice((totalPrice) => totalPrice + product.price * quantity)
        setTotalQuantities((totalQuantities) => totalQuantities + quantity)

        if(checkProductInCart) {
            const updatedCartItem = cartItems.map((cartItem) => {
                if(cartItem._id === product._id) return {
                    ...cartItem,
                    quantity : cartItem.quantity + quantity
                }
            })
            setCartItems(updatedCartItem)
        } else {
            product.quantity = quantity
            setCartItems([...cartItems, {...product}])
        }
        toast.success(`${qty} ${product.name} added to the cart`)
    }
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item) => item._id !== product._id)
        
        setTotalPrice( totalPrice - foundProduct.price * foundProduct.quantity)
        setTotalQuantities(totalQuantities - foundProduct.quantity)
        setCartItems(newCartItems)

    }
    const toggleCartItemQuantity = (id , value) => {
        foundProduct = cartItems.find((item) => item._id === id)
        const newCartItems = cartItems.filter((item) => item._id !== id)

        if (value === 'inc') {
            setCartItems([...newCartItems , {...foundProduct , quantity : foundProduct.quantity + 1}])
            setTotalPrice(totalPrice + foundProduct.price)
            setTotalQuantities(totalQuantities + 1)
        } else if (value == 'dec') {
            if (foundProduct.quantity > 1) {
                setCartItems([...newCartItems , {...foundProduct , quantity : foundProduct.quantity - 1}])
                setTotalPrice(totalPrice - foundProduct.price)
                setTotalQuantities(totalQuantities - 1)

            }
        }
    }
    const incQty = () => {
        setQty((qty) => qty + 1)
    }
    const decQty = () => {
        setQty((qty) => {
            if (qty -1 < 1) return 1
            return qty - 1
        })
    }

    return (
        <Context.Provider value={{showCart ,setShowCart, cartItems ,
         totalPrice , totalQuantities , qty , incQty , decQty , onAdd , toggleCartItemQuantity , onRemove,
         setCartItems , setTotalPrice , setTotalQuantities}}>
            {children}
        </Context.Provider>
    )
}
export const useStateContext = () => useContext(Context)