<template>
  <AsyncComponent></AsyncComponent>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  folder: { type: String, required: true },
  component: { type: String, required: true },
})

const AsyncComponent = defineAsyncComponent(() => import(`./components/${props.folder}/${props.component}.vue`));
</script>
