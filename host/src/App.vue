<template>
  <div>
    <Navigation :navigationItems="state.navigationItems" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Navigation from 'commonComponents/Navigation.vue';
export default defineComponent({
  name: 'App',
  components: {
    Navigation,
  },
  setup(props, { emit }) {
    const state = reactive({
      navigationItems: [
        { label: 'Home', to: '/' },
        { label: 'About', to: '/about' },
      ],
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
