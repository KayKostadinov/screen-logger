<template>
  <div class="search__res">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div class="poster-container">
        <div v-if="!movie.poster_path" class="no-poster">
          <i class="fas fa-film"></i>
        </div>
        <img
          v-else
          :src="imagePath + movie.poster_path"
          alt="poster"
          class="img-fluid poster"
        />
      </div>
      <h3 class="title">{{ movie.title }}</h3>
      <div class="details-container">
        <div class="details">
          <h3 class="title-again">{{ movie.title }}</h3>
          <small class="realease-date">
            Release: {{ movie.release_date }}
          </small>
          <small class="realease-date">
            Language: {{ movie.original_language }}
          </small>
          <p class="overview">{{ movie.overview }}</p>
          <div class="buttons">
            <button class="btn btn-flat">+ Add</button>
            <button
              class="btn btn-flat"
              @click.prevent="$emit('openOptions', movie.title, movie.id)"
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showLoadMore" class="load-more">
      <button
        @click.prevent="$emit('loadMoreResults')"
        class="btn btn-secondary"
      >
        more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array,
    showLoadMore: Boolean,
  },
  emits: ["loadMoreResults, openOptions,"],
  setup() {
    const imagePath = "https://image.tmdb.org/t/p/w400/";

    return {
      imagePath,
    };
  },
};
</script>

<style>
</style>