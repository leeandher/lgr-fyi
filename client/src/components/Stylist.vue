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
  font-family: "Merriweather", Georgia, "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  font-size: 1.5rem;
  padding: 2rem;
  overflow-x: hidden;
}
body:after {
  content: "";
  position: fixed;
  z-index: -1;
  top: 0%;
  left: 10%;
  height: 100%;
  width: 80vw;
  background: white;
  transform: skew(-2deg);
  @media screen and (max-width: 1050px) {
    transform: none;
    width: calc(100% - 50px);
    left: 25px;
  }
  @media screen and (max-width: 500px) {
    transform: none;
    width: calc(100% - 20px);
    left: 10px;
  }
}
body:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: -2rem;
  top: -2rem;
  width: 100vw;
  height: 100vh;

  background: #ff6347;
  transform: skew(45deg) rotate(45deg);
  @media screen and (max-width: 1000px) {
    transform: skew(-45deg);
    width: 40vh;
    top: -40%;
    left: 50%;
  }
}
main {
  color: #2f2e41;
  margin-left: 1.5rem;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  a {
    color: #ff6347;
  }
  .red {
    color: #ff6347;
  }
}

hr {
  border: 0.5px solid #ff6347;
  margin: 3rem auto;
  max-width: 900px;
  @media screen and (max-width: 1200px) {
    max-width: 500px;
  }
}
:invalid {
  box-shadow: none;
}
:-moz-submit-invalid {
  box-shadow: none;
}
:-moz-ui-invalid {
  box-shadow: none;
}
::selection {
  background: #fff0ed; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #fff0ed; /* Gecko Browsers */
}
</style>