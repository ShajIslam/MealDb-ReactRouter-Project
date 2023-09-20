

const AllCategory = ({AllCategory}) => {
    const {strCategory,strCategoryThumb} = AllCategory
    return (
        <div className="border-2 border-indigo-600">
           
            <img className="w-full" src={strCategoryThumb} alt="" />
            <h1 className="font-bold">{strCategory}</h1>
           
        </div>
    );
};

export default AllCategory;