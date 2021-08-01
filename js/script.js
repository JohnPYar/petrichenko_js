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
const userLastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const userFilmGrade1 = prompt("На сколько оцените его?", "5.0");

personalMovieDB["movies"][userLastFilm1] = userFilmGrade1;

const userLastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const userFilmGrade2 = prompt("На сколько оцените его?", "5.0");

personalMovieDB["movies"][userLastFilm2] = userFilmGrade2;

console.log(personalMovieDB);