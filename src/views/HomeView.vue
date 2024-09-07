<template>
    <div class="home">

        <sidebar></sidebar>

        <main class="view">
            <div class="view__content">
                
                <message 
                    v-for="i in [0,1,2,3,4,5,6,7,8,9]"
                    :isGray="i % 2 == 0"
                    :isWithFile="i % 4 == 0"
                    :isMine="i % 3 == 0"
                    :key="i"
                ></message>


            </div>

            <footer class="view__footer">
                <v-field></v-field>
            </footer>
        </main>

    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue';
    import Message from '../components/Message.vue';
    import vField from '../components/vField.vue';

    export default {
        name: 'HomeView',
        components: {
            Sidebar,
            Message,
            vField
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