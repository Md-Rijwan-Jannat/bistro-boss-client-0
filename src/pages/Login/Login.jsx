import { useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication1.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../components/hooks/useAuth';


const Login = () => {
    const { loginUser } = useAuth();
    const [disabled, setDisabled] = useState(true);
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])
    const loginHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                    .catch(error => {
                        console.log(error)
                        toast.error(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message);
                toast.error(error.message)
            })
    }
    const HandleValidateCaptcha = (e) => {
        const captcha_value = e.target.value;
        console.log(captcha_value);
        if (validateCaptcha(captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true)
        }
    }
    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content w-full flex-col lg:flex-row md:px-16">
                <div className="text-center w-1/2 lg:text-left">
                    <img className='md:w-[650px]' src={loginImg} alt="" />
                </div>
                <div className="w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={loginHandle} className="card-body ">
                        <h2 className='text-3xl text-center mt-10 mb-5'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            < LoadCanvasTemplate />
                            <div className='m-3'>
                                <input type="captcha" onBlur={HandleValidateCaptcha} required placeholder="type here" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn border-0 rounded-none bg-[#D1A054] hover:bg-orange-400 btn-block">Login</button>
                            </div>
                        </div>
                        <p className='text-center mt-5'>You have no account ! <Link className='text-blue-500 font-bold' to={'/signUp'}>Create a account</Link></p>
                    </form>
                    <div className='text-center my-5 mx-5'> <SocialLogin></SocialLogin></div>
                </div>
            </div>
        </div>
    );
};

export default Login;