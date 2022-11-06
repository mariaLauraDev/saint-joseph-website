<template>
  <nav>
    <div class="menu-icon"><span class="bars"> <img src="../assets/navbar/menu.png"></span></div>
    <div class="logo">
      <router-link to="/" >  <img src="/img/logo-mono.png" alt="Logo da Comunidade São José" id ="logo"> </router-link> 
    </div>
    
    <div class="nav-items">
      <ul>
        <li><router-link to="/"> Início </router-link></li>
        <li><router-link to="/activities"> Pastorais </router-link></li>
        <li><router-link to="/subscriptions"> Inscrições </router-link></li>
        <li><router-link to="/schedule"> Horários </router-link></li>
        <li><router-link to="/knowthefaith"> Conheça a fé </router-link></li>
      </ul>
      
    </div>
    <div class="search-icon"><span><img src="../assets/navbar/search.png"></span></div>
    <div class="cancel-icon"><span> <img src="../assets/navbar/x.png"></span></div>
    <form action="#">
      <input type="search" class="search-data" placeholder="Pesquisar..." required>
      <button type="submit"> <img src="../assets/navbar/search.png"></button>
    </form>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  mounted(){
    const menuBtn =document.querySelector(".menu-icon span");
    const searchBtn =document.querySelector(".search-icon");
    const cancelBtn =document.querySelector(".cancel-icon");
    const items =document.querySelector(".nav-items");
    const form =document.querySelector("form");
    
    menuBtn.onclick = () =>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }

    cancelBtn.onclick = () =>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
    }

    searchBtn.onclick = () =>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
  }
}
</script>

<style scoped>

nav{
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

nav .nav-items li a{
  color: #FFF;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
}

nav .nav-items li a:hover{
  color: var(--fiveth-color); 
}

nav .nav-items li{
  list-style: none;
  padding: 0 15px;
}


nav .nav-items ul{
  display: flex;
  list-style: none;
  padding: 0 0 0 15px;
  flex: 1;
}

nav .nav-items{
  display: flex;
  list-style: none;
  padding: 0 0 0 10px;
  flex: 1;
}

#logo {
  max-width: 70px;
}

nav form{
  display: flex;
  height: 40px;
  border-radius: 2px;
  padding: 2px;
  background: var(--primary-color);
  min-width: 18%!important;
  border: 1px solid rgba(155,155,155,0.2);
  opacity: 0;
  transition: top 0.3s ease, opacity 0.1s ease;
  pointer-events: none;}

nav form.active{
  opacity: 1;
  top: 95px;
  pointer-events: auto;
}

nav form .search-data{
  height: 100%;
  width: 100%;
  padding: 0 10px;
  color: #FFF ;
  font-weight: 500;
  background: none;
  border: none;
  font-size: 17px;
}

nav form button{
  padding: 0 15px;
  background: var(--secondary-color);
  cursor: pointer;
  font-size: 17px;
  color:#fff ;
  border-radius: 2px;
}


.menu-icon .bars img{
  width: 25px;
  height: 25px;
}

form button img{
  width: 15px;
  height: 15px;
}

.search-icon span img, .cancel-icon span img{
  width: 15px;
  height: 15px;
}

nav .menu-icon, nav .search-icon, nav .cancel-icon{
  width: 25px;
  height: 25px;
  text-align: center;
  margin: 0 50px;
  font-size: 18px;
  cursor: pointer;
  display: none;
}
nav .menu-icon span, nav .search-icon, nav .cancel-icon{
  display: none;

}

@media(max-width:1245px){
  nav{
    padding: 0 50px;
  }


}

@media(max-width:1140px){
  nav{
    padding: 0;
  }
  .logo{
    flex: 2;
    text-align: center; 
  }
  nav .nav-items{
    position: fixed;
    top: 100px;
    width: 100%;
    height: 100%;
    background: #202733;
    left: -100%;
    transition: left 0.3s ease;
  }

  nav .nav-items.active{
    left: 0%;
  }

  nav .nav-items ul{
    display: flex;
    flex-direction: column;
    padding: 10px 50px 0 50px;
    text-align: center;
  }

  nav .nav-items li{
    line-height: 40px;
    margin: 30px 0;
  }

  nav .nav-items li a{
    font-size: 20px;

  }

  nav form{
    position: absolute;
    top: 95px;
    right: 50px;
  }

  nav form:before{
    position: absolute;
    content: "";
    top: -10px;
    right: 0;
    width: 0;
    height: 0;
    z-index: -1;
    margin: -20px 0 0;
    border: 10px solid transparent;
    border-bottom-color:  #202733;
  }

  nav form:after{
    position: absolute;
    content: "";
    height: 60px;
    width: calc(100%+20px);
    padding: 2px;
    background: #202733 ;
    border-radius: 2px;
    z-index: -2;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%,);
    }
  
  nav .menu-icon{
    display: block;
  }

  nav .search-icon, nav .menu-icon span{
    display: block;
  }

  nav .search-icon.hide, nav .menu-icon span.hide{
    display: none;
  }

  nav .cancel-icon.show{
    display: block;
  }

}










</style>