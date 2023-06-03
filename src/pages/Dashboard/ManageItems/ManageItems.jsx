import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/hooks/useMenu";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

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

                axiosSecure.delete(`/menu/${_id}`)
                    .then(data => {
                        refetch();
                        if (data.data.deletedCount) {
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
        <div className="w-ful h-screen">
            <Helmet><title>Bistro Boss | Manage items</title></Helmet>
            <SectionTitle subHeading="---Hurry Up!---" Heading="Manage Items"></SectionTitle>
            <div className="overflow-x-hidden- w-full bg-base-200 p-5 rounded-xl">
                <table className="table w-full bg-white">
                    {/* head */}
                    <thead className="">
                        <tr>
                            <th>#
                            </th>
                            <th>Food</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr
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
                                    {item.name}
                                </td>
                                <td>{'$' + item.price}</td>
                                <th>
                                    <button onClick={() => deleteHandler(item._id)} className="btn px-2 bg-[#D1A054] hover:bg-yellow-600 border-0"><FaRegEdit size={20}></FaRegEdit></button>
                                </th>
                                <th>
                                    <button onClick={() => deleteHandler(item._id)} className="btn px-2 bg-red-600 hover:bg-red-500 border-0"><FaTrashAlt size={20}></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems;