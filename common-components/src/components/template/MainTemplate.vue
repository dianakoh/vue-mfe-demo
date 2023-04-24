<template>
  <div><slot /></div>
</template>

<script lang="ts">
import '@/resources/styles/main.scss';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainTemplate',
});
</script>
