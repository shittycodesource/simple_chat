<template>
    <aside class="sidebar">
        <!-- <div class="sidebar__inner"> <header class="sidebar__header">
                Simple Chat
            </header> -->
            
            <main class="sidebar__content">
                
                <tip></tip>

            </main>
            <footer class="sidebar__footer">
                <!-- Maybe account -->
            </footer>
        <!-- </div> -->
    </aside>
</template>

<script>
    import Tip from './Tip.vue';

    export default {
        name: "Sidebar",
        components: {
            Tip
        }
    }
</script>

<style lang="scss">
    .sidebar {
        width: 28rem;
         
        background: #0F181D; 

        position: fixed;
        height: 100%;

        color: #fff;

        display: flex;
        flex-direction: column;

        &__content {
            flex-grow: 1;

            padding: 1.5rem;

            
        }

        &__header {
            flex-grow: 0;
            padding: 1.5rem 1rem;

            text-align: left;

            font-size: 2rem;
            font-weight: 700;

            min-height: 6rem;
        }

        &__footer {
            min-height: 6rem;
            flex-grow: 0; 
        }
    }
</style>