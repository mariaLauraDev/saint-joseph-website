<template>
<div> 
  <div> <SliderWrapper /> </div>
  <div> <Films /> </div>
</div>
</template>

<script>
import SliderWrapper from "../components/SliderWrapper.vue"
import Films from "../components/Films.vue"

export default {
  name: 'HomeView',
  components: {
    SliderWrapper,
    Films
  }
}
</script>

<style scoped>

</style>




