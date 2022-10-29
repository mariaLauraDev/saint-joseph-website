<template>
  <div id="footer">
    <a href="https://github.com/mariaLauraDev/saint-joseph-website" target="_blank"> MariaLauraDev &copy; 2022</a>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
#footer{
  height: 100px;
  background-color: #D9D9D9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  font-weight:500;
}

a {
  color: #FFF;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}

a:visited {
  color: #000000;
}

a:hover {
  color: #008037;
}

a:active {
  color:  #008037;
}
</style>