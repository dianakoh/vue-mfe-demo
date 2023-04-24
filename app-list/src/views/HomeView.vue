<template>
  <MainTemplate>
    <div v-if="_.isEmpty(state.movies)" class="loader">
      <span class="loader-text">Loading Movies...</span>
    </div>
    <div v-else>
      <MovieCard :data="state.movies" />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import axios from 'axios';
import _ from 'lodash';
import MainTemplate from 'commonComponents/MainTemplate.vue';
import { MovieCard } from '@/components';
export default defineComponent({
  name: 'HomeView',
  components: {
    MainTemplate,
    MovieCard,
  },
  setup(props, { emit }) {
    const state = reactive({
      movies: [],
    });

    const getMovies = async () => {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

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
