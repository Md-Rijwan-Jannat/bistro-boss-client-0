
const MenuItem = ({ item }) => {
    const { name, image, recipe, price, } = item;
    return (
        <div className="space-y-4 mb-10 md:flex space-x-3 justify-center items-center">
            <img style={{ borderRadius: "0 200px 200px 200px" }} className="w-[128px]" src={image} alt="" />
            <div className="text-[#737373]">
                <h3 className="text-xl uppercase">{name} --------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{"$" + price}</p>
        </div>
    );
};

export default MenuItem;