
<template>
  <Navbar @searchTerm="searchMovies" />
  <div class="main">
    <div class="main__overlay">
      <SearchRes :movieres="movies" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import getMovies from "./composables/getSearchResult";
import SearchRes from "./views/lists/SearchRes.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Navbar, SearchRes },
  setup() {
    const movies = ref(null);

    const searchMovies = async (e) => {
      movies.value = await getMovies(e);
      // console.log(movies.value)
    };

    return { movies, searchMovies };
  },
});
</script>