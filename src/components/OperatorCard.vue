<template>
    <div>
        <h2>{{operatorLabel}}</h2>
        <p>{{pictPath}}</p>
    </div>
</template>

<script>
    export default {
        name: "OperatorCard",
        props: ['operatorLabel', 'pictPath'],
        template: '<h2>{{operatorLabel}}</h2>'
    }
</script>

<style scoped>

</style>