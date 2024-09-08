<template>
    <div class="home">

        <sidebar></sidebar>

        <main class="view">
            
            <v-chat @removeFile="file => $emit('removeFile', file)"></v-chat>
            
        </main>
       

    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue';
    import vChat from '../components/vChat.vue';

    export default {
        name: 'HomeView',
        components: {
            Sidebar,
            vChat,
        }

    }
</script>

<style lang="scss">

    .view {
        padding-left: 28rem;

        &__content {
            height: calc(100vh - 6rem);
            overflow-y: scroll;
        }

        &__footer {
            min-height: 6rem;

            display: flex;
            align-items: center;
            justify-content: center;
        
            padding: 0rem 1.5rem;
        }
    }


</style>