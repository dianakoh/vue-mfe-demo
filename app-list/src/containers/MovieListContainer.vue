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
import MovieListData from '../mock/movie-list.json';
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

    const getMovies = async () => {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

      // const movies = MovieListData.data.movies;
      state.movies = movies;
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
