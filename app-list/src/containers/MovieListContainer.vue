<template>
  <MainTemplate>
    <div v-if="_.isEmpty(state.movies)" class="loader">
      <span class="loader-text">Loading Movies...</span>
    </div>
    <div v-else>
      <MovieList :data="state.movies" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import axios from 'axios';
import _ from 'lodash';
import MainTemplate from 'commonComponents/MainTemplate.vue';
import { MovieList } from '@/components';
export default defineComponent({
  name: 'MovieListContainer',
  components: {
    MainTemplate,
    MovieList,
  },
  setup(props, { emit }) {
    const state = reactive({
      movies: [] as any[],
    });

    const API_KEY = process.env.VUE_APP_API_KEY;

    const getMovies = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`).then((response: any) => {
        const movies = response.data.results;
        state.movies = movies;
      });
    };

    onMounted(() => {
      getMovies();
    });

    return {
      state,
      _,
    };
  },
});
</script>

<style lang="scss" scoped>
.loader {
  font-weight: 600;
}
</style>
