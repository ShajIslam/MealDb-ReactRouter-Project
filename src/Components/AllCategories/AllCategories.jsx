import { useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";



const AllCategories = () => {
    const data = useLoaderData();

    const categories = data? data.categories: [];
   
    return (
        <div className="grid grid-cols-3 gap-10 mt-12">
          
           
            {
                categories.map((Allcategory,idx)=> <AllCategory key={idx} AllCategory={Allcategory}></AllCategory>)
            }
        </div>
    );
};

export default AllCategories;