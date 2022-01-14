const { get } = require('axios');
const path = require('path');
const fs = require('fs').promises;

async function start() {
    const { data } = await get('https://people.sc.fsu.edu/~jburkardt/data/csv/deniro.csv');
    const movies = convertCSVToMovies(data);
    const moviesGroupedByYear = groupByYear(movies);
    await fs.writeFile(path.join(__dirname, `movies_${Date.now()}.json`), JSON.stringify(moviesGroupedByYear, undefined, 2));
}

function convertCSVToMovies(csvData){
    const rows = csvData.split('\n').slice(1, -22);
    const csv2DArray = rows.map(row => row.split(',').map(column => column.trim().replace(/"/g, '')));
    return csv2DArray.map(row => ({ year: row[0], score: row[1], title: row[2] }));
}

function groupByYear(movies) {
    const years = {};
    for (const movie of movies) {
        if (years[movie.year]) {
            years[movie.year].push(movie.title);
        } else {
            years[movie.year] = [movie.title];
        }
    }
    return years;
}

start().catch(error => console.error(error));