<template>
    <div class="payform">
        <div class="row">
            <img :src="require(`@/assets/${pictPath}`)">
            <p>{{operatorLabel}}</p>
        </div>
        <p>Номер телефон</p>
        <input type="tel" placeholder="Введите Ваш номер телефона">
        <p>Сумма в рублях</p>
        <input type="number" placeholder="Введите сумму в рублях">
        <div class="row">
            <button @click="backClick">На главную</button>
            <button @click="payClick">Оплатить</button>
        </div>
    </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "PayPage",
        props: ['operatorLabel', 'pictPath'],
        methods: {
            backClick() {
                router.back()
            },
            payClick() {
                console.log('payclick')
            }
        }
    }
</script>

<style scoped>
    .payform {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        background-color: #FFF;
        margin: 8px;
        border-radius: 8px;
        padding: 16px;
        width: 330px;
        justify-content: center;
        vertical-align: middle;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 100%;
        box-sizing: border-box;
        border-color: gray;
        border-style: solid;
        border-radius: 4px;
        border-width: 1px;
        padding: 16px;
    }

    input:focus {
        border: 2px solid dodgerblue;
    }
</style>