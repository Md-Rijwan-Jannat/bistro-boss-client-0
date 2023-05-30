import { FaBookMedical, FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { HiMenu } from "react-icons/hi"
import { AiFillContacts, AiFillShopping } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../components/hooks/useCart";
import { Helmet } from "react-helmet";


const DashBroad = () => {
    const [cart] = useCart();
    return (
        <>
        <Helmet><title>Bistro boss | Dashboard</title></Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] uppercase font-semibold text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><NavLink to={'/userHome'}><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to={'/reservation'}><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                        <li><NavLink to={'/payment'}><FaWallet></FaWallet> payment history</NavLink></li>
                        <li>
                            <div className="flex items-center">
                                <NavLink className={'flex items-center gap-2'} to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                                <span className="badge badge-sm bg-red-600 border-0 text-white indicator-item">+{cart?.length || 0}</span>
                            </div>
                        </li>
                        <li><NavLink to={'/review'}><MdReviews></MdReviews> add review</NavLink></li>
                        <li><NavLink to={'/myBooking'}><FaBookMedical></FaBookMedical> my booking</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/menu'}><HiMenu></HiMenu> Menu</NavLink></li>
                        <li><NavLink to={'/shop'}><AiFillShopping></AiFillShopping> Shopping</NavLink></li>
                        <li><NavLink to={'/contact'}><AiFillContacts></AiFillContacts> Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBroad;