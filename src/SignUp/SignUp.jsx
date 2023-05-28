
import { Link } from 'react-router-dom';
import signUpImg from '../assets/others/authentication2.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import './SignUp.css';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const SignUp = () => {
    const { signUp } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signUp(data.email, data.password)
            .then(result => {
                const signedUser = result.user;
                console.log(signedUser)
              
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Register successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
              
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message);
            })
    };
    return (
        <div className='bg'>
            <Helmet><title>Bistro Boss | Sign Up</title></Helmet>
            <div className="hero h-full mt-28 rounded-md shadow-md  shadow-black border p-10">
                <div className="hero-content w-full flex-col lg:flex-row-reverse md:px-16">
                    <div className="text-center w-1/2 lg:text-left">
                        <img className='md:w-[650px]' src={signUpImg} alt="" />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
                        <div className="card-body ">
                            <h2 className='text-3xl text-center mt-10 mb-5'>Sign Up</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-400 mt-2'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400 mt-2'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" name='photo' {...register("photo", { required: true })} placeholder="photo" className="input input-bordered" />
                                {errors.photo && <span className='text-red-400 mt-2'>Photo field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    }
                                )} placeholder="password" className="input input-bordered" />
                                {errors?.password?.type === "required" &&
                                    <p className='text-red-400 mt-2'>Password field is required</p>}
                                {errors?.password?.type === "minLength" && (
                                    <p className='text-red-400 mt-2'>Password must be 6 characters</p>)}
                                {errors?.password?.type === "maxLength" && (
                                    <p className='text-red-400 mt-2'>Password length can not exceed 20 characters</p>)}
                                {errors?.password?.type === "pattern" && (
                                    <p className='text-red-400 mt-2'>your password type is one uppercase one lowercase letter or one number and special characters</p>)}
                            </div>
                            <div className="form-control">
                                <div className="form-control mt-6">
                                    <button className="btn border-0 rounded-none bg-[#D1A054] hover:bg-orange-400 btn-block">Sign up</button>
                                </div>
                            </div>
                            <p className='text-center mt-5'>You have a account ! <Link className='text-blue-500 font-bold' to={'/login'}>Login</Link></p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;