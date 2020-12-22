<template>
    <div @click="navigateToOperatorPage">
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
            navigateToOperatorPage() {
                router.push({path: "/" + this.route})
            }
        }
    }
</script>

<style scoped>

</style>