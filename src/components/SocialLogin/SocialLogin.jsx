import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const SocialLogin = () => {
    const { google } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const googleHandler = () => {
        google()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
                fetch(`https://bistro-boss-server-rose.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                        toast.success('login Successfully!')
                    })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">or</div>
            <div>
                <button onClick={googleHandler} className="btn btn-circle btn-outline">
                    <FaGoogle size={26}></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;