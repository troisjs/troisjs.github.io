<template>
  <AsyncComponent></AsyncComponent>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: ['folder', 'component'],
  setup(props) {
    const AsyncComponent = defineAsyncComponent(() => import(`./components/${props.folder}/${props.component}.vue`));
    // const AsyncComponent = defineAsyncComponent(() => import(`./components/${props.component}.vue`));
    return { AsyncComponent };
  }
}
</script>
