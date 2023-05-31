import { Helmet } from "react-helmet";
import useCart from "../../../components/hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyCart = () => {
    const [cart, refetch, isLoading] = useCart();
    const total = cart.reduce((sum , item) => item.price + sum , 0)
    const deleteHandler = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            isLoading();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="w-full ml-10 h-screen">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="uppercase flex h-[100px] justify-evenly items-center" >
                <h2 className="text-2xl font-semibold">Total items: {cart.length}</h2>
                <h2 className="text-2xl font-semibold">Total Price: {"$"+total}</h2>
                <button className="btn bg-[#D1A054] border-0 hover:bg-yellow-600" >Pay</button>
            </div>
            <div>
                <div className="overflow-x-hidden w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Food</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20 h-20">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.recipeName}
                                    </td>
                                    <td>{item.price}</td>
                                    <th>
                                        <button onClick={() => deleteHandler(item._id)} className="btn px-2 bg-red-600 hover:bg-red-500 border-0"><FaTrashAlt size={20}></FaTrashAlt></button>
                                    </th>
                                </tr>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;