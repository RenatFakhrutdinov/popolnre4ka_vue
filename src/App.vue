<template>
  <div id="app">
    <!--Logo-->
    <div class="centerRow">
      <p class="upperP">П</p>
      <p class="simpleO">о</p>
      <p class="italicP">п</p>
      <p class="upperO">О</p>
      <p class="greenL">л</p>
      <p class="pinkN">н</p>
      <p class="latinR">R</p>
      <p class="blackE">Е</p>
      <p class="italic4">4</p>
      <p class="yellowK">k</p>
      <p class="brownA">A</p>
    </div>
    <!--Main content-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!--Disclaimer-->
    <p class="padding">Warning! This is not a real mobile payment terminal. Do not try to transfer money to us! This
      site is designed just to test Flutter web. Hope you enjoy it =)</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
  #app {
    font-family: "Roboto Thin", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-align: center;
    color: #2c3e50;
    background-color: #D2E9FC;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .centerRow {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .upperP {
    font-size: 50px;
    color: #B71C1C;
  }

  .simpleO {
    font-size: 50px;
    color: #F57F17;
  }

  .italicP {
    font-size: 30px;
    color: #0FA9F4;
    font-style: italic;
  }

  .upperO {
    font-size: 60px;
    color: #FC5252;
    text-shadow: 4px 5px 5px #617D8B;
  }

  .greenL {
    font-size: 50px;
    color: #2E7D32;
  }

  .pinkN {
    font-size: 40px;
    color: hotpink;
  }

  .latinR {
    font-size: 35px;
    color: #7ED4FE;
  }

  .blackE {
    font-size: 40px;
    color: black;
  }

  .italic4 {
    font-size: 50px;
    color: #B71C1C;
  }

  .yellowK {
    font-size: 50px;
    color: #FDAB40;
  }

  .brownA {
    font-size: 40px;
    color: #6D4C42;
  }

  .padding {
    padding-top: 40px;
    padding-inline: 16px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s linear;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
