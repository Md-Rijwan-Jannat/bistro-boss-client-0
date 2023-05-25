
const Recipe = ({ rec }) => {
    const { name, image, recipe, price } = rec;
    return (
        <div className="relative text-center bg-[#F3F3F3] border rounded-md shadow">
            <img className="w-full rounded-t-md" src={image} alt="" />
            <p className="bg-slate-900 rounded-xl px-4 w-[86px] py-2 absolute right-5 top-5 text-white">{"$"+price}</p>
            <div className="p-5 space-y-3">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <button className="btn text-yellow-500 bg-[#E8E8E8] aria-selected:bg-[#1F2937] border-b-yellow-500 border-b-4 border-t-0 border-r-0 border-l-0">Add To Card</button>
            </div>
        </div>
    );
};

export default Recipe;