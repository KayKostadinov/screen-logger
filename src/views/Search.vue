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
    <div v-if="searchRes" class="search__res">
      <div class="movie" v-for="movie in searchRes" :key="movie.id">
        <div class="poster-container">
          <img
            :src="imagePath + movie.poster_path"
            alt="poster"
            class="img-fluid poster"
          />
        </div>
        <h3 class="title">{{ movie.title }}</h3>
        <div class="details-container">
          <div class="details">
            <h3 class="title-again">{{ movie.title }}</h3>
            <p class="overview">{{ trimString(movie.overview, 70) }}</p>
            <small class="realease-date">
              Release: {{ movie.release_date }}
            </small>
            <small class="realease-date">
              Language: {{ movie.original_language }}
            </small>
            <div class="buttons">
              <button class="btn btn-flat">+ Add</button>
              <button class="btn btn-flat">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import getSearchResults from "../composables/getSearchResult";

export default {
  setup() {
    const searchTerm = ref(null);
    const searchRes = ref(null);
    const imagePath = "https://image.tmdb.org/t/p/w400/";
    const showInfo = ref(false);

    const handleSearch = async () => {
      if (searchTerm) {
        searchRes.value = await getSearchResults(searchTerm.value);
      }
    };

    // TODO: move to utils
    const trimString = (str, wordCount) => {
      const split = str.split(" ");

      if (split.length > wordCount) {
        return split.slice(0, wordCount).join(" ") + "...";
      }

      return str;
    };

    return {
      handleSearch,
      searchTerm,
      searchRes,
      imagePath,
      showInfo,
      trimString,
    };
  },
};
</script>
