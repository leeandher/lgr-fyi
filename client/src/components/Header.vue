<template>
  <header>
    <h1>
      <span>lgr</span>
      <span class="red">.</span>
      <span>fyi</span>
    </h1>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Header extends Vue {}

export default Header;
</script>

<style scoped lang="scss">
h1 {
  font-size: 5rem;
  margin: 0;
  .red {
    font-size: 7rem;
  }
}
</style>
