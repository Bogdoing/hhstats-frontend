//useGetHHDataRegion

import axios from "axios"
import { type LangData } from '../../types/LangData'
import { newDateString } from "../useCurrData";

export const useGetHHDataRegion = async (data: string, region: string): Promise<LangData[]> => {
    try {
        console.log(data + ' ' + region);
        const response = await axios.get(
            `http://localhost:5000/api/v1/hh/dataRegion/${data}/${region}`);
            
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
            lang: 'lang',
            vac: 1,
            vacref: '1',
            res: '1',
            region: region,
            data: data
        }
    }
}
