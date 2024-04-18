export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': '64030af90dmsh39a363111539b15p1633f0jsn0741028068e1',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
    return data;
}