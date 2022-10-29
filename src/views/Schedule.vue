<template>
  <div class="container">
    <h1> CRONOGRAMA SEMANAL </h1>
    <div class="day-container"> 
      <div class="header">
        Domingo
      </div>
      <div class="content">
        <div><span class="time"> 07:00 </span> Missa dominical </div>
        <div><span class="time"> 08:30 </span> Encontro - Catequese de Jovens</div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Segunda-Feira
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Grupos de Reflexões (Estudo Bíblico) </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Terça-Feira
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Terço da Família </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Quarta-Feira
      </div>
      <div class="content">
        <div><span class="time"> 16:30 </span> Legião de Maria </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Quinta-Feira
      </div>
      <div class="content">
        <div><span class="time"> 19:30 </span> Adoração Eucarística </div>
      </div>
    </div>

    <div class="day-container"> 
      <div class="header">
        Sexta-Feira
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
        <div><span class="time"> 16:30 </span> Encontro - Catequese Infantil </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Schedule'
}
</script>

<style>
@media (max-width: 827px){
.container {
  width: 60%;
  margin: 30px auto;
}}

@media (max-width: 768px) {
  /* For mobile phones: */
.container {
  width: 100%;
  margin: 5px auto;
  }
}

h1{
  text-align: center;
  width: 70%;
  margin: 30px auto;
}

.day-container{
  width: 70%;
  margin: 0 auto;
  padding-bottom: 2em;
}

.header{
  font-size: 18pt;
  border-bottom: 2px solid #008037;
  font-weight: 600;
  margin: 0 0  15px 0;
}

.content{
  font-size: 14pt;
  
}

.time{
  font-weight: 600;
  margin: 0 15px  15px 0;
}
</style>