<template>
  <footer>
    <hr />
    <p>
      BIG OL ERROR
      <a href="https://www.leander.xyz">Leander</a>
    </p>
    <img alt="Code monkey" src="../assets/coding.svg" />
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Error extends Vue {}

export default Error;
</script>

<style scoped lang="scss">
p {
  font-size: 1.25rem;
}
img {
  width: 100px;
  height: 100px;
}
</style>
