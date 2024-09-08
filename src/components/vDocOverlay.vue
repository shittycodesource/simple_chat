<template>
    <div class="doc-overlay">
        <VueDocPreview v-if="openedFile != false" :value="this.openedFile" type="office" />
    </div>
</template>

<script>
   import VueDocPreview from 'vue-doc-preview';
   
   import { mapGetters } from 'vuex';

    export default {
        name: "vDocOverlay",
        components: {
            VueDocPreview
        },
        computed: {
            ...mapGetters(['openedFile']),
            type() {
                if (this.openedFile) {
                    if (this.openedFile.type == 'application/msword') {
                        return 'office';
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped> 
    .doc-overlay {
        position: fixed;
        top: 0;
        right: 0;
        border: 0;
        left: 0;
        z-index: 10000;
    }
</style>