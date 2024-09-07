<template>
    <div class="tip">
        <div class="tip__name">Отправка Файла</div>
        <div class="tip__text">Выберите файл в проводнике и перетащите его на страницу</div>
    </div>
</template>

<script>
    export default {
        name: "Tip"
    }
</script>

<style lang="scss">
    .tip {
        display: flex;
        flex-direction: column;

        gap: .5rem;

        position: relative;

        &__name {
            font-size: 2rem;
            font-weight: 700;
        }

        &__text {
            font-size: 1.4rem;
            color: #CFCFCF;
            line-height: 1.8rem;
        }

        &::after,&::before {
            content: "";

            height: .1rem;
            width: 100%;

            background: white;

            position: absolute;
            left: 0;
            right: 0;
        }

        &::after {
            top: -1rem;
        }

        &::before {
            bottom: -1rem;
        }
    }
</style>