import axios from "axios"
import { type LangDataGit } from '~/types/LangDataGit'

export const useGetGitData = async (date: string): Promise<LangDataGit[]> => {
    try {
        const response = await axios.get(
            `http://localhost:5000/api/v1/git/data/${date}`);
        
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
            count: 1,
            lang: 'Php',
            data: '2024-01-10T21:00:00.000Z'
        }
    }
}

function newDateString(dateString: string): string {
    // const dateString = '2024-01-09T21:00:00.000Z';
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // добавляем 1, так как месяцы в JavaScript начинаются с 0
    const day = (dateObject.getDate() + 1).toString().padStart(2, '0'); // добавляем 1, чтобы получить следующий день
    return `${year}-${month}-${day}`;
}