<template>
  <div class="items" v-for="(pastoral,index) in pastorais" :key="index">
    <div v-bind:class="[(index%2==0) ? reverseClass:'reverse','box']" >
      <div class="image">
      <img :src="require(`../assets/activities/${pastoral.src}`)" alt="image">
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
        {title: 'Batismo', src:'baptism.png',text:'A pastoral do batismo é um serviço de apoio, incentivo e colaboração que a comunidade paroquial oferece aos pais e padrinhos na sua missão de primeiros e principais educadores de seus filhos.'},
        {title: 'Dízimo', src:'dizimo.png',text:'É um trabalho em nível paroquial que visa a conscientizar e esclarecer os católicos sobre a importância da contribuição com o Dízimo. Além de conscientizar, a Pastoral do Dízimo estará atenta à necessidade do fiel, dando um encaminhamento às necessidades espirituais e materiais do mesmo.'},
        {title: 'Catequese', src:'catequese.png',text:'A catequese é uma educação da fé das crianças, dos jovens e dos adultos, a qual compreende especialmente um ensino da doutrina cristã, dado em geral de maneira orgânica e sistemática, com o fim de os iniciar na plenitude da vida cristã.'},
        {title: 'Música', src:'music.png', text:'Pastoral da Música Litúrgica é o serviço para animar a vida litúrgica, levando em conta o contexto social, histórico, cultural e eclesial da comunidade, tendo em vista a participação ativa, consciente e plena de todos na celebração, para dela colherem frutos espirituais.'},
        {title:'Povo da Rua',src:'fraternidade.png',text:'A pastoral tem como obejtivo estimular a promoção de ações junto à população de rua e catadores de materiais recicláveis que construam alternativas em defesa da vida e contribuam na elaboração de políticas públicas.'}
      ],
      reverseClass: '',
    }
  },
  }
  
</script>



<style scoped>


.box{
  display: flex;
  margin: 30px auto;
  position: relative;
  width: 70%;
}

.box.reverse{
flex-direction: row-reverse;
}

.image img{
  width: 300px;
  border-radius: 20px;
  border: 3px solid var(--fiveth-color);

}

.title{
  font-size: 50px;
  color: var(--fiveth-color);
  font-family: 'Old Standard TT', serif;
  font-weight: bold;
}

.description{
  margin: 30px 30px;
}


@media(max-width:1140px){
  .box{
    flex-wrap: wrap;
  }
}

</style>