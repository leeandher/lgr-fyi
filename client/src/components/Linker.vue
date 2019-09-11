<template>
  <div id="app">
    <form @submit.prevent.stop="onSubmit">
      <fieldset>
        <label for="origin">
          <span>Original Link</span>
          <input
            type="text"
            placeholder="https://www.example.com/really_long_super_link_thats_inconvenient"
            name="origin"
            required
            v-model="origin"
          />
        </label>
        <label for="suffix">
          <span>Custom Suffix</span>
          <input type="text" placeholder="small-boi" name="suffix" required v-model="suffix" />
        </label>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
    <History />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import History from "./History.vue";

@Component({
  components: {
    History
  },
  data: () => ({
    origin: "www.reddit.com",
    suffix: "reddit1"
  })
})
class Linker extends Vue {
  private async onSubmit(): Promise<void> {
    const { origin, suffix } = this.$data;
    const body: string = JSON.stringify({ origin, suffix });
    const data = await fetch("http://localhost:7777/api", {
      method: "POST",
      body
    });
  }
}

export default Linker;
</script>

<style scoped lang="scss">
#app {
  max-width: 800px;
  padding: 1.5rem;
  padding-bottom: 4rem;
  position: relative;
  background: #fff0ed;
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 3rem;
  &:after {
    content: "";
    position: absolute;
    background-image: url("../assets/link_shortener.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    top: 5%;
    left: 5%;
    height: 90%;
    width: 90%;
    z-index: 0;
    opacity: 0.35;
  }
}
fieldset {
  margin: 0;
  border: 0;
  padding: 0;
  border: 0;
  width: auto;
}
label {
  display: block;
  text-align: left;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  span {
    display: block;
    font-weight: bold;
    color: #ff6347;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
}
input {
  font-family: inherit;
  width: 100%;
  padding: 1rem;
  z-index: 2;
  position: relative;
  font-size: 1.6rem;
  background: rgba(255, 255, 255, 0.85);
  border: 2px solid #ff6347;
  font-family: "Merriweather", Georgia, "Times New Roman", Times, serif;
  border-radius: 5px;
  &:focus {
    background: white;
    outline: 0;
    box-shadow: 0 0 2px #ff6347;
  }
}
button {
  border: 2px solid #ff6347;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-transform: uppercase;
  position: relative;
  font-weight: bold;
  font-size: 1.4rem;
  color: #ff6347;
  padding: 0.75rem 1.5rem;
  background: white;
  border-radius: 5px;
  z-index: 2;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #fff0ed;
  }
  &:active {
    outline: 0;
    box-shadow: 0 0 2px #ff6347;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
