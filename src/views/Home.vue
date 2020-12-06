<template>
    <div>
        <h2>Home page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="row">
            <OperatorCard
                    operator-label="MTC"
                    pict-path="hdhhd"
            />
            <OperatorCard
                    operator-label="MTC"
                    pict-path="hdhhd"
            />
            <OperatorCard
                    operator-label="MTC"
                    pict-path="hdhhd"
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
    .row{

        display: flex;

        flex-direction: row;

        justify-content: flex-start;

        padding: 20px;
    }
</style>