<template>
  <div class="search__res">
    <div class="movie" v-for="movie in movies" :key="movie.id">
      <div
        class="poster-container"
        :style="
          movie?.poster_path
            ? [
                {
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
                },
              ]
            : [{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }]
        "
      >
        <h1 v-if="!movie?.poster_path">{{ movie.title }}</h1>
      </div>
      <div class="details-container">
        <div class="details">
          <h2 class="title">{{ movie.title }}</h2>
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
              @click.prevent="
                $emit('openOptions', { title: movie.title, id: movie.id })
              "
            >
              More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more">
      <button @click="$emit('loadMoreResults')" class="btn btn-secondary">
        more
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movies: Array,
  },
  emits: ["loadMoreResults", "openOptions"],
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