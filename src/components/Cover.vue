<template>
<div class="container">
  <div class="text">
    <h3>  bem vindo ao site</h3>
    <h2> Comunidade São José</h2>
    <h3 class="description">PARÓQUIA NOSSA SENHORA DA CONCEIÇÃO - MESSEJANA</h3>
  </div>
  
  
</div>
</template>

<script>
export default {
  name: 'Cover'
}
</script>

<style scoped>
.container{
  width: 100%;
  height: 630px;
  background-image: url('../assets/saint-joseph.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: var(--first-color);
  margin-top: 0;
}
.text{
  padding: 160px ;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h3{
  display: block;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
  padding-top: 5px;
  justify-content: center;
  font-size: 20px;
  color: var(--second-color);
  font-family: inherit;
  font-weight:100;
  text-transform: uppercase;
}

h2{
  display: block;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 60px;
  color: #fff;
  font-family: 'Old Standard TT', serif;
  text-transform: uppercase;
  font-weight:700;
}

@media(max-width:1140px){
  .container{
  width: 100%;
  height:550px;
  background-image: url('../assets/saint-joseph-mob.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: var(--first-color);
  margin-top: 0;
}


h2{
  font-size: 40px;
}

.description{
  display: none;
}

.text{
  padding:40px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
}


</style>