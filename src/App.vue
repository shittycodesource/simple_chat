<template>
  <div id="app"
      @drop.prevent="drop" 
      @dragstart.prevent
      @dragenter.prevent="isDragActive = true"
      @dragover.prevent
      @dragleave.prevent.self="isDragActive = false"
      @dragend.prevent
  >
    <v-sprites></v-sprites>

    <router-view
      @removeFile="removeFile"
    />

    <!-- <v-doc-overlay></v-doc-overlay> -->


    <v-drop-overlay :isDragActive="isDragActive" v-if="isDragActive"></v-drop-overlay>
    <v-file-reader ref="input" @emitFiles="setFiles" :filesArray="files"></v-file-reader>
  </div>
</template>

<script>
import vSprites from './components/vSprites.vue';
import vDropOverlay from './components/vDropOverlay.vue';
import vFileReader from './components/vFileReader.vue';
import vDocOverlay from './components/vDocOverlay.vue';

import { mapActions } from "vuex";

export default {
  name: "App",
  components: { vSprites, vDropOverlay, vFileReader, vDocOverlay },
  data() {
    return {
      isDragActive: false,
      files: [],
    }
  },
  methods: {
    ...mapActions(['setFilesToStore']),
    drop(event) {
      console.log(this.$refs)
      console.log(this.$refs.input)
      console.log(this.$refs.input.$refs)
      console.log(this.$refs.input.$refs.fileInput)
      console.log(this.$refs.input.$refs.fileInput.$children)
				this.$refs.input.onChange(event);
        this.isDragActive = false;
    },

    setFiles(value) {
      this.files = value;
      this.setFilesToStore(value);
    },

    removeFile(file) {
      this.files.splice(this.files.indexOf(file), 1);
      this.setFilesToStore(this.files);
    }
  }
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
