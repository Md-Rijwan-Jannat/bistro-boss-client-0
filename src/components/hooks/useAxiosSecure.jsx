import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';



const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-rose.vercel.app',
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();


    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const accessToken = localStorage.getItem('access-token');
            if (accessToken) {
                config.headers['Authorization'] = `Bearer ${accessToken}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        )
    }, [logOut, navigate])

    return [axiosSecure];
};

export default useAxiosSecure;
