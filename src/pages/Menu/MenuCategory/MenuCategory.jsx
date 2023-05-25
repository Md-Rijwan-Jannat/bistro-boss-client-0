
import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";


const MenuCategory = ({ items, img, title, details }) => {
    return (
        <section>
            {
                title && <Cover img={img} coverTitle={title} coverDetails={details}></Cover>
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center items-center">
                {
                    items.map(item => <MenuItem

                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-5">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </Link>
            </div>
        </section>
    );
};

export default MenuCategory;