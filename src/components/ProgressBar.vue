<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
    export default {
        name: "ProgressBar"
    }
</script>

<style scoped>
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 16px solid #dfc;
        border-color: #D2E9FC transparent #D2E9FC transparent;
        animation: lds-dual-ring 1.5s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>