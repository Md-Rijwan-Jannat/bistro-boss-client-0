import { Helmet } from "react-helmet";
import useUsers from "../../../components/hooks/useUsers";
import { FaTrashAlt, FaUserAltSlash } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";


const AllUsers = () => {
    const [users, refetch, isLoading] = useUsers();
    // console.log(users)
    const makeAdminHandler = (_id) => {
        fetch(`https://bistro-boss-server-rose.vercel.app/users/admin/${_id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    refetch();
                    toast.success(`${users.name} are new admin!`)
                }
            })
    }
    const deleteHandler = (_id) => {
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
                fetch(`https://bistro-boss-server-rose.vercel.app/users/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            if (isLoading) {
                               return <div className="h-[600px] flex items-center justify-center">
                                    <span className="loading loading-dots loading-md"></span>
                                </div>
                            }
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
        <div className="w-full h-screen">
            <Helmet><title>Bistro boss | All Users</title></Helmet>
            <h3 className="text-2xl font-semibold text-center py-8">All users {users.length}</h3>
            <div className="overflow-x-hidden lg:mx-16">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ? "admin" :
                                            <button onClick={() => makeAdminHandler(user._id)} className="btn px-2 bg-yellow-600 hover:bg-yellow-500 border-0"><FaUserAltSlash size={20}></FaUserAltSlash></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => deleteHandler(user._id)} className="btn px-2 bg-red-600 hover:bg-red-500 border-0"><FaTrashAlt size={20}></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;

