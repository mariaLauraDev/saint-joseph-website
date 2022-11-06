<template>
  <div>
    <div class="quote">
    
    <span id="aspas"> <img src="../assets/films/aspas.png"> </span>
    <span class="phrase">
      Só se ama aquilo que se conhece.
    </span>
    <span id="aspas"> <img src="../assets/films/aspas2.png"> </span>
    <div class="author">Santo Agostinho</div>

    <p> É importante buscar viver a fé no ordinário dos nossos dias. Busque por bons filmes para assistir com sua família e, assim, alimentar sua fé! A seguir, tem-se filmes da base de dados <a href="https://www.themoviedb.org/" > The Movie Database</a>.</p>
    <Films />
  </div>
  </div>
</template>

<script>

import Films from "../components/Films.vue"

export default {
  name: 'KnowTheFaith',
  components:{
    Films
  }
}
</script>

<style scoped>
.quote{
  display: block;
  text-align: center;
  margin: 30px auto;
  justify-content: center;
}


#aspas img{
  margin:0 10px;
  width: 60px;
  color: var(--fiveth-color);
  font-size: 40px;

}
    
.quote .phrase{
  font-family: 'Old Standard TT', serif;
  font-size: 50px;
  text-align: left;
}

.quote .author{
  font-family: inherit;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 10px;
}

p{
  width: 65%;
  font-size: 16px;
  text-align: left;
  margin: 20px auto;
}

a{
  color: #29BBD2;
  text-decoration: none;

  
}
</style>