<template>
    <div>
        <h2>{{operatorLabel}}</h2>
        <img :src="require(`@/assets/${pictPath}`)">
        <p>Номер телефон</p>
        <input type="tel">
        <p>Сумма в рублях</p>
        <input type="number">
        <hr>
        <button @click="backClick">На главную</button>
        <button @click="payClick">Оплатить</button>
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

</style>