<template>
  <div id="main">

  <div class="movie" v-for="(movie,index) in movies" v-bind:key="index">
    <div>
      <img :src ="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="image">

      <div class="movie-info">
        <h3>{{movie.title}}</h3>
        <span class="color">{{movie.vote_average}}</span>
      </div>

      <div class="overview">
        <h3>Sinopse</h3>
        {{movie.overview}}
      </div>
    </div>
  </div>

  

  </div>
</template>

<script>
export default {
  name: 'Films'
  ,
   data(){
    return{
      movies: null,
      limitationList: 3
    }
  },
  methods:{
    async getMovies(url){
      const req = await fetch(url);
      const data = await req.json();
      this.movies = data.results.slice(0,4);
      console.log(data);
      },
    async getImgUrl(poster_path){
      const imgUrl = IMG_URL+poster_path;
    }
    },
  mounted(){
    const BASE_URL ='https://api.themoviedb.org/3';
    const SEARCH_URL ='/search/movie?query=Jesus&sort_by=popularity&'
    const API_KEY = 'api_key=edc20af795da32d9f4591f67ee4e489b';
    const LANG_URL = '&language=pt-BR&include_image_language=pt-BR,null&page=1';
    const IMG_URL ='https://image.tmdb.org/t/p/w500';
    const API_URL = BASE_URL + SEARCH_URL+API_KEY+LANG_URL;

    this.getMovies(API_URL);
    
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
  
#main{
  background-color: #fff;
  font-family: inherit;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.movie{
  width: 400px;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);
  background-color: var(--primary-color);
  position: relative;
  overflow: hidden;
}

.movie img{
  width: 100%;
}

.movie-info{
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem .5rem .5rem;
  letter-spacing: 0.5px;
}

.movie-info h3{
  margin-top: 0;
  
}

.movie-info span{
  background-color: var(--seventh-color);
  padding: .25rem .5rem;
  border-radius: 3px;
  font-weight: bold;
}

.movie-info span.color{
  color: #fff;
}

.overview{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  padding: 1rem;
  max-width: 100%;
  transform: translateY(101%);
  transition: transform .3s ease-in;
}

.movie:hover .overview{
transform: translateY(0);
}

</style>