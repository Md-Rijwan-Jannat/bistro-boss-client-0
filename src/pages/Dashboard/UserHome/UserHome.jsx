import useAuth from "../../../components/hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
           <h2 className="text-3xl"> Hi,<span className="text-yellow-600">{user?.displayName}</span></h2>
           <div>

           </div>
        </div>
    );
};

export default UserHome;