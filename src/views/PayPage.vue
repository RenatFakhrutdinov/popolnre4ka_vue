<template>
    <div class="payform">
        <div class="row">
            <img style="padding-right: 16px" :src="require(`@/assets/${pictPath}`)" alt="">
            <p style="font-size: 20px">{{operatorLabel}}</p>
        </div>
        <ProgressBar/>
        <InputForm/>
    </div>
</template>

<script>
    import ProgressBar from "@/components/ProgressBar";
    import InputForm from "@/components/InputForm";

    export default {
        name: "PayPage",
        components: {InputForm, ProgressBar},
        props: ['operatorLabel', 'pictPath'],
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

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>