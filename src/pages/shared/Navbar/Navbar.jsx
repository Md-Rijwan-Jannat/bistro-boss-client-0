import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const link = <>
        <li><Link className="hover:text-yellow-500" to={'/'}>Home</Link></li>
        <li><Link className="hover:text-yellow-500" to={'/contact'}>CONTACT us</Link></li>
        <li><Link className="hover:text-yellow-500" to={'/'}>DASHBOARD</Link></li>
        <li><Link className="hover:text-yellow-500" to={'/menu'}>Our Menu</Link></li>
        <li><Link className="hover:text-yellow-500" to={'/'}>Our Shop</Link></li>
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-success btn-block">View cart</button>
                    </div>
                </div>
            </div>
        </div>
        <li><Link className="hover:text-yellow-500" to={'/'}>SIGN OUT <FaUser></FaUser></Link></li></>
    return (
        <div className="navbar bg-black fixed z-10 bg-opacity-30 max-w-screen-xl text-white uppercase">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-5 shadow bg-base-100 rounded-box w-52 font-semibold">
                        {link}
                    </ul>
                </div>
                <div className="flex flex-col p-5">
                    <a className="uppercase text-2xl font-bold">Bistro Boss</a>
                    <p className="uppercase text-xl">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden p-5 lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

