import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000' // Replace with your backend URL
});

const useAxiosSecure = () => {
    const { user } = useContext(AuthContext);

    // Request interceptor to add authorization header
    axiosSecure.interceptors.request.use(
        async (config) => {
            if (user) {
                const token = await user.getIdToken();
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
