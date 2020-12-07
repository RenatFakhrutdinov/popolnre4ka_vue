<template>
    <div>
        <h2>{{operatorLabel}}</h2>
        <img :src="require(`@/assets/${pictPath}`)">
        <p>{{pictPath}}</p>
    </div>
</template>M

<script>
    export default {
        name: "OperatorCard",
        props: ['operatorLabel', 'pictPath'],
        template: '<h2>{{operatorLabel}}</h2>'
    }
</script>

<style scoped>

</style>