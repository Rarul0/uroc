" use strict ";

const personalMovieDB = {
    count : 0, 
    movies : {},
    actors : {},
    genres : [],
    private: false,
    start: function (){
        personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt ("Сколько фильмов вы уже посмотрели ?", "");
        }
    },
    rememberMyFilms: function (){
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
    },
    detectPersonalLevel: function(){
        if ( personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log('Вы класический зритель');
            }else if (personalMovieDB.count >= 30 ){
            console.log('Вы киноман');
            }else {
                console.log('Произошла ошибка');
            }
    },
    showMyDB: function (hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggLeVisibleMyDB: function(){
        if(personalMovieDB.private ){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i <= 3; i++){
        let genre =prompt (`Ваш любимый жанр под номером ${i}`);
        if (genre === '' || genre == null){
            console.log('Вы ввели не корректные даные или не ввели их вовсе');
            i--;
        }else{
            personalMovieDB.genres[i-1] = genre;
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
        }
    },
    

};





