<template>
    <div class="chat">
        <div class="chat__content" ref="content">
                
            <v-message 
                v-for="(data, index) in messages"
                :data="data"
                :isGray="index % 2 == 0"
                :isWithFile="data.file"
                :isMine="data.userId == 4"
                :key="data.id"

                @delete="removeMessage"
            ></v-message>


        </div>

        <footer class="chat__footer">
            <v-field @send="appendMessage"></v-field>
        </footer>
    </div>
</template>

<script>
    import vMessage from './vMessage.vue';
    import vField from './vField.vue';

    export default {
        name: "vChat",
        components: {
            vMessage,
            vField
        },
        data() {
            return {
                messages: [
                    { userId: 4, text: "Hello everybody", files: [ { name: "Presentation", file: null } ], id: 1, createdAt: 1125757090611 }, 
                    { userId: 12, text: "Hello everybody", files: [ { name: "", file: null } ], id: 2, createdAt: 1725757090611 }, 
                    { userId: 2, text: "Hello everybody", files: [ { name: "", file: null } ], id: 3, createdAt: 1725757090611 }, 
                    { userId: 5, text: "Hello everybody", files: [ { name: "", file: null } ], id: 4, createdAt: 1725757090611 }, 
                    { userId: 4, text: "Hello everybody", files: [ { name: "", file: null } ], id: 5, createdAt: 1725757090611 }, 
                    { userId: 7, text: "Hello everybody", files: [ { name: "", file: null } ], id: 6, createdAt: 1725757090611 }, 
                    { userId: 4, text: "Hello everybody", files: [ { name: "", file: null } ], id: 7, createdAt: 1725757090611 }, 
                    { userId: 4, text: "Hello everybody", files: [ { name: "", file: null } ], id: 8, createdAt: 1725757090611 }, 
                ]
            }
        },
        methods: {
            appendMessage(data) {
                data.id = Date.now();
                data.userId = Date.now();
                data.createdAt = Date.now();

                this.messages.push(data);

                setTimeout(() => {

                    const element = this.$refs.content;
                    const index = (element.scrollTop + element.getBoundingClientRect().height) / element.scrollHeight;
                    console.log(index)

                    if (index > .85) {
                        this.$refs.content.scrollTo({ top: this.$refs.content.scrollHeight, left: 0, behavior: "smooth" });
                    }

                }, 0)
            },

            removeMessage(id) {
                const item = this.messages.filter(item => item.id == id);
                this.messages.splice(this.messages.indexOf(item), 1);
            }
        },
        mounted() {
            this.$refs.content.scrollTo({ top: this.$refs.content.scrollHeight, left: 0 });
        }
    }
</script>

<style lang="scss">

    .chat {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        height: 100vh;

        &__content {
            height: calc(100vh - 7rem);
            overflow-y: scroll;
        }

        &__footer {
            min-height: 6rem;

            display: flex;
            align-items: center;
            justify-content: center;
        
            padding: 0rem 1.5rem; 

            position: relative;
        }
    }

</style>