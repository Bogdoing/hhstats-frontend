import axios from "axios"
import { type LangData } from '../../types/LangData'
import { newDateString } from "../useCurrData";

export const useGetPHHLangRegion = async (lang: string, region: string): Promise<LangData> => {
    try {
        const store = useSettingStore()
        const response = await axios.get(
            // process.env.HOSTAPI + `predict/hh/lang/${lang}/region/${region}`
            store.getHOSTAPI + `predict/hh/lang/${lang}/region/${region}`
            // `http://localhost:5000/api/v1/predict/hh/lang/${lang}/region/${region}`
        );

        response.data.rows.forEach((element: { data: string; }) => {
            element.data = newDateString(element.data)
            // console.log(response.data.rows[0].data);
        });
        
        // console.log(response.data.rows[0]);
        return response.data.rows[0];
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            id: 1,
            lang: lang,
            vac: 100000,
            vacref: '1',
            res: '1',
            region: region,
            data: '2024-01-10T21:00:00.000Z'
        }
    }
}
