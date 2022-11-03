<template>
  <div id="nav">
    <div class="menu-icon"><span class="fas fa-bars"></span></div>
    <div class="logo">
      <router-link to="/" id="logo-url">  <img src="/img/logo-mono.png" alt="Logo da Comunidade São José" id ="logo"> </router-link> 
    </div>
    
    <div class="nav-itens">
      <router-link to="/"> Início </router-link>
      <router-link to="/activities"> Pastorais </router-link>
      <router-link to="/subscriptions"> Inscrições </router-link>
      <router-link to="/schedule"> Horários </router-link>
      <router-link to="/contact"> Contato </router-link>
    </div>
    <div class="search-icon"><span class="fas fa-search"></span></div>
    <div class="cancel-icon"><span class="fas fa-times"></span></div>
    <form action="#">
      <input type="search" class="search-data" placeholder="Pesquisar..." required>
      <button type="submit" class="fas fa-search"></button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style scoped>

#nav{
  background-color:  var(--primary-color);
  padding: 0 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 500;
}

#nav .nav-itens{
  display: flex;
  list-style: none;
  padding: 0 0 0 40px;
  flex: 1;
}

#logo {
  max-width: 100px;
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
  color: var(--fiveth-color);
}

#nav form{
  display: flex;
  border-radius: 2px;
  padding: 2px;
  height: 40px;
  background: var(--primary-color);
  min-width: 18%!important;
  border: 1px solid rgba(155,155,155,.2);

}

#nav form .search-data{
  height: 100%;
  width: 100%;
  padding: 0 10px;
  padding: 0 10px;
  color: #FFF;
  font-weight: 500;
  background: none;
  border: none;
  font-size: 17px;
}

#nav form button{
  padding: 0 15px;
  background: var(--secondary-color) ;
  border: none;
  cursor: pointer;
  font-size: 17px;
  color: #FFF;
  border-radius: 2px;
}

#nav .menu-icon, #nav .search-icon, #nav .cancel-icon{
  width: 40px;
  color: #FFF;
  text-align: center;
  margin: 0 50px;
  font-size: 18px;
  cursor: pointer;
  display: none;
}


#nav .menu-icon span, #nav .search-icon, #nav .cancel-icon{
display: none;
}

@media (max-width: 1245px){
  #nav{
    padding: 0 50px;
  }
}

@media (max-width: 1140px){
  #nav{
    padding: 0px;
  }
  #nav .logo{
    flex: 2;
    text-align: center;
  }
  #nav .nav-itens{
    position: fixed;
    z-index: 99;
    top: 70px;
    width: 100%;
    left: -100%;
    height: 100%;
    background: var(--primary-color);
    display: inline-block;
    padding: 10px 50px 0 50px;
    text-align: center;
  }
  #nav .nav-itens router-link{
    line-height: 40px;
    margin: 30px 0;
    font-size: 20px;
  }
  #nav form{
    position: absolute;
    top: 80px;
    right: 50px;
  }
  #nav form:before{
    position: absolute;
    content: "";
    top: -13px;
    right: 0;
    width: 0;
    height: 0;
    z-index: -1;
    border: 10px solid transparent;
    border-bottom-color:  var(--primary-color);
  }
  #nav form:after{
    position: absolute;
    content: "";
    height: 60px;
    padding: 2px;
  
  }


  #nav .menu-icon{
    display: block;
  }
  #nav .search-icon, #nav .menu-icon span{
    display: block;
  }
}
</style>