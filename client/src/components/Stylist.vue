<template>
  <main id="main">
    <slot></slot>
  </main>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Stylist extends Vue {}

export default Stylist;
</script>

<style lang="scss">
html {
  background: #2f2e41;
  font-size: 10px;
  font-family: "Merriweather", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  overflow: hidden;
  font-size: 1.5rem;
}
body:after {
  content: "";
  position: absolute;
  z-index: -1;
  top: -50%;
  left: 10%;
  height: 200vh;
  width: 80vw;
  background: white;
  transform: rotate(6deg);
  @media screen and (max-width: 1000px) {
    transform: rotate(0deg);
    width: calc(100% - 50px);
    left: 25px;
  }
}
body:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -50%;
  left: 5%;
  height: 200vh;
  width: 10vw;
  background: #ff6347;
  transform: rotate(6deg);
  @media screen and (max-width: 1000px) {
    transform: rotate(45deg);
    width: 20vh;
    left: 50%;
  }
}
main {
  color: #2f2e41;
  a {
    color: #ff6347;
  }
  .red {
    color: #ff6347;
  }
}
</style>