" use strict ";
const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private: false,
};

const one = prompt ("Один из последних просмотренных фильмов?", "");
      two = prompt ("На слолько оцените его",'');
      tree =  prompt ("Один из последних просмотренных фильмов?", "");
      four = prompt ("На слолько оцените его",'');


      
personalMovieDB.movies[one] = two;
personalMovieDB.movies[tree] = four;

console.log(personalMovieDB);