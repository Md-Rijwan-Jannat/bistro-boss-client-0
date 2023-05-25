
const Recipe = ({ rec }) => {
    const { name, image, recipe } = rec;
    return (
        <div className="text-center bg-[#F3F3F3]">
            <img src={image} alt="" />
            <div className="p-5 space-y-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <button className="btn text-yellow-500 bg-[#E8E8E8] hover:bg-[#1F2937] border-b-yellow-500 border-b-4 border-t-0 border-r-0 border-l-0">Add To Card</button>
            </div>
        </div>
    );
};

export default Recipe;