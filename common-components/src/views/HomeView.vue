<template>
  <div>HomeView</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'HomeView',
  setup(props, { emit }) {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
