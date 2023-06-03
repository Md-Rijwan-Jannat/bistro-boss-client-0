import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";



const useUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch ,isLoading} = useQuery(["users"], async () => {
        console.log(users)
        const res = await axiosSecure.get("/users")
        return res.data;
    })
    return [users, refetch, isLoading];
};

export default useUsers;