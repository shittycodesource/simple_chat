<template>
  <div id="app">
    <v-sprites></v-sprites>

    <router-view/>
  </div>
</template>

<script>
import vSprites from './components/vSprites.vue';

export default {
  name: "App",
  components: { vSprites }
}
</script>


<style lang="scss">

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;

  padding: 0px;
  margin: 0px;
  
}

*,*::before,*::after {
  box-sizing: border-box;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
</style>
