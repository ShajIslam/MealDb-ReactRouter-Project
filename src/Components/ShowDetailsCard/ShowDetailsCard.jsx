

const ShowDetailsCard = ({meal,handleCart}) => {
   const {strMealThumb, strMeal,strInstructions,strIngredient1,strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,} = meal
   




    return (
        <div>
            
           <div >
           <img className="w-full h-[400px]" src={strMealThumb} alt="" />
            <h1 className="text-2xl font-bold mt-5">{strMeal}</h1>
            <p className="text-sm mt-5">Instruction: {strInstructions}</p>
            
            <p><span className="text-2xl font-bold">Ingridiens:</span> {strIngredient1}, {strIngredient2}, {strIngredient3}, {strIngredient4}, {strIngredient5}, {strIngredient6}, {strIngredient7},{strIngredient8}, {strIngredient9}, {strIngredient10} </p>
            <br />
            <button onClick={()=>handleCart(meal)} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add To Cart</button>
           </div>
           
        </div>
    );
};

export default ShowDetailsCard;