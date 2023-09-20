
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai';

const Cart = ({addToCart, counter, increment, decrement}) => {
    const {strMealThumb, strMeal} = addToCart;
    
    
    
    
   


    return (
        <>
        <h1 className="mb-4 mt-12 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Cart</h1>
        <div className="flex justify-evenly items-center shadow-xl p-5 sticky top-5">
        
       <div className="w-24">
       <img className="w-24 rounded-full" src={strMealThumb} alt="" />
        <p className='mt-2 text-sm font-bold italic'>{strMeal}</p> 
       </div>
       
        
       <div className='flex text-3xl'>    
        
        <button onClick={decrement} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'><AiOutlineMinus></AiOutlineMinus></button>
        <p className='mx-2'>{counter} </p>
       
        <button onClick={increment} className='text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'> <AiOutlinePlus></AiOutlinePlus></button>
       </div>
       </div>
      
      
       </>
    );
};

export default Cart;