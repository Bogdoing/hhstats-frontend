import axios from "axios"
import { type LangData } from '../types/LangData'
import { newDateString } from "./useCurrData";

export const useGetAllLeng = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/hh/allLang');
            
        // response.data.rows.forEach((element: { data: string; }) => {
        //     element.data = newDateString(element.data)
        //     // console.log(response.data.rows[0].data);
        // });    
        // console.log(response.data.rows);
        return getAllLeng(response.data.rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        return { data: 'data' }
    }
}

const getAllLeng = (langs: any) => { 
    let res = []
    //let langs = await useGetAllLeng()
    // console.log(langs)

    for (let i = 0; i < langs.length; i++) {
        res[i] = langs[i].lang
    }
    return res
}