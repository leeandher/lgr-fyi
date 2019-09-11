<template>
  <div class="item-row">
    <button class="copy item">🔗</button>
    <p class="suffix item">https://www.lgr.fyi/{{link.suffix}}</p>
    <p class="origin item">{{link.count}}</p>
    <p class="clicks item">{{link.clicks}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ILink } from "./Linker.vue";
@Component
class HistoryLink extends Vue {
  @Prop()
  link: ILink;
}

export default HistoryLink;
</script>

<style scoped lang="scss">
button {
  background: inherit;
  border: 0;
  cursor: pointer;
  height: 100%;
  outline: 0;
  &:nth-last-child(4) {
    border-bottom-left-radius: 3px;
  }
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    background: #ff6347;
    color: #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
.item-row {
  display: grid;
  grid-template-columns: 1fr 5fr 10fr 3fr;
}
.item {
  font-size: 1.2rem;
  padding: 1rem;
  margin: 0;
  align-self: center;
}

button {
  background: inherit;
  border: 0;
  cursor: pointer;
  height: 100%;
  outline: 0;
  &:nth-last-child(4) {
    border-bottom-left-radius: 3px;
  }
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    background: #ff6347;
    color: #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
