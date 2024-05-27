import axios from "axios"
import { type LangData } from '../../types/LangData'
import { newDateString } from "../useCurrData";

export const useGetHHLangDate = async (lang: string, date: string): Promise<LangData[]> => {
    http://localhost:5000/api/v1/hh/langData/Kotlin/2024-01-10
    try {
        const store = useSettingStore()
        const response = await axios.get(
            store.HOSTAPI + `hh/langData/${lang}/${date}`
            // `http://localhost:5000/api/v1/hh/langData/${lang}/${date}`
        );
           
        response.data.rows.forEach((element: { data: string; }) => {
            element.data = newDateString(element.data)
            // console.log(response.data.rows[0].data);
        });
            
        //console.log(response.data.rows[0].data);
        return response.data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            id: 1,
            lang: 'Php',
            vac: 1,
            vacref: '1',
            res: '1',
            region: '1',
            data: '2024-01-10T21:00:00.000Z'
        }
    }
}

