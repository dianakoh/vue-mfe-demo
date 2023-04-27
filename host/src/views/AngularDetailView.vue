<template>
  <div>AngularDetailView</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
//import('angAppDetail/MovieDetailComponent'); //error
export default defineComponent({
  name: 'AngularDetailView',
  setup(props, { emit }) {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
