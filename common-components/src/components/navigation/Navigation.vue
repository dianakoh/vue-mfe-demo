<template>
  <div class="p-3 bg-red-700 text-white">
    <ul class="flex gap-x-4">
      <li v-for="item of navigationItems" :key="item.label">
        <a :href="item.to">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import '@/resources/styles/main.scss';
import { defineComponent, reactive, PropType } from 'vue';
export default defineComponent({
  name: 'Navigation',
  props: {
    navigationItems: {
      type: Array as PropType<{ label: string; to: string }[]>,
      required: true,
    },
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
