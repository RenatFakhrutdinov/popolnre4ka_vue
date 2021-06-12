<template>
    <div @click="navigateToOperatorPage" class="card">
        <img :src="require(`@/assets/${pictPath}`)">
        <p>{{operatorLabel}}</p>
    </div>
</template>

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
    .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        background-color: #FFF;
        margin: 8px;
        border-radius: 8px;
        padding: 16px;
    }
</style>