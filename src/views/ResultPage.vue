<template>
    <div class="payform">
        <div class="row">
            <img style="padding-right: 16px" :src="require(`@/assets/${pictPath}`)" alt="">
            <p style="font-size: 20px">{{message}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResultPage",
        props: ['pictPath', 'message']
    }
</script>

<style scoped>

</style>