//  b44d74dba5591fb08e46387818be0f7f

const API_URL='https://api.themoviedb.org/3/movie/550?api_key=b44d74dba5591fb08e46387818be0f7f&page=1';

const  IMG_PATH= 'https://image.tmdb.org/t/p/w200'

const SEARCH_URL= 'https://api.themoviedb.org/3/search/movie?api_key=b44d74dba5591fb08e46387818be0f7f&query="'

const form=document.getElementById('form');

form.addEventListener('submit',(e)=>{
e.preventDefault()
const searchTerm=search.value;

if(searchTerm&&searchTerm!='')
{
    getmovies(SEARCH_URL+searchTerm);
}
else{
    window.location.reload();
}
});

async function getmovies(url)
{
    const res= await fetch(url);
    const data= await res.json();
    showMovies(data);
}


const main=document.getElementById('main');
function showMovies(movies)
{
    main.innerHTML='';
    const collections=movies.results;
    collections.forEach(collection => {
        const movieEl= document.createElement('div');
        movieEl.classList.add('movie');
         
        movieEl.innerHTML=`
            <img src="${IMG_PATH+collection.poster_path}">
            <div class="movie-title">
              <h3>${collection.title}</h3>
               <span class="${getclass(collection.vote_average)}">${collection.vote_average}</span>
            </div>
            <div class="overview">
               <h3>Overview</h3>
                ${collection.overview}
            </div>`;
       main.appendChild(movieEl);
    });

}

function getclass(rating){
    if (rating>=8)
    {
        return "green";
    }
    else if(rating >=5)
    {
        return "orange";
    }
    else return "red";
}