<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  // All other pages imported here
  import page1 from './Page1';
  import page2 from './Page2';

  export default {
    data() {
      return {
        // Initialize
        // First page
        pageStack: [page1]
      }
    }
  }
</script>
