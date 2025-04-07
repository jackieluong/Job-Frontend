import axios from "axios"

const locationApi = "https://provinces.open-api.vn"


export const fetchProvinces = async () => {
    try {
        const response = await axios.get(`${locationApi}/api/p/`)
        
        return response.data;
    } catch (error) {
        console.error("Error fetching provinces", error)
        return [];
    }
}

export const fetchDistrict = async (provinceCode: number) => {
    try {
        const response = await axios.get(`${locationApi}/api/p/${provinceCode}`, {
            params:{
                depth: 2
            }
        })
        return response.data.districts;
    } catch (error) {
        console.error("Error fetching provinces", error)
        return [];
    }
}