<template>
  <MainTemplate>
    <div v-if="_.isEmpty(state.movies)" class="loader">
      <span class="loader-text">Loading Movies...</span>
    </div>
    <div v-else>
      <MovieList2 :data="state.movies" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import axios from 'axios';
import _ from 'lodash';
import MainTemplate from 'commonComponents/MainTemplate.vue';
import { MovieList2 } from '@/components';
import MovieListData from '../mock/movie-list.json';
export default defineComponent({
  name: 'MovieListContainer',
  components: {
    MainTemplate,
    MovieList2,
  },
  setup(props, { emit }) {
    const state = reactive({
      movies: [] as any[],
    });

    const getMovies = async () => {
      // const {
      //   data: {
      //     data: { movies },
      //   },
      // } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

      // const movies = MovieListData.data.movies;
      //state.movies = movies;

      await axios
        .get('https://api.themoviedb.org/3/movie/now_playing?api_key=ce084afcba3137b332a74dd9229d80f7')
        .then((response: any) => {
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
