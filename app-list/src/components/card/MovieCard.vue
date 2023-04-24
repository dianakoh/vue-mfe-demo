<template>
  <div>
    <BaseCard v-for="movie in state.movies" :key="movie.id">
      <div class="info-section">
        <div class="movie-header">
          <img class="locandina" :src="movie.medium_cover_image" :alt="movie.title" :title="movie.title" />
          <div class="title">{{ movie.title }}</div>
          <div class="year">{{ movie.year }}</div>
          <ul class="genres">
            <li v-for="(genre, idx) in movie.genres" :key="idx" class="genres-genre">
              {{ genre }}
            </li>
          </ul>
        </div>
        <div class="movie-desc">
          <p class="summary">{{ movie.summary.slice(0, 140) }}...</p>
        </div>
      </div>
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import BaseCard from 'commonComponents/BaseCard.vue';
export default defineComponent({
  name: 'MovieCard',
  components: {
    BaseCard,
  },
  props: {
    data: [],
  },
  setup(props, { emit }) {
    const state = reactive({
      movies: computed(() => props.data),
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.info-section {
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 0.625rem;

  .movie-header {
    position: relative;
    padding: 1.563rem;
    height: 40%;

    .locandina {
      position: relative;
      float: left;
      margin-right: 1.25rem;
      height: 9.375rem;
      box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
    }

    .title {
      color: black;
      font-weight: 400;
    }

    .year {
      color: #555;
      font-weight: 400;
    }

    .genres {
      list-style: none;
      padding: 0;
    }

    .genres-genre {
      display: inline-block;
      color: #555;
      padding-right: 0.625rem;
    }
  }

  .movie-desc {
    padding-top: 3.75rem;
    padding-left: 1.563rem;
    height: 50%;
    width: 50%;

    .summary {
      color: #545454;
    }
  }
}
</style>
