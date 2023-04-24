<template>
  <div class="card-container"><slot /></div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'BaseCard',
  setup(props, { emit }) {
    const state = reactive({});

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.card-container {
  position: relative;
  display: block;
  width: 50rem;
  height: 18.75rem;
  margin: 5rem auto;
  overflow: hidden;
  border-radius: 0.625rem;
  transition: all 0.4s;
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
}
</style>
