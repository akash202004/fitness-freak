export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
        'X-RapidAPI-Key': '64030af90dmsh39a363111539b15p1633f0jsn0741028068e1',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const ytOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '64030af90dmsh39a363111539b15p1633f0jsn0741028068e1',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()
    return data;
}

const promise = fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100', exerciseOptions);

// promise.then(data => {
//     console.log(data); // This will log the array of 100 items
//     // You can now work with the data array here
// }).catch(error => {
//     console.error('Error fetching data:', error);
// });


