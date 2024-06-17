export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/status',
    headers: {
        'x-rapidapi-key': '64030af90dmsh39a363111539b15p1633f0jsn0741028068e1',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
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

const bmiCalculator = {
    method: 'POST',
    url: 'https://bmi.p.rapidapi.com/v1/bmi',
    headers: {
        'x-rapidapi-key': '64030af90dmsh39a363111539b15p1633f0jsn0741028068e1',
        'x-rapidapi-host': 'bmi.p.rapidapi.com',
        'Content-Type': 'application/json'
    },
    data: {
        weight: {
            value: '85.00',
            unit: 'kg'
        },
        height: {
            value: '170.00',
            unit: 'cm'
        },
        sex: 'm',
        age: '24',
        waist: '34.00',
        hip: '40.00'
    }
};


