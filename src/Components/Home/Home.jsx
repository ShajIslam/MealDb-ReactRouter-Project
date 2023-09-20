import Catagory from "../Catagory/Catagory";
import {useLoaderData } from "react-router-dom";


const Home = () => {
    

    const data = useLoaderData();
    const categories = data? data.meals:[];
  
    
      
    return (
        <div>  
            <br />
            <br />
            <br />
           
           <div className="grid grid-cols-3 gap-24">

           
       {
         categories.map((catagory, idx) => <Catagory key={idx} catagory ={catagory}></Catagory>)
             
       }

           </div>
          
        </div>
    );
};

export default Home;