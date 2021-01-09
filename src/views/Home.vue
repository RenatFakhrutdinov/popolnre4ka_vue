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
            <OperatorCard
                    operator-label="Tele2"
                    pict-path="tele2.png"
                    route="tele2"
            />
            <OperatorCard
                    operator-label="Yota"
                    pict-path="yota.png"
                    route="yota"
            />
            <OperatorCard
                    operator-label="Ростелеком"
                    pict-path="rostelecom.png"
                    route="rostelecom"
            />
            <OperatorCard
                    operator-label="Тинькофф Мобайл"
                    pict-path="tinkoff.png"
                    route="tinkoff"
            />
            <OperatorCard
                    operator-label="СберМобайл"
                    pict-path="sberbank.png"
                    route="sber"
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
        justify-content: center;
        padding: 16px;
        flex-wrap: wrap;
    }
</style>