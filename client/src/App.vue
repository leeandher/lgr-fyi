<template>
  <div id="app">
    <Stylist>
      <Header />
      <Linker />
      <Description />
      <Seller />
      <Footer />
    </Stylist>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Stylist from "./components/Stylist.vue";
import Linker from "./components/Linker.vue";
import Header from "./components/Header.vue";
import Description from "./components/Description.vue";
import Seller from "./components/Seller.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Stylist,
    Header,
    Linker,
    Description,
    Seller,
    Footer
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
