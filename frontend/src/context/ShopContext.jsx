import {createContext, useState, useEffect} from 'react';
// import {products} from '../assets/assets.js'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'


export const ShopContext = createContext();

export const ShopContextProvider = (props) =>{
    const currency ='$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);
    const [token,setToken] = useState('')

    const navigate = useNavigate();




  const addToCart = async(itemId,size)=>{

    // Toast - used to pop-up message
    if(!size){
        toast.error('Select Product Size');
        return;
    }
        
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1; 
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    const getCartCount = () =>{
        let totalCount = 0;

        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalCount;
    }


    const updateQuantity = async(itemId,size,quantity)=>{
           
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        
        setCartItems(cartData);
    }



    const getCartAmount = async => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product.id === items);

            for(const item in cartItems[items]>0){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }catch(error){

                }
            }
        }
        return totalAmount;
    }

    

    const getProductData = async ()=>{
        try {
            
         const response = await axios.get(backendUrl + '/api/product/list')
         
         if(response.data.success){
            setProducts(response.data.products)
         }else{
            toast.error(error.data.message)
         }

        } catch (error) {
            console.log(error.response)
            toast.error(error)
        }
    }
    //need to call function to get data using useeffect

    useEffect(()=>{
        getProductData();
    },[])

    const value= {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch, addToCart,getCartCount,cartItems, updateQuantity,
        getCartAmount,navigate ,backendUrl, setToken
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContext 
