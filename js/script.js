const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {

    },
    actors : {

    },
    genres : [

    ],
    privat : false
};
const userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
const userFilmGrade = prompt("На сколько оцените его?", "5.0");

personalMovieDB["movies"][userLastFilm] = userFilmGrade;

console.log(personalMovieDB);