<template>
  <div class="body">
    <div class="tabs">
      <div class="tabs_head">
        <span class="tabs_toggle is-active"> Dízimo </span>
        <span class="tabs_toggle"> Batismo </span>
      </div>
      <div class="tabs_body">
        <div class="tabs_content is-active">
          <h2 class="tabs_title"> Dízimo </h2>
          <p class="tabs_text"> Dízimo text </p>
        </div>

        <div class="tabs_content ">
          <h2 class="tabs_title"> Batismo </h2>
          <p class="tabs_text"> Dízimo text </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Activities', 
  methods: {
    },
    mounted(){
      let tabs = document.querySelectorAll('.tabs_toggle');
      let contents = document.querySelectorAll('.tabs_content');
      tabs.forEach((tab,index) =>{
        tab.addEventListener('click', () => {
          contents.forEach((content) => {
          content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
        tab.classList.remove('is-active');
        });
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
      });
      });
    }
  }
</script>



<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.body{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  

}

.tabs{
  max-width: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #008037;
  box-shadow: 0px 0px 0px 0px rgb(0,0,0,0.05);
}

.tabs_head{
  display: flex;
  align-items: stretch;
}

.tabs_toggle{
  display: flex;
  width: 50%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  cursor: pointer;
}

.tabs_toggle.is-active{
  background:#fff ;
}

.tabs_content{
  padding: 30px;
  display: none;
}

.tabs_content.is-active{
  display: block;
}
.tabs_title{
  font-size: 18px;
  color:#000;
  font-weight: bold;
  margin-bottom: 20px;
}
.tabs_text{
  font-size: 14px;
  color: #000;
}

</style>