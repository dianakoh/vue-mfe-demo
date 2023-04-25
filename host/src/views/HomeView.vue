<template>
  <div id="app-list"></div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { mount } from 'appList/mount';
export default defineComponent({
  name: 'HomeView',
  setup(props, { emit }) {
    const state = reactive({});

    onMounted(async () => {
      await mount();
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
