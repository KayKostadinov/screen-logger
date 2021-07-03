
<template>
  <Navbar />
  <div class="main">
    <div class="main__overlay">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Navbar },
  setup() {
    return {};
  },
});
</script>