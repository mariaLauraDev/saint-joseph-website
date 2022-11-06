<template>
<div>
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

  <div type="button" class="show" id="show">Ver mais</div>

  <div class="pagination">

    <div class="page" id="first">Primeiro</div>
    <div class="page" id="prev">Anterior</div>
    <div class="current" id="current">{{currentPage}}</div>
    <div class="page" id="next">Próxima</div>
    <div class="page" id="last">Último</div>

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
      limitationList: null,
      lastUrl: null,
      currentPage: 1,
      nextPage: null,
      prevPage: null,
      totalPages: null,
      firstPage: 1,
      prev: document.getElementById('prev'),
      next: document.getElementById('next'),
      current: document.getElementById('current'),
      last: document.getElementById('last'),
      first: document.getElementById('first'),
      show: document.getElementById('show')

    }
  },
  methods:{
    async getMovies(url){
      
      const req = await fetch(url);
      const data = await req.json();

      this.lastUrl = url;
      this.currentPage = data.page;
      this.nextPage = this.currentPage + 1 ;
      this.prevPage = this.currentPage - 1;
      this.totalPages = data.total_pages;

      
      this.movies = data.results.slice(0,3);

      if(this.currentPage=1){
        this.prev.classList.add("disabled");
        this.next.classList.remove("disabled");
        this.first.classList.add("disabled");
        this.last.classList.remove("disabled");
      } else if (this.currentPage >= this.totalPages){
        this.prev.classList.remove("disabled");
        this.next.classList.add("disabled");
        this.first.classList.remove("disabled")
        this.last.classList.add("disabled");
      }else{
        this.prev.classList.remove("disabled");
        this.next.classList.remove("disabled");
        this.first.classList.remove("disabled");
        this.last.classList.remove("disabled");
      }

      tagsEl.scrollIntoView({behavior : 'smooth'})
      },
    async showMore(url){
      const req = await fetch(url);
      const data = await req.json();
      
      this.lastUrl = url;
      this.currentPage = data.page;
      this.nextPage = this.currentPage + 1 ;
      this.prevPage = this.currentPage - 1;
      this.totalPages = data.total_pages;

      this.movies = data.results;

    },
    async getImgUrl(poster_path){
      const imgUrl = IMG_URL+poster_path;
    },
    async pageCall(page){
      let urlSplit = this.lastUrl.split('?');
      let queryParams = urlSplit[1].split('&');
      let key = queryParams[queryParams.length-1].split('=');
      if(key[0] != 'page'){
        let url = this.lastUrl + '&page='+page;
        this.showMore(url);
      } else{
        key[1] = page.toString();
        let a = key.join('=');
        queryParams[queryParams.length-1] =a;
        let b = queryParams.join('&');
        let url = urlSplit[0] + '?'+ b;
        this.showMore(url);
      }
    }
    },
  mounted(){
    const BASE_URL ='https://api.themoviedb.org/3';
    const SEARCH_URL ='/search/movie?query=Jesus&sort_by=popularity&'
    const API_KEY = 'api_key=edc20af795da32d9f4591f67ee4e489b';
    const LANG_URL = '&language=pt-BR&include_image_language=pt-BR,null';
    const IMG_URL ='https://image.tmdb.org/t/p/w500';
    const API_URL = BASE_URL + SEARCH_URL+API_KEY+LANG_URL;

    this.getMovies(API_URL);
    
    
    show.addEventListener('click', ()=> {
      this.showMore(API_URL);
      show.classList.add("disabled");
    });

    first.addEventListener('click', ()=> {
      if(this.currentPage > 1){
        this.pageCall(this.firstPage);
      }
    });

    last.addEventListener('click', ()=> {
      if(this.totalPages > 0){
        this.pageCall(this.totalPages);
      }
    });

    prev.addEventListener('click', ()=> {
      if(this.prevPage > 0){
        this.pageCall(this.prevPage);
      }
    });

    next.addEventListener('click', ()=> {
      if(this.nextPage <= this.totalPages){
        this.pageCall(this.nextPage);
      }
    });
  }
}
</script>

<style scoped>
  
#main{
  background-color: #fff;
  font-family: inherit;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.movie{
  width: 300px;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);
  background-color: var(--first-color);
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
  background-color: var(--third-color);
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

.pagination{
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  color: var(--first-color);
}

.page{
  padding: 20px;
  cursor: pointer;
}

.page .disabled{
  display: none;
}

.current{
  padding: 10px 20px;
  color: #fff;
  background-color: var(--first-color);
  border: 3px solid var(--first-color);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: .5s;
  }


  .page {
  padding: 10px 20px;
  border: 3px solid rgba(24,29,38,.2);
  font-size: 16px;
  cursor: pointer;
  transition: .5s;
  margin: 5px 20px 5px 20px;
  }

.page:hover{
  color: #fff;
  background-color: var(--first-color);
  border: 3px solid var(--first-color);
}

.show{
  width: 30%;
  margin: 30px auto;
  padding: 10px 20px;
  color: var(--first-color);
  background-color: #fff;
  border: 3px solid rgba(24,29,38,.2);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: .5s;
}

.show:hover{
  color: #fff;
  background-color: var(--first-color);
  border: 3px solid var(--first-color);
}

.show.disabled{
  display: none;
}


@media(max-width:1140px){
  .pagination{
    flex-direction: column;
  }
  
}
</style>