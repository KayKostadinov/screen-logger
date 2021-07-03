<template>
  <section class="search-res">
    search res component
    <!-- <div
      v-for="movie in movieres"
      :key="movie.l"
      :class="movie.q ? movie.q.replace(' ', '-') : 'actor'"
      class="movie"
    >
      <p>{{ movie.l }}</p>
      <img :src="movie.i.imageUrl" alt="" />
    </div> -->
  </section>
</template>

<script>
/* eslint-disable no-unused-vars */

export default {
  //   name: "SearchRes",
  //   props: ["movieres"],
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  width: auto;
  height: 500px;
}

.TV-series {
  background-color: rgba($color: #000000, $alpha: 0.2);
}

.TV-mini-series {
  background-color: rgba($color: blue, $alpha: 0.2);
}

.feature {
  background-color: rgba($color: #fff, $alpha: 0.2);
}

.search-res {
  display: flex;
  flex-wrap: wrap;
}

.movie {
  padding: 1rem;
}

.actor {
  display: none;
}
</style>