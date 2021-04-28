<template>
    <div class="payform">
        <img style="padding-right: 16px" :src="require(`@/assets/${pictPath}`)" alt="">
        <p style="font-size: 20px">{{message}}</p>
        <button @click="backClick">На главную</button>
    </div>
</template>

<script>
    import router from "@/router";

    export default {
        name: "ResultPage",
        props: ['pictPath', 'message'],
        methods: {
            backClick() {
                router.push({path: "/"})
            }
        }
    }
</script>

<style scoped>
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

    button {
        margin-top: 16px;
        padding-inline: 24px;
        padding-block: 8px;
        border: none;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
</style>