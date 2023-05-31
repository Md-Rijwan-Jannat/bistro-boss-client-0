import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    return (
        <section className="mb-16">
            <SectionTitle
                subHeading={"---Check it out---"}
                Heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                {
                    popular.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/salad`} className="btn btn-outline border-0 border-b-4">Order Now</Link>
        </section>
    );
};

export default PopularMenu;