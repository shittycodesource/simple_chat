<template>
    <div class="field" :class="{ 'field--shadow': lineCount > 3 }" :key="rerenderKey">
        <button class="field__file" type="button">
            <v-icon name="file add" width="18px" height="24px"></v-icon>
        </button>
        
        <div class="field__input" :class="{ 'field__input--focus': isFocus }">
            <textarea 
                v-textarea
                type="text" 
                @focus="isFocus = true" 
                @blur="isFocus = false" 
                placeholder="Текст..."

                maxlength="512"

                :value="text"
                @input="onInput"
            ></textarea>
        </div>
        
        <button class="field__send" type="button" @click="send">
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
                text: '',
                files: [],

                maxLines: 32,
                maxLength: 512,
                minLength: 0,

                rerenderKey: 0
            }
        },
        methods: {

            onInput(event) {
				if (!this.isMaxLines) {
					this.text = event.target.value;
					return;
				}


				if (event.inputType == 'deleteContentBackward' ||  !event.target.value.slice(this.text.length, event.target.value.length).includes('\n')) {
                    this.text = event.target.value;
					return;
				}

				event.target.value = this.text;
			},

            send() {
                const data = {
                    text: this.text,
                    files: this.files
                }

                this.$emit('send', data);

                this.text = '';
                this.files = [];

                this.rerenderKey++;
            }
        },
        computed: {
            lineCount() { return this.text.split('\n').length; },
            textLength() { return this.text.length; },
			isMaxLines() { return this.lineCount >= this.maxLines; },
			isMaxLength() { return this.text.length >= this.maxLength; },
			isMinLength() { return this.text.length < this.minLength; },
        }
    }
</script>

<style lang="scss">
    .field {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: .8rem;

        width: 100%;
         
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        padding: 1.5rem;

        background: #fff;

        &__input {
            position: relative;
            
            flex-grow: 1;
            
            border: none;
            background: #E3EAF3;
            border-radius: 1rem;
             
            width: 100%;

            display: flex;
            align-items: center;
            
            
            display: flex;
            align-items: center;
            
            textarea {
                height: 4rem;
                padding: .8rem 1.5rem;
                width: 100%;
                font-family: inherit;
                font-size: 1.8rem;
                font-weight: 700;

                color: #5A779C;
                
                resize: none;
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


        &--shadow {
            border: 1px solid #D6E9FF;
            box-shadow: 0 0 25px 0 rgba(0, 0, 0, .15);
        }
    }
</style>