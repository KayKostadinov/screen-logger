
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
    <div v-if="searchRes">
      <SearchResults
        :movies="movies"
        @load-more-results="loadMore"
      ></SearchResults>
    </div>
  </section>
  <seaction v-if="showOptions">
    <MovieOptions
      @close-popup="hideOptions"
      @open-options="openOptionsWindow($event)"
      :movieTitle="openOptions.movieTitle"
      :movieId="openOptions.movieId"
      :showLoadMore="showLoadMore"
    ></MovieOptions>
  </seaction>
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
    const searchTerm = ref(null);
    const searchRes = ref(null);
    const showInfo = ref(false);
    const movies = ref(null);
    const currentPage = ref(1);
    const totalPages = ref(null);
    const showLoadMore = ref(true);
    const openOptions = ref({
      movieTitle: "Interstellar",
      movieId: "157336",
    });
    const showOptions = ref(false);

    const handleSearch = async () => {
      if (searchTerm) {
        searchRes.value = await getSearchResults(searchTerm.value);
        movies.value = searchRes.value.results;
        totalPages.value = searchRes.value.total_pages;
      }
    };

    const loadMore = async () => {
      currentPage.value++;

      if (currentPage.value >= totalPages.value) {
        showLoadMore.value = false;
        return;
      }

      searchRes.value = await getSearchResults(
        searchTerm.value,
        currentPage.value
      );

      movies.value = [...movies.value, ...searchRes.value.results];
    };

    // TODO: move to utils
    const trimString = (str, wordCount) => {
      if (!str) return;
      const split = str.split(" ");

      if (split.length > wordCount) {
        return split.slice(0, wordCount).join(" ") + "...";
      }

      return str;
    };

    const openOptionsWindow = (event) => {
      console.log(event);
      //title, id
      // openOptions.value = {
      //   movieTitle: title,
      //   movieId: id,
      // };
      // showOptions.value = true;
    };

    const hideOptions = () => {
      showOptions.value = false;
    };

    return {
      handleSearch,
      searchTerm,
      searchRes,
      showInfo,
      trimString,
      movies,
      loadMore,
      showLoadMore,
      openOptions,
      showOptions,
      openOptionsWindow,
      hideOptions,
    };
  },
};
</script>
