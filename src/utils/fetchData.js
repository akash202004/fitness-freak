export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
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

const res = fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=20', exerciseOptions);
console.log(res.PromiseResult);

// export const fetchExerciseFromAPI = async (limit) => {
//     const url = `https://exercisedb.p.rapidapi.com/exercises?limit=${limit}`
//     const data = await fetchData(url, exerciseOptions);
//     return data;
// }

