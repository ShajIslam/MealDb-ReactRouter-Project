import { Link } from "react-router-dom";

const Catagory = ({catagory}) => {
    const {idMeal, strMeal,strMealThumb} = catagory;




    return (
        <div className="border-2 border-indigo-600">
           
            <img className="w-full" src={strMealThumb} alt="" />
            <h1 className="font-bold">{strMeal}</h1>
           <Link to={`/home/${idMeal}`}> <button className="w-full mt-5 bg-indigo-400 text-white p-2">Show Details</button></Link>
        </div>
    );
};

export default Catagory;