<template>
    <div class="field">
        <button class="field__file">
            <v-icon name="file add" width="18px" height="24px"></v-icon>
        </button>
        
        <div class="field__input" :class="{ 'field__input--focus': isFocus }">
            <input type="text" @focus="isFocus = true" @blur="isFocus = false" placeholder="Текст...">
        </div>
        
        <button class="field__send">
            <v-icon name="send" width="21px" height="21px"></v-icon>
        </button>
    </div>
</template>

<script>
    import vIcon from './vIcon.vue';

    export default {
        name: "vInput",
        components: { vIcon },
        data() {
            return {
                isFocus: false,
                text: false,
            }
        }
    }
</script>

<style lang="scss">
    .field {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .8rem;

        width: 100%;

        &__input {
            position: relative;
            
            flex-grow: 1;
            
            border: none;
            background: #E3EAF3;
            border-radius: 1rem;
             
            height: 4rem;
            width: 100%;

            display: flex;
            align-items: center;

            padding: 0rem 1.5rem;

            input {
                width: 100%;
                font-family: inherit;
                font-size: 1.8rem;
                font-weight: 700;

                color: #5A779C;

                border: none;
                background: none;
                
                cursor: pointer;

                &::placeholder {
                    color: #8196B1;
                }

                &:focus {
                    outline: none;
                }
            }

            &::after {
                content: "";

                position: absolute;
                top: 50%;
                left: 50%;
                transform:  translate(-50%, -50%);

                width: calc(100% + .8rem);
                height: calc(100% + .8rem);

                border: .2rem solid #FF5E54;
                border-radius: 1.3rem;

                opacity: 0;

                pointer-events: none;

                transition: opacity .25s ease;
            }

            &--focus {
                &::after {
                    opacity: 1;
                }
            }
        }

        &__file {
            border: none;
            background: #E3EAF3;
            border-radius: 1rem;

            cursor: pointer;

            display: flex;
            align-items: center;
            justify-content: center;

            width: 4rem;
            height: 4rem;

            svg {
                fill: #000;
            }
        }

        &__send {
            width: 4.2rem;
            height: 4rem;

            border: none;
            background: #FF5E54;
            border-radius: 1rem;
            cursor: pointer;

            padding-top: .5rem;
        }
    }
</style>