<template>
    <div>
        <h2 @click="testClick">testProp}}</h2>
        <p>{{testProp}}</p>
    </div>
</template>

<script>
    export default {
        name: "PayPage",
        props: ['testProp'],
        methods: {
            testClick() {
                console.log(this.testProp)
            }
        }
    }
</script>

<style scoped>

</style>