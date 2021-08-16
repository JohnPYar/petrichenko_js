let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

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



function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {

        let userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
    
        while (!userLastFilm || userLastFilm =='' || userLastFilm.length > 50 ) {
            alert('Повторите ввод!');
            userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
        }
    
        let userFilmGrade = prompt("На сколько оцените его?", "5.0");
    
        while (!userFilmGrade || userFilmGrade =='' || userFilmGrade.length > 4 || isNaN(userFilmGrade)) {
            alert('Повторите ввод!');
            userLastFilm = prompt("Один из последних просмотренных фильмов?", "");
        }
    
        personalMovieDB.movies[userLastFilm] = userFilmGrade;
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
        console.log('Вы классический зритель.');
    } else if (personalMovieDB.count > 30){
        console.log('Вы киноман.');
    } else {
        console.log('Произошла ошибка!');
    }
}

detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for (let i=0; i<3; i++){
        let answerGenre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        while (answerGenre == '' || answerGenre == null || !isNaN(answerGenre)){
            answerGenre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        }
        personalMovieDB.genres[i] = answerGenre;
    }
}

writeYourGenres();

showMyDB();