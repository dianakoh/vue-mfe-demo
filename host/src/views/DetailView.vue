<template>
  <div>
    <div id="app-detail"></div>
    <div class="app-review">
      <h1 style="font-size: 20px; margin-bottom: 1rem">Reviews</h1>
      <app-root></app-root>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { mount } from 'reactAppDetail/mount';
import { mount as reviewMount } from 'angularAppAbout/mount';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DetailView',
  setup(props, { emit }) {
    const route = useRoute();
    const state = reactive({});

    onMounted(async () => {
      const movieId = route.query.id;
      await mount(Number(movieId));
      await reviewMount(Number(movieId));
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.app-review {
  margin-left: 2rem;
}
</style>
