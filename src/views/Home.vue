<template>
  <div class="home">
    <SearchRes></SearchRes>
  </div>
</template>

<script>
import SearchRes from "c:/Users/Kay/code/where-was-i/src/views/lists/SearchRes.vue";

import { ref } from "@vue/reactivity";
// import SearchRes from "./lists/SearchRes.vue";

export default {
  name: "Home",
  components: {
    SearchRes,
  },
  setup() {
    const movies = ref(null);

    return { movies };
  },
};
</script>
