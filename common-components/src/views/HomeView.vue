<template>
  <div class="container"><BaseCard /></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { BaseCard } from '@/components';
export default defineComponent({
  name: 'HomeView',
  components: {
    BaseCard,
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
