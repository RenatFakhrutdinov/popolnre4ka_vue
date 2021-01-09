<template>
    <div>
        <div class="row">
            <OperatorCard
                    operator-label="MTC"
                    pict-path="mts.png"
                    route="mts"
            />
            <OperatorCard
                    operator-label="МегаФон"
                    pict-path="megafon.png"
                    route="megafon"
            />
            <OperatorCard
                    operator-label="Билайн"
                    pict-path="beeline.png"
                    route="beeline"
            />
        </div>
    </div>
</template>

<script>
    import OperatorCard from "@/components/OperatorCard";
    export default {
        name: "Home",
        components: {OperatorCard}
    }
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 20px;
    }
</style>