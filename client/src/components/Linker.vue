<template>
  <div id="app">
    <form action="post">
      <input type="text" />
      <input type="text" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Linker extends Vue {}

export default Linker;
</script>

<style scoped lang="scss">
#app {
  height: 500px;
  padding: 1.5rem;
  position: relative;
  background: #fff0ed;
  border: 2px solid #ff6347;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  &:after {
    content: "";
    position: absolute;
    background-image: url("../assets/link_shortener.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 5%;
    left: 5%;
    height: 90%;
    width: 90%;
    z-index: 0;
    opacity: 0.75;
  }
}

input {
  width: 80%;
  margin: 2rem;
  padding: 1.5rem;
  z-index: 2;
  position: relative;
  font-size: 1.6rem;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid #ff6347;
  &:focus {
    background: white;
    outline: 0;
    box-shadow: 0 0 2px #ff6347;
  }
}
</style>
