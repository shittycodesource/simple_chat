<template>
    <div class="message" :class="[{ 'message--gray': isGray }, { 'message--mine': isMine }]">
        <div class="message__avatar">
            <img src="https://loremflickr.com/600/600">
        </div>
        <div class="message__main">
            <div class="message__header">
                <div class="message__user">Username</div>
                <div class="message__date">2 minutes ago</div>
            </div>
            <div class="message__content">
                <div class="message__file" v-if="isWithFile">
                    <div class="file">
                        <div class="file__container">
                            <v-icon name="file" width="46px" height="49px"></v-icon>
                        </div>
                        <div class="file__name">Document.docx</div>
                    </div>
                </div>
                <div class="message__text">
                    {{ data.text }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vIcon from './vIcon.vue';

    export default {
        name: "vMessage",
        components: {
            vIcon
        },
        props: {
            data: {
                type: Object,
                default: false
            },
            isGray: {
                type: Boolean,
                default: false 
            },
            isWithFile: {
                type: Boolean,
                default: false 
            },
            isMine: {
                type: Boolean,
                default: false 
            }
        }
    }
</script>

<style lang="scss">
    .message {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        background: #fff;
        border: 1px solid #fff;

        padding: 1.5rem;

        &__avatar {
            img {
                width: 4.5rem;
                border-radius: 1rem; 
            }
        }

        &__main {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        &__user {
            font-size: 1.8rem;
            font-weight: 700;
        }

        &__header {
            display: flex;
            align-items: center;
            gap: .5rem;
        }

        &__date {
            opacity: .5;
        }


        &__text {
            font-size: 1.6rem;
            line-height: 2.5rem;

            white-space: pre;
        }






        &--gray {
            //background: #F6F6F6;
            //border: 1px solid #E2E2E2;
            
            background: #F5FAFF;
            border: .1rem solid #D6E9FF;
        }

        &--mine {
            flex-direction: row-reverse;   
            text-align: right;

            .message__header {
                flex-direction: row-reverse;   
            }

            .file {
                justify-content: flex-end;
                align-items: flex-end;
            }
        }
    }

    .file {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;

        &__container {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 8rem;
            height: 8rem;

            border-radius: 1rem;

            background: linear-gradient(to bottom, #FF8B84, #FF5E54);
        }

        &__name {
            font-weight: 700;
            text-decoration: underline;
        }
    }
</style>