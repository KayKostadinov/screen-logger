<template>
  <div class="fullscreen-container">
    <div class="movie-options--overlay" @click="$emit('closePopup')"></div>
    <div
      class="movie-options__card"
      :style="
        details && [
          {
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`,
          },
        ]
      "
    >
      <i class="far fa-times-circle" @click.prevent="$emit('closePopup')"></i>
      <div class="content">
        <h1>{{ movieTitle }}</h1>
        <div class="genres">
          <p v-for="genre in details?.genres" :key="genre.id">
            {{ genre.name }}
          </p>
        </div>
        <div class="more-details">
          <p class="runtime">
            Runtime
            <span :class="runtimeClassName"
              >{{ details?.runtime }} minutes</span
            >
          </p>
          <p class="rating">
            Average rating
            <span :class="ratingClassName">{{ details?.vote_average }}</span>
          </p>
        </div>
        <div class="overview">
          <h3>{{ details?.tagline }}</h3>
          <p>{{ details?.overview }}</p>
        </div>
        <div class="links">
          <a :href="ytRes" target="_blank"><i class="fab fa-youtube"></i></a>
          <a :href="imdbLink" target="_blank"><i class="fab fa-imdb"></i></a>
          <a :href="zamundaLink" target="_blank">
            <i class="fas fa-cloud-download-alt"></i>
          </a>
          <a @click.prevent="$emit('addToList')"><i class="fas fa-plus"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getTrailer from "../composables/getYTtrailer";
import getFullMovieDetails from "../composables/getFullMovieDetails";
import Utils from "../Utils";
import { ref, toRefs, watch, onBeforeMount } from "vue";

export default {
  props: {
    movieTitle: String,
    movieId: Number,
  },
  emits: ["closePopup", "addToList"],
  setup(props) {
    const { movieTitle, movieId } = toRefs(props);
    const ytRes = ref(null);
    const details = ref(null);
    const zamundaLink = ref(null);
    const imdbLink = ref(null);
    const ratingClassName = ref("bg-color--green");
    const runtimeClassName = ref("bg-color--green");

    const getRatingColor = () => {
      if (details.value.vote_average < 9) {
        ratingClassName.value = "bg-color--mint";
      }
      if (details.value.vote_average < 7) {
        ratingClassName.value = "bg-color--orange";
      }
      if (details.value.vote_average <= 5) {
        ratingClassName.value = "bg-color--red";
      }
    };

    const getRuntimeColor = () => {
      if (details.value.runtime > 90) {
        runtimeClassName.value = "bg-color--mint";
      }
      if (details.value.runtime > 120) {
        runtimeClassName.value = "bg-color--orange";
      }
      if (details.value.runtime >= 180) {
        runtimeClassName.value = "bg-color--red";
      }
    };

    onBeforeMount(async () => {
      ytRes.value = await getTrailer(movieTitle.value);
      zamundaLink.value = Utils.zamundaMovie(movieTitle.value);
      details.value = await getFullMovieDetails(movieId.value);
      imdbLink.value = Utils.imdbLink(details.value?.imdb_id);
      getRatingColor();
      getRuntimeColor();
    });

    watch(movieTitle, async () => {
      ytRes.value = await getTrailer(movieTitle.value);
      zamundaLink.value = Utils.zamundaMovie(movieTitle.value);
      console.log(ytRes.value);
    });

    watch(movieId, async () => {
      details.value = await getFullMovieDetails(movieId.value);
      imdbLink.value = Utils.imdbLink(details.value?.imdb_id);
      getRuntimeColor();
      getRatingColor();
    });

    return {
      zamundaLink,
      details,
      ytRes,
      imdbLink,
      ratingClassName,
      runtimeClassName,
    };
  },
};
</script>

<style>
</style>