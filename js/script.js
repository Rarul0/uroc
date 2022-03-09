" use strict ";
let numberOfFilms;
function start (){
numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
}
}
start();
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private: false,
};

function  rememberMyFilms (){
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
}
rememberMyFilms ();
function detectPersonalLevel(){
    if ( personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('Вы класический зритель');
        }else if (personalMovieDB.count >= 30 ){
        console.log('Вы киноман');
        }else {
            console.log('Произошла ошибка');
        }
}
detectPersonalLevel();

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB (personalMovieDB.private);
 function writeYourGenres(){
     for(let i = 1; i <= 3; i++){
personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
     }
 }
 writeYourGenres();