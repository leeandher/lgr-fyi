<template>
  <div class="description">
    <p>
      <span>
        <span>Let's get real</span>
        <span class="red">.</span>
        It's
        <em>2019</em>
      </span>
      <span class="red">.</span>
    </p>
    <p>
      <span>Links shouldn't still be so long you gotta side scrolls</span>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class Description extends Vue {
  private calculateYear() {
    // const year: string = new Date.getFullYear();
  }
}

export default Description;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.description {
  font-size: 1.5rem;
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
