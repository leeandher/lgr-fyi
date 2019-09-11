<template>
  <div class="item-row">
    <button class="copy item">🔗</button>
    <a class="suffix item" :href="shortLink">{{shortLinkText}}</a>
    <p class="origin item">{{link.origin}}</p>
    <p class="clicks item">{{link.clicks}}</p>
    <button class="delete item" @click="deleteItem(link._id)">❌</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { SUPER_MEGA_SECRET_ULTRA_KEY, ILink } from "../utils";
@Component
class HistoryLink extends Vue {
  @Prop()
  link: ILink;
  @Prop()
  refresh: Function;
  data() {
    return {
      shortLink: `https://www.lgr.fyi/${this.$props.link.suffix}`,
      shortLinkText: `lgr.fyi/${this.$props.link.suffix}`
    };
  }
  private deleteItem(id: string): void {
    const oldHistory = JSON.parse(
      localStorage.getItem(SUPER_MEGA_SECRET_ULTRA_KEY)
    );
    const newHistory = oldHistory.filter(({ _id }) => id !== _id);
    localStorage.setItem(
      SUPER_MEGA_SECRET_ULTRA_KEY,
      JSON.stringify(newHistory)
    );
    this.$props.refresh();
  }
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
  grid-template-columns: 75px 5fr 10fr 3fr 75px;
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
