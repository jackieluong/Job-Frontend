import axios, { AxiosError } from "axios";


const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth`;
class AuthService{
    static async login(data) {
        
        const {email, password} = data;
        try {
            const response = await axios.post(`${apiUrl}/login`, {
                email: email,
                password: password
            })

            return response.data;
        } catch (error: AxiosError | any) {
            
            throw new Error(error.response.data.message);
        }
    }
        
}

export default AuthService;