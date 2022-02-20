" use strict ";
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private: false,
};



for (let i =0; i < 2; i++){
    const one = prompt ("Один из последних просмотренных фильмов?", "");
    const two = prompt ("На слолько оцените его",'');

    if (one != null && two != null && one != '' && two != '' && one.length < 50 && two.length < 50) {
        personalMovieDB.movies[one] = two;
        console.log( 'done');
    }else{
        console.log('error');
        i--;
    }
    
}


if ( personalMovieDB.count < 10) {
console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
console.log('Вы класический зритель');
}else if (personalMovieDB.count >= 30 ){
console.log('Вы киноман');
}else {
    console.log('Произошла ошибка');
}


console.log(personalMovieDB);