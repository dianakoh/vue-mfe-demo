<template>
  <div>
    <Navigation :navigationItems="state.navigationItems" />
    <router-view />
  </div>
</template>

<script lang="ts">
import '@/resources/styles/main.scss';
import { defineComponent, reactive } from 'vue';
import { Navigation } from '@/components';
export default defineComponent({
  name: 'App',
  components: { Navigation },
  setup(props, { emit }) {
    const state = reactive({
      navigationItems: [{ label: 'Home', to: '/' }],
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
