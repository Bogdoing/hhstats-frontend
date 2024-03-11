import axios from "axios"

export const useFoo = async (): 
Promise<{ id: number, count: number, lang: string, data: string }> => {

    try {
        const response = await axios.get('http://localhost:5000/api/v1/git/dataLang/2024-01-11/Php');
        
        console.log(response.data.rows);
        console.log(response.data.rows[0].id)

        return response.data.rows[0];
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            id: 1,
            count: 1,
            lang: 'Php',
            data: '2024-01-10T21:00:00.000Z'
        };
    }
}