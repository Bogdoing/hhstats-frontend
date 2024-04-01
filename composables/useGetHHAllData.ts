import axios from "axios"
import { type LangData } from '../types/LangData'
import { newDateString } from "./useCurrData";

export const useGetHHAllData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/hh/allData');
            
        response.data.rows.forEach((element: { data: string; }) => {
            element.data = newDateString(element.data)
            // console.log(response.data.rows[0].data);
        });    
        // console.log(response.data.rows);
        return response.data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: 'data' }
    }
}