<template>
  <div class="history">
    <p class="copy header item">Copy</p>
    <p class="short header item">Short Link</p>
    <p class="origin header item">Original Link</p>
    <p class="clicks header item">Click Count</p>

    <button class="copy item">🔗</button>
    <p class="short item">https://www.lgr.fyi/abcde</p>
    <p class="origin item">https://www.example.com/really_long_super_link_thats_inconvenient</p>
    <p class="clicks item">8</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
class History extends Vue {}

export default History;
</script>

<style scoped lang="scss">
.history {
  position: relative;
  z-index: 2;
  margin-top: 2.5rem;
  background: rgba(255, 255, 255, 0.925);
  border: 2px solid #ff6347;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 5fr 10fr 3fr;
}
button {
  background: inherit;
  border: 0;
  cursor: pointer;
}
.header {
  display: block;
  font-weight: bold;
  text-transform: uppercase;
  color: #ff6347;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
  border: 1px solid #ff6347;
  border-width: 0 1px 1px 0;
  &:nth-child(4) {
    border-right-width: 0px;
  }
}
.item {
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0;
  align-self: center;
}
</style>
