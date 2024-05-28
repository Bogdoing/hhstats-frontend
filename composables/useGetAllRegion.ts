import axios from "axios"
import { type LangData } from '../types/LangData'
import { newDateString } from "./useCurrData";

export const useGetAllRegion = async () => {
    try {
        const store = await useSettingStore()
        const response = await axios.get(
            store.HOSTAPI + 'hh/allRegion'          
        )
        return response.data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: 'data' }
    }
}