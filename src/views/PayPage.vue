<template>
    <div class="payform">
        <div class="row">
            <img style="padding-right: 16px" :src="require(`@/assets/${pictPath}`)" alt="">
            <p style="font-size: 20px">{{operatorLabel}}</p>
        </div>
        <ProgressBar v-if="loading"/>
        <InputForm
                @pay-click="payClick"
        />
    </div>
</template>

<script>
    import ProgressBar from "@/components/ProgressBar";
    import InputForm from "@/components/InputForm";
    import router from "@/router";

    export default {
        name: "PayPage",
        data() {
            return {
                loading: false,
                randomIndex: 0,
            }
        },
        components: {InputForm, ProgressBar},
        props: ['operatorLabel', 'pictPath'],
        methods: {
            payClick() {
                this.loading = true
                setTimeout(() => this.getPayback(), 1500);
            },
            getPayback() {
                this.loading = false
                this.randomIndex = Math.random();
                if (this.randomIndex > 0.7) {
                    router.push({path: "/error"})
                } else {
                    router.push({path: "/success"})
                }

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

    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>