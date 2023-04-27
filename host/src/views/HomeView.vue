<template>
  <div id="app-list"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { mount } from 'appList/mount';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeView',
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({});

    function isCustomEvent(event: Event): event is CustomEvent {
      return 'detail' in event;
    }

    onMounted(async () => {
      await mount();

      function goToMovieDetail(event: CustomEvent<{ id: number }>) {
        const movieId = event.detail.id;
        router.push({
          name: 'detail',
          query: {
            id: movieId,
          },
        });
      }
      window.addEventListener('item-click', (e: Event) => {
        if (!isCustomEvent(e)) throw new Error('not a custom event');
        goToMovieDetail(e);
      });
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
