<template><MovieListContainer /></template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { MovieListContainer } from '@/containers';
export default defineComponent({
  name: 'HomeView',
  components: {
    MovieListContainer,
  },
  setup(props, { emit }) {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
