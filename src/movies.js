// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

//const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const allDirectors = movies.map(function (movie) {
    return movie.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergMovies = movies.filter(function (movie) {
    if (
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama') === true
    ) {
      return true;
    }
  });
  let counter = 0;
  for (let i = 0; i < spielbergMovies.length; i++) {
    counter += 1;
  }
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scoreTotal = movies.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
  const scoreAverage = scoreTotal / movies.length;
  return Number(scoreAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (drama) {
    if (drama.genre.includes('Drama') === true) {
      return true;
    } else {
      return false;
    }
  });
  const scoreDrama = dramaMovies.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
  const dramaAverage = scoreDrama / dramaMovies.length;
  return Number(dramaAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortMoviesByYear = [...movies];
  sortMoviesByYear.sort((a, b) => {
    if (a.year - b.year == 0)
      return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    else return a.year - b.year;
  });
  return sortMoviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
