<template>
  <div id="nav">
    <router-link to="/" id="logo-url">  <img src="/img/logo-mono.png" alt="Logo da Comunidade São José" id ="logo"> </router-link>
    <router-link to="/"> Início </router-link>
    <router-link to="/activities"> Pastorais </router-link>
    <router-link to="/subscriptions"> Inscrições </router-link>
    <router-link to="/schedule"> Horários </router-link>
    <router-link to="/contact"> Contato </router-link>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>


#nav{
  background-color: #008037;
  padding: 16px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16pt;
  font-weight: 700;

}

#logo {
  max-width: 380px;
}

#nav #logo-url {
  margin: auto;
  margin-left: 0;
}

#nav a {
  color: #FFF;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}
#nav a:hover{
  color: #FCBA03;
}
</style>