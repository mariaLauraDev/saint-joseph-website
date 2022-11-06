<template>
<div>
  <div class="head"> 
      <h2> CRONOGRAMA SEMANAL </h2>
    </div>

  <div class="container">

    <div class="day-container"> 
      <div class="header">
        Domingo
      </div>
      <div class="content">
        <div><span class="time"> 07:00 </span> Missa dominical </div>
        <div><span class="time"> 08:30 </span> Catequese de Jovens</div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Segunda
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Grupo de Reflexão </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Terça
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Terço da Família </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Quarta
      </div>
      <div class="content">
        <div><span class="time"> 16:30 </span> Legião de Maria </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Quinta
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Adoração Eucarística </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Sexta
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Via Sacra </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Sábado
      </div>
      <div class="content">
        <div><span class="time"> 16:30 </span> Catequese Infantil </div>
      </div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'Schedule'
}
</script>

<style scoped>
h2 {
  font-family: 'Old Standard TT', serif;
  font-size: 40px;
  margin: 20px auto;
  text-align: center;
}

.time{
  font-weight: 600;
  margin: 0 10px  10px 0;
}

.content{
  font-size: 16px;
  background-color: rgba(171, 129,90,.2);
  color: var(--first-color);
  border-radius: 30px;
  padding: 15px;
  text-align: left;
}
.day-container{
  width: 165px;
  margin: 10px 3px;
}

.header{
  font-size: 20px;
  background-color: rgba(171, 129,90,1);
  color: #fff;
  border-radius: 30px;
  text-align: center;
  margin: 10px 10px;
  text-transform: uppercase;
  padding: 5px;
}

.container{
  display: flex;
  flex-direction: row;
  margin: 20px auto;
  justify-content: center;
}

@media(max-width:1140px){

.container{
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
}

.day-container{
  width:300px;
  margin: 10px 3px;
}
.content{ 
  margin: auto auto;
}
}
</style>