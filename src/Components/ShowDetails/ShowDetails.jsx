import { useLoaderData } from "react-router-dom";
import ShowDetailsCard from "../ShowDetailsCard/ShowDetailsCard";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowDetails = () => {
    const data = useLoaderData();
    const meals = data? data.meals: [];
    const [addToCart, setAddToCart] = useState([]);
   const [counter, setCounter] = useState(0);

   const delet = ()=>{
    toast.warn('Cart is empty', {position:"top-center",theme: "colored"});
  }

    const handleCart = (meal)=>{
     setAddToCart(meal);

     setCounter(counter+1);
      
    }
    const decrement =()=>{
       if(counter===0){
        delet();
       }else{
        setCounter(counter-1)
       }
     }
     const increment = ()=>{
         setCounter(counter+1);
     }
    
     

    return (
        <div className="flex mt-12 gap-12">
           
           <div className="w-2/3 shadow-xl p-5">
           {
                
                meals.map((meal, idx)=> <ShowDetailsCard key={idx} meal={meal} handleCart={handleCart} ></ShowDetailsCard> )
            }
           </div>

            <div className="w-2/5">
            <Cart 
            addToCart={addToCart}
            counter ={counter}
            decrement ={decrement}
            increment ={increment}
            ></Cart>      
            </div>
           
            <ToastContainer />
        </div>
    );
};

export default ShowDetails;