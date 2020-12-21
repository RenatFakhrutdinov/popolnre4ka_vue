<template>
    <div @click="clickMethod">
        <h2>{{operatorLabel}}</h2>
        <img :src="require(`@/assets/${pictPath}`)">
    </div>
</template>M

<script>
    export default {
        name: "OperatorCard",
        props: ['operatorLabel', 'pictPath'],
        template: '<h2>{{operatorLabel}}</h2>',
        methods: {
            clickMethod() {
                console.log(this.operatorLabel)
            }
        }
    }
</script>

<style scoped>

</style>