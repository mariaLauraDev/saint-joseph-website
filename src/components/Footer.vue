<template>
  <div id="footer">
    <div>
      <a href="https://github.com/mariaLauraDev/saint-joseph-website" target="_blank"> MariaLauraDev &copy; 2022  </a>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer{
  height: 300px;
  background-color: var(--primary-color);
  background-image: url('../assets/lirios.png');
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  font-weight:500;
  
}

a {
  color: #fff;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
  font-size: var(--wp--preset--font-size--medium);
}

a:visited {
  color: var(--eith-color);
}

a:hover {
  color: var(--fiveth-color);
}

a:active {
  color: #fff;
}
</style>