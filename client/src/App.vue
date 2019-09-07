<template>
  <div id="app">
    <Stylist>
      <Header />
      <Description />
    </Stylist>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Stylist from "./components/Stylist.vue";
import Header from "./components/Header.vue";
import Description from "./components/Description.vue";

@Component({
  components: {
    Stylist,
    Header,
    Description
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
  max-width: 90%;
  margin: 0 auto;
}
</style>
