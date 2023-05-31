import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const [axiosSecure] = useAxiosSecure();
    // const token = localStorage.getItem("access-token");
    const { user } = useAuth()
    const { refetch, data: cart = [], isLoading } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`http://localhost:5000/carts?email=${user?.email}`)
            console.log("res from axios")
            return response.data
        }
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return response.json()
        // }
    })
    return [ cart, refetch, isLoading]
};

export default useCart;