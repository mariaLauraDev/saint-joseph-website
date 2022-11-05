<template>
  <div id="contact">
    <h2>Nossos Contatos</h2>
    <div class="container">
      <div class="image"> <img src="../assets/homeview/church.png" alt="church icon"></div>
      <div class="text">
        <ul>
          <li><span class="icon"> <img src="../assets/homeview/location.png" alt="location icon"></span> R. Eudes Cardoso, 542 - Messejana, Fortaleza - CE, 60841-370 </li>
          <li><span class="icon"> <img src="../assets/homeview/phone.png" alt="phone icon"> (85) 3045-0103 </span></li>
          <li><span class="icon"> <img src="../assets/homeview/email.png" alt="email icon"> com.saojose@gmail.com</span></li>
        </ul>
      </div>

    </div>

  </div>
</template>

/<script>
export default {
  
}
</script>

<style scoped>
#contact{
  width: 80%;
  margin: 30px auto;
  position: relative;
  overflow: hidden;
}

h2{
  font-size: 25px;
  text-transform: uppercase;
}
.container{
  display: flex;
  flex-wrap: wrap;
  padding: auto auto;
  align-items: center;
}
.image{
  margin: auto auto;
}
.image img{
  width: 300px;
}
.icon img{
  width: 30px;
  height: 30px;
}

.text{
  padding-left: 0px;
}
.text ul {
  
  text-align: center;
  align-items: center;
  font-size: 20px;
}

.text ul{
list-style: none;
text-align: center;

}

.text ul li{
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: left;
}

.text ul li .icon{
  
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>