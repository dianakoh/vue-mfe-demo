<template>
  <app-root></app-root>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from 'vue';
import { mount } from 'angularAppAbout/mount';
export default defineComponent({
  name: 'AboutView',
  setup(props, { emit }) {
    const state = reactive({});

    onMounted(() => {
      mount();
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
