<template>
  <div id="activities" class="fullrow">
    <div class="row-wrapper">
      <h2> CONHEÇA NOSSAS PASTORAIS </h2>
      <div id="pastorais-desktop">
        <div class="wrap">
          <ul class="tabs group">
            <li><a class="active" href="#/batismo">Batismo</a></li>
            <li><a href="#/catequese" class="">Catequese</a></li>
          </ul>
          <div id="content">
            <div class="tab-text" id="batismo">
              <div class="tab-content-image">
                <img src="../assets/baptism.png" alt="Baptism Symbol">
              </div>
              <div class="tab-content-text">
                <p> A pastoral do batismo é um serviço de apoio, incentivo e colaboração que a comunidade paroquial oferece aos pais e padrinhos na sua missão de primeiros e principais educadores de seus filhos. </p>
              </div>
            </div>
            <div class="tab-text display-none" id="catequese">
              <div class="tab-content-image">
                <img src="../assets/baptism.png" alt="Baptism Symbol">
              </div>
              <div class="tab-content-text">
                <p> A pastoral do batismo é um serviço de apoio, incentivo e colaboração que a comunidade paroquial oferece aos pais e padrinhos na sua missão de primeiros e principais educadores de seus filhos. </p>
              </div>
            </div>


          </div>

        </div>

      </div>
    </div>
  <p> oi </p>
  </div>
</template>

<script>
export default {
  name: 'Activities'
}
</script>

<style scoped>
@media (max-width: 827px){
#pastorais-desktop {
    display: none;
}
}

::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar-thumb {
    background: var(--orange);
}
::-webkit-scrollbar-track {
    background: var(--black);
}
::selection {
    color: var(--white);
    background: var(--orange);
}


#pastorais-desktop ul.tabs {
    font-weight: bold;
    /* width: 780px; */
    height: 80px;
    margin: 0 auto;
    list-style: none;
    overflow: hidden;
    padding: 0;
}


</style>