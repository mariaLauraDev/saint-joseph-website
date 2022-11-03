<template>
<div> 
  <Cover />

  <div class="quote">
    
    <span id="aspas" class="fa-solid fa-quote-left"></span>
    <span class="phrase">
      Só se ama aquilo que se conhece.
    </span>

    <div class="author">Santo Agostinho</div>
    
  </div>
  
  <Films /> 
</div>
</template>

<script>
import Cover from "../components/Cover.vue"
import Films from "../components/Films.vue"

export default {
  name: 'HomeView',
  components: {
    Cover,
    Films
  }
}
</script>

<style scoped>

.quote{

  display: block;
  text-align: center;
  margin: 50px auto;
  justify-content: center;
}

#aspas{
  margin:0 10px;
  color: var(--fiveth-color);
  font-size: 40px;

}
    
.quote .phrase{
  font-family: 'Old Standard TT', serif;
  font-size: 50px;
  text-align: left;
}

.quote .author, p{
  font-family: inherit;
  font-weight: 300;
  text-transform: uppercase;
  margin-top: 10px;
}

p{
  font-size: 40px;
}
</style>




