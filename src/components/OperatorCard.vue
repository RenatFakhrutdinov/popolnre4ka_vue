<template>
    <div @click="clickMethod">
        <h2>{{operatorLabel}}</h2>
        <img :src="require(`@/assets/${pictPath}`)">
    </div>
</template>M

<script>
    import router from "@/router";

    export default {
        name: "OperatorCard",
        props: ['operatorLabel', 'pictPath', 'route'],
        template: '<h2>{{operatorLabel}}</h2>',
        methods: {
            clickMethod() {
                console.log(this.operatorLabel)
                router.push({path: "/operator", query: {testProp: this.operatorLabel}, params: {testProp: "feef"}})
            }
        }
    }
</script>

<style scoped>

</style>