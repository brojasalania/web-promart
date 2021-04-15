<template>
  <div id="app">
    <Nav  />
    <div class="makeStyles-content-10">     
        <router-view></router-view>     
      
    </div>
   
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav
    
  },
 
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

html,
body {
  height: 100%;
   font-family: 'Montserrat', sans-serif;
}

#app {
  height: 100%;
  display: flex;
  background: #f8f8f8;
  font-family: 'Montserrat', sans-serif;
}
.makeStyles-content-10 {
  flex-grow: 1;
  display: block;
  margin-top: 60px;
}
.height-100 {
  height: 100%;
  width: 100%;
}
</style>
