import axios from "axios";
import qs from "qs";
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "application/json",
    },
    paramsSerializer: params => {
        // Filter out null/undefined/empty string values
        const cleaned = Object.fromEntries(
            Object.entries(params).filter(
                ([, value]) =>
                    value !== null &&
                    value !== undefined &&
                    !(typeof value === 'string' && value.trim() === '')
            )
        );
        return qs.stringify(cleaned, { arrayFormat: "repeat" });
    }
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem("accessToken"));
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
export default axiosInstance;