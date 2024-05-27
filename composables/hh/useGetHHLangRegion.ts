import axios from "axios"
import { type LangData } from '../../types/LangData'
import { newDateString } from "../useCurrData";

export const useGetHHLangRegion = async (lang: string, region: string): Promise<LangData[]> => {
    try {
        const store = useSettingStore()
        const response = await axios.get(
            store.getHOSTAPI + `hh/langRegion/${lang}/${region}`
            // `http://localhost:5000/api/v1/hh/langRegion/${lang}/${region}`
        );
            
        response.data.rows.forEach((element: { data: string; }) => {
            element.data = newDateString(element.data)
            // console.log(response.data.rows[0].data);
        });
        // console.log(response.data.rows);
        return response.data.rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            id: 1,
            lang: lang,
            vac: 1,
            vacref: '1',
            res: '1',
            region: region,
            data: '2024-01-10T21:00:00.000Z'
        }
    }
}