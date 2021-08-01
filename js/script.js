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
// const userLastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
// const userFilmGrade1 = prompt("На сколько оцените его?", "5.0");

// personalMovieDB.movies[userLastFilm1] = userFilmGrade1;

// const userLastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
// const userFilmGrade2 = prompt("На сколько оцените его?", "5.0");

// personalMovieDB.movies[userLastFilm2] = userFilmGrade2;

// console.log(personalMovieDB);

for (let i = 0; i < 2; i++) {

    let userLastFilm = prompt("Один из последних просмотренных фильмов?", "");

    while (!userLastFilm || userLastFilm =='' || userLastFilm.length > 50 ) {
        alert('Повторите ввод!');
        userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
    }

    let userFilmGrade = prompt("На сколько оцените его?", "5.0");

    while (!userFilmGrade || userFilmGrade =='' || userFilmGrade.length > 4 ) {
        alert('Повторите ввод!');
        userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
    }

    personalMovieDB.movies[userLastFilm] = userFilmGrade;
}

if (numberOfFilms < 10){
    console.log('Просмотрено довольно мало фильмов.');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30){
    console.log('Вы классический зритель.');
} else if (numberOfFilms > 30){
    console.log('Вы киноман.');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);
