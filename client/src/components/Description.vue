<template>
  <div class="description">
    <p>
      <span>
        <span>Let's get real</span>
        <span class="red">.</span>
        It's
        <em>{{year}}</em>
      </span>
      <span class="red">.</span>
    </p>
    <p>
      <span>Links shouldn't be so long you gotta scroll sideways</span>
      <span class="red">.</span>
    </p>
    <p>
      <span>You want to easily enter them in on mobile browsers</span>
      <span class="red">.</span>
    </p>
    <p>
      <span>You want memorable words to get to your favourite sites</span>
      <span class="red">.</span>
    </p>
    <br />
    <p>
      <span>Well, you came to the right place</span>
      <span class="red">.</span>
    </p>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
})
class Description extends Vue {}

export default Description;
</script>

<style scoped lang="scss">
.description {
  font-size: 1.5rem;
  @media screen and (max-width: 1000px) {
    font-size: 1.4rem;
  }
}
p {
  margin: 0.5rem;
}
.red {
  font-size: 2.5rem;
  line-height: 0;
}
.long-link {
  white-space: nowrap;
}
</style>
