<template>
    <div class="message" :class="[{ 'message--gray': isGray }, { 'message--mine': isMine }]">
        <div class="message__avatar">
            <img src="https://loremflickr.com/600/600">
        </div>
        <div class="message__main">
            <div class="message__header">
                <div class="message__user">Username</div>
                <div class="message__date">{{ data.createdAt | date(false) }}</div>
            </div>
            <div class="message__content">
                <div class="message__file" v-if="data.files.length">

                    <div class="file" v-for="(file, index) in data.files" :key="index">
                        <div class="file__main">
                            <div class="file__container">
                                <v-icon name="file" width="46px" height="49px"></v-icon>
                            </div>
                            <div class="file__buttons">
                                <button class="file__button" type="button">Скачать</button>
                                <!-- <button class="file__button" type="button" v-if="file.type == 'application/msword'" @click="openFile(data)">Посмотреть</button> -->
                            </div>
                        </div>
                        <div class="file__name">{{ file.name }}</div>
                    </div>
                </div>

                <div class="message__text">
                    {{ data.text }}
                </div>
            </div>
        </div>
        <div class="message__actions">
            <button class="message__button" type="button" @click="$emit('delete', data.id)">
                <v-icon name="trash" width="24px" height="24px"></v-icon>
            </button>
        </div>
    </div>
</template>

<script>
    import vIcon from './vIcon.vue';

    import { mapActions } from 'vuex';

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
        },
        methods: {
            ...mapActions(['openFile'])
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

        position: relative;

        &__file {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

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

            white-space: pre-line;
            word-break: break-all;
        }


        &__actions {
            position: absolute;
            right: 1.5rem;
            top: 1.5rem;
        }

        &__button {
            border: none;
            background: #FF5E54;
            border-radius: .5rem;
            cursor: pointer;
            
            font-family: inherit;
            font-weight: 700;
            font-size: 1.6rem;

            padding: .6rem 1rem;

            height: 3.75rem;

            color: #fff;

            transition: all .25s;
            pointer-events: none;
            opacity: 0;

            &:hover {
                transform: translateY(-3px);
            }
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

            .file__main {
                flex-direction: row-reverse;   
            }

            .message__actions {
                right: unset;
                left: 1.5rem;
            }

        }

        &:hover {
            .message__button {
                pointer-events: unset;
                opacity: 1;
            }
        }
    }

    .file {
        display: flex;
        flex-direction: column;
        gap: .5rem;
        margin-bottom: 1rem;

        &__main {
            display: flex;
            align-items: flex-end;
            gap: 1rem;
        }

        &__buttons {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        &__button {
            border: none;
            background: #FF5E54;
            border-radius: .5rem;
            cursor: pointer;
            
            font-family: inherit;
            font-weight: 700;
            font-size: 1.6rem;

            // padding: .9rem 1rem;

            height: 3.75rem;

            color: #fff;
        }

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