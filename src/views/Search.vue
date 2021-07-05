
<template>
  <section class="container search">
    <div class="search__box">
      <form class="form" @submit.prevent="handleSearch">
        <div class="form-group">
          <input
            type="text"
            class="form-item"
            v-model="searchTerm"
            placeholder="search"
          />
          <button class="btn" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
    <div v-if="movies">
      <SearchResults
        :movies="movies"
        @load-more-results="loadMore"
        @open-options="onOpenOptions"
      ></SearchResults>
    </div>
  </section>
  <section v-if="showOptions">
    <MovieOptions
      @close-popup="hideOptions"
      :movieTitle="openOptions.movieTitle"
      :movieId="openOptions.movieId"
    ></MovieOptions>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import getSearchResults from "../composables/getSearchResult";
import MovieOptions from "../components/MovieOptions.vue";
import SearchResults from "../components/SearchResults.vue";

export default {
  components: {
    MovieOptions,
    SearchResults,
  },
  setup() {
    // search bar
    const searchTerm = ref(null);
    const movies = ref(null);

    // pages
    const currentPage = ref(1);
    const totalPages = ref(null);

    // options window
    const openOptions = ref({
      movieTitle: "",
      movieId: "",
    });
    const showOptions = ref(false);

    const handleSearch = async () => {
      if (searchTerm) {
        const { results, total_pages } = await getSearchResults(
          searchTerm.value
        );
        movies.value = results;
        totalPages.value = parseInt(total_pages);
      }
    };

    const loadMore = async () => {
      currentPage.value++;

      if (currentPage.value >= totalPages.value) {
        return;
      }

      const searchRes = await getSearchResults(
        searchTerm.value,
        currentPage.value
      );

      movies.value = [...movies.value, ...searchRes.results];
    };

    const onOpenOptions = ({ title, id }) => {
      openOptions.value = {
        movieTitle: title,
        movieId: id,
      };
      showOptions.value = true;
    };

    const hideOptions = () => {
      showOptions.value = false;
    };

    return {
      handleSearch,
      searchTerm,
      movies,
      loadMore,
      openOptions,
      showOptions,
      onOpenOptions,
      hideOptions,
    };
  },
};
</script>
