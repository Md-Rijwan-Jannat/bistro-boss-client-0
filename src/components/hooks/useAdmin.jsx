import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin , isLoading: isAdminLogin} = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLogin]
};

export default useAdmin;