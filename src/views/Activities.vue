<template>
  <div class="container" v-for="(pastoral,index) in pastorais" :key="index">
    <div :class="[{'reverse': index%2==0 }]" >
      <div class="image">
      <img src='../assets/activities/baptism.png' alt="image">
      </div>
      
      <div class="description">
        <div class="title">
          {{pastoral.title}}
        </div>
        <div class="text">
          {{pastoral.text}}
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Activities',
  data(){
    return{
      pastorais:[
        {id:1, name: 'Batismo', src:'../assets/baptism.png',text:'A pastoral do batismo é um serviço de apoio, incentivo e colaboração que a comunidade paroquial oferece aos pais e padrinhos na sua missão de primeiros e principais educadores de seus filhos.'},
        {id:2, name: 'Dízimo', src:'../assets/baptism.png',text:'É um trabalho em nível paroquial que visa a conscientizar e esclarecer os católicos sobre a importância da contribuição com o Dízimo. Além de conscientizar, a Pastoral do Dízimo estará atenta à necessidade do fiel, dando um encaminhamento às necessidades espirituais e materiais do mesmo.'}
      ]
    }
  }
  }
  
</script>



<style scoped>

.reverse{
  flex-direction: row-reverse;
}
</style>