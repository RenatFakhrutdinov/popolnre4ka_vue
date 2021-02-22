<template>
    <div>
        <p class="padding">Номер телефон</p>
        <label>
            <input type="tel" v-mask="'+7(###) ###-##-##'" v-model="phoneNumber"
                   placeholder="Введите Ваш номер телефона">
        </label>
        <p>Сумма в рублях</p>
        <label>
            <input type="tel" v-mask="'### рублей'" v-model="depositAmount" placeholder="Введите сумму в рублях">
        </label>
        <div class="row">
            <button @click="backClick">На главную</button>
            <div style="width: 32px"/>
            <button @click="payClick">Оплатить</button>
        </div>
    </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "InputForm",
        props: ['operatorLabel', 'pictPath'],
        methods: {
            backClick() {
                router.back()
            },
            payClick() {
                this.$emit("pay-click")
            }
        },
        data: () => ({
            phoneNumber: '',
            depositAmount: ''
        })
    }
</script>

<style scoped>
    .padding {
        padding-top: 20px;
    }

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

    button {
        margin-top: 16px;
        padding-inline: 24px;
        padding-block: 8px;
        border: none;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
</style>