import { useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";


const AllCategories = () => {
    const data = useLoaderData();
     
    const categories = data? data.categories: [];
    

    return (
        <div className="grid grid-cols-3 mt-12 gap-12">
            
                {
                    categories.map((category, idx)=> <AllCategory key={idx} category={category}></AllCategory>)
                }
          
            
        </div>
    );
};

export default AllCategories;