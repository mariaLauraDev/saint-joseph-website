<template>
<div>
  <input type="checkbox" id="check">
  <nav>
    <div class="icon">
      <router-link to="/" >  <img src="/img/logo-mono.png" alt="Logo da Comunidade São José" id ="icon"> </router-link> 
    </div>

      <ol>
        <li><router-link to="/"> Início </router-link></li>
        <li><router-link to="/activities"> Pastorais </router-link></li>
        <li><router-link to="/subscriptions"> Inscrições </router-link></li>
        <li><router-link to="/schedule"> Horários </router-link></li>
        <li><router-link to="/knowthefaith"> Conheça a fé </router-link></li>
      </ol>

      <div class="search-box">
      <input type="search" class="search-data" placeholder="Pesquisar..." required>
      <button type="submit"> <img src="../assets/navbar/search.png"></button>
      </div>

      <label for="check" class="bar">
        <span class="bar" id="bars"> <img class="bar-icon" src="../assets/navbar/menu.png"></span>
        <span class="bar" id="times"> <img class="cancel-icon" src="../assets/navbar/x.png"></span>
      </label>
  </nav>
</div>
</template>

<script>

export default {
  name: 'Navbar',
  mounted(){
   
}
}
</script>

<style scoped>

#icon {
  max-width: 70px;
}



nav{
  display: flex;
  width: 100%;
  background: var(--first-color);
  position: relative;
  justify-content: space-between;
  text-align: center;
  padding: 15px 100px;
  align-items: center;
}

nav .icon{
  cursor: pointer;
}

nav ol{
  display: flex;
  list-style: none;
  margin: auto 0;
}

nav ol li{
  margin: 0 2px;
  position: relative;
  transition: .3s;
}

nav ol li a{
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 5px 10px;
}

nav ol li:hover a{
  color: var(--second-color);
}


nav ol li:after{
  content: '';
  position: absolute;
  background: var(--second-color);
  left: 0; 
  bottom: 0;
  width: 100%;
  height: 4px;
  opacity: 0;
  transition: .3s ease;
}

nav ol li:hover::after{
  opacity: 1;
  transform: translateY(8px);
}

.search-box img{
  width: 15px;
  height: 15px;
}

nav .search-box{
  display: flex;
  margin: auto 0;
  height: 15px;
}

nav .search-box input{
  border: none;
  outline: none;
  background: #202733;
  border-radius: 20px;
  height: 100%;
  padding: 15px 10px;
  font-size: 14px;
  width: 250px;
  color: var(--second-color);
}

nav .search-box button{
  background-color: transparent;
  border: none;
  font-size: 25px;
  height: 30px;
  padding: 8px;
  position: relative;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}


.bar-icon{
  width: 25px;
  height: 25px;
}

.cancel-icon{
  width: 25px;
  height: 25px;
}

nav .bar{
  position: relative;
  margin: auto;
  display: none;
}

nav .bar span {
  position: absolute;
  
}

input[type="checkbox"]{
  -webkit-appearance: none;
  display: none;
}

@media(max-width:1140px){
  nav{
    display: block;
    padding: 0 0 30px 0;
  }
  nav .icon{
    display: inline-block;
    padding: 15px 30px;
  }
  nav .search-box{
    width: 100%;
    margin: 0 auto;
    display:flex;
    justify-content: center;
    overflow: visible;
  }
  nav .search-box input{
    width: 80%;
  }
  nav ol{
    display: flex;
    flex-direction: column;
    background: #202733;
    height: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  nav ol li{
    text-align: center;
    transition: 0.3s 0.1s all;
    opacity: 0;
  }

  nav ol li a{
    color:#fff;
    font-size: 24px;
    padding: 25px;
    display: block;
  }

  nav ol li:nth-child(1){
    transform: translateX(-150px);
  }
  nav ol li:nth-child(2){
    transform: translateX(-200px);
  }
  nav ol li:nth-child(3){
    transform: translateX(-250px);
  }
  nav ol li:nth-child(4){
    transform: translateX(-300px);
  }
  nav ol li:nth-child(5){
    transform: translateX(-350px);
  }

  nav .bar{
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  nav .bar #times{
    display: none;
  }

  #check:checked ~ nav .bar #times{
    display: block;
  }
  #check:checked ~ nav .bar #bars{
    display: none;
  }

  #check:checked ~ nav ol{
    visibility: visible;
    height: 465px;
  }

   #check:checked ~ nav ol li:nth-child(1),
   #check:checked ~ nav ol li:nth-child(2),
   #check:checked ~ nav ol li:nth-child(3),
   #check:checked ~ nav ol li:nth-child(4),
   #check:checked ~ nav ol li:nth-child(5){
    transform: translateX(0);
    opacity: 1;
   }

}

</style>