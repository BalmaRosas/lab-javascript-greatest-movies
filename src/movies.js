// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {}

// const getAllDirectors = movies.map((element, index,) => {
//     return element.director
// });

// // console.log(getAllDirectors)

// const getAllDirectors = (array) => {
//     const rawList = array.map((element) => element.director)

//     // bonus
//     const cleanList = rawList.filter((director, index) =>
//         rawList.indexOf(director) === index
//     )
//     return cleanList
// };

// console.log(getAllDirectors(movies))

// // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// // function howManyMovies(moviesArray) {}
// const howManyMovies = movies.filter((element, index) => {
//     return element.director === 'Steven Spielberg'
//     // return element.director === 'Steven Spielberg' && element.genre == 'Drama'
// });
// console.log(howManyMovies)

// const onlyDrama = howManyMovies.filter((element) => {
//     return element.genre.includes('Drama') 
//     // QUÉ CARAJOS HAY UE PONER DENTRO DEL BRACKET PARA QUE LOS COJA A TODOS?¿?¿
// });
// console.log(onlyDrama)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
// function scoresAverage(moviesArray) {}

// var scoresAverage = movies.reduce((totalMovies, movies) => {
//     totalMovies = totalMovies + movies.score;
//     return totalMovies;
// }, 0);

// scoresAverage = scoresAverage / movies.length

// console.log(scoresAverage)

// const scoresAverage = (array) => {
//     const sumAllScores = movies.reduce((totalMovies, element) => {
//         totalMovies = totalMovies + element.score;
//         return totalMovies
//     },0);
//     const average = sumAllScores / array.length;
//         return average
// }

// console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
// function dramaMoviesScore(moviesArray) {}

const dramaMoviesScore = (array) => {
    const arrayCopy = array.slice();
    return arrayCopy
    
    const dramaArray = arrayCopy.filter((element) => {
    return element.genre.includes('Drama')
    }); 
    
};
console.log(dramaMoviesScore(movies))
// console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
