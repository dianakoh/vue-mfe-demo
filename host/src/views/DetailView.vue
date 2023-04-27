<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { mount } from 'reactAppDetail/mount';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: 'DetailView',
  setup(props, { emit }) {
    const route = useRoute();
    const state = reactive({});

    onMounted(async () => {
      const movieId = route.query.id;
      await mount(Number(movieId));
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
