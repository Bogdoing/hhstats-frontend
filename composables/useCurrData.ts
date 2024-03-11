export const newDateString = (dateString: string): string => {
    // const dateString = '2024-01-09T21:00:00.000Z';
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // добавляем 1, так как месяцы в JavaScript начинаются с 0
    const day = (dateObject.getDate() + 0).toString().padStart(2, '0'); // добавляем 1, чтобы получить следующий день
    return `${year}-${month}-${day}`;
}