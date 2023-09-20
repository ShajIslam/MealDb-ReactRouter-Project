

const ShowDetailsCard = ({meal}) => {
   const {strMealThumb, strMeal} = meal
    return (
        <div className="border-2 indigo-800">
            <img className="w-60" src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <h1></h1>
        </div>
    );
};

export default ShowDetailsCard;