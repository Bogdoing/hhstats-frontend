// import axios from "axios"
// import { type LangDataGit } from '~/types/LangDataGit'

// export const useGetGit = async (date: string): Promise<LangDataGit[]> => {
//     try {
//         const response = await axios.get(
//             `http://localhost:5000/api/v1/git/data/${date}`);
            
//         // console.log(response.data.rows);
//         return response.data.rows;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         return {
//             id: 1,
//             count: 1,
//             lang: 'Php',
//             data: '2024-01-10T21:00:00.000Z'
//         }
//     }
// }