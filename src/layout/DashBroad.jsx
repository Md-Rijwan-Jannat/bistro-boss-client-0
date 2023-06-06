import { FaBookMedical, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaWallet } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { HiMenu } from "react-icons/hi"
import { AiFillContacts, AiFillShopping } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../components/hooks/useCart";
import { ImAddressBook, ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { Helmet } from "react-helmet";
import useAdmin from "../components/hooks/useAdmin";


const DashBroad = () => {
    const [cart] = useCart();
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className=" bg-slate-300">
            <Helmet><title>Bistro boss | Dashboard</title></Helmet>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content text-center mt-5">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] uppercase font-semibold text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                            isAdmin ? <>
                                <li><NavLink to={'/dashboard/adminHome'}><FaHome size={20}></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to={'/dashboard/addItems'}><ImSpoonKnife size={20}></ImSpoonKnife> add items</NavLink></li>
                                <li><NavLink to={'/dashboard/manageItems'}><TfiMenuAlt size={20}></TfiMenuAlt> manage items</NavLink></li>
                                <li>
                                    <NavLink className={'flex items-center size={20} gap-2'} to={'/dashboard/manageBooking'}><ImAddressBook></ImAddressBook> manage booking</NavLink>
                                </li>
                                <li><NavLink to={'/dashboard/allUsers'}><FaUsers size={20}></FaUsers> all user</NavLink></li>
                            </> : <>
                                <li><NavLink to={'/dashboard/userHome'}><FaHome size={20}></FaHome> User Home</NavLink></li>
                                <li><NavLink to={'/reservation'}><FaCalendarAlt size={20}></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to={'/payment'}><FaWallet size={20}></FaWallet> payment history</NavLink></li>
                                <li>
                                    <div className="flex items-center">
                                        <NavLink className={'flex items-center size={20} gap-2'} to={'/dashboard/myCart'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                                        <span className="badge badge-sm bg-red-600 border-0 text-white indicator-item">+{cart?.length || 0}</span>
                                    </div>
                                </li>
                                <li><NavLink to={'/review'}><MdReviews size={20}></MdReviews> add review</NavLink></li>
                                <li><NavLink to={'/myBooking'}><FaBookMedical size={20}></FaBookMedical> my booking</NavLink></li>
                            </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to={'/'}><FaHome size={20}></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/menu'}><HiMenu size={20}></HiMenu> Menu</NavLink></li>
                        <li><NavLink to={'/shop'}><AiFillShopping size={20}></AiFillShopping> Shopping</NavLink></li>
                        <li><NavLink to={'/contact'}><AiFillContacts size={20}></AiFillContacts> Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBroad;