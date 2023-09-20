import { useLoaderData } from "react-router-dom";
import ShowDetailsCard from "../ShowDetailsCard/ShowDetailsCard";


const ShowDetails = () => {
    const data = useLoaderData();
    const meals = data? data.meals: [];

    console.log(meals);

    return (
        <div>
            <h1>Show details:{meals.length}</h1>
            {
                meals.map((meal, idx)=> <ShowDetailsCard key={idx} meal={meal}></ShowDetailsCard> )
            }

        </div>
    );
};

export default ShowDetails;