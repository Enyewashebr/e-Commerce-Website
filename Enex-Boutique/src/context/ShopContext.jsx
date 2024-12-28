import { createContext} from "react";
import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";

export const ShopContext=createContext()


const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({})

    const addToCart = async (itemId, size) =>{

        if (!size){
            toast.error('Select Product Size')
        }


        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }
        setCartItems(cartData)
    }



    
    const getCartCount = () =>{
        let totalCount = 0;
        for (const items in cartItems){
            for (const item in cartItems[items]){
                try {
                  if (cartItems[items][item]>0){
                    totalCount += cartItems[items][item];
                  }  
                } 
                catch(error) {
                console.log(error)
                } 
        }   }
        return totalCount;
    }
    const updateQuantity = async (itemId, size, quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }
    const getCartAmount =  () =>{
        let totalAmount = 0;
        for (const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]){
                try {
                    if (cartItems[items][item]>0){
                    totalAmount += cartItems[items][item] * itemInfo.price;}
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalAmount;
    }
    const value = {
        products, delivery_fee, currency,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity, getCartAmount
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
           
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
