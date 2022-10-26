<template>
<div>
  <Navbar />
  <div>
      <router-view></router-view>
  </div>
  <p> teste</p>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components:{
    Navbar
  },
}
</script>

<style>

</style>
