<template>
<div class="container">
  <div class="header_one">bem vindo ao site</div>

  <div class="header_two">Comunidade São José</div>

  <div class="header_three"> PARÓQUIA NOSSA SENHORA DA CONCEIÇÃO - MESSEJANA </div>

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
  background-color: var(--primary-color);
  margin-top: 0;
}

.header_one{
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 200px;
  padding-bottom: 30px;
  justify-content: center;
  font-size: 20px;
  color: var(--fiveth-color);
  font-family: inherit;
  font-weight:100;
  text-transform: uppercase;
}

.header_two{
  display: block;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 60px;
  color: #fff;
  font-family: 'Old Standard TT', serif;
  text-transform: uppercase;
  font-weight:700;
}

.header_three{
  display: block;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  font-size: 20px;
  color: var(--fiveth-color);
  font-family: inherit;
  text-transform: uppercase;
  font-weight:300;
}

@media(max-width:1140px){
  .container{
  width: 100%;
  height: 550px;
  background-image: url('../assets/saint-joseph-mob.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  background-color: var(--primary-color);
  margin-top: 0;
}

.header_one{
  padding: 60px;
  padding-bottom: 20px;
}

.header_two{
  font-size: 40px;
}

.header_three{
  display: none;

}

}


</style>