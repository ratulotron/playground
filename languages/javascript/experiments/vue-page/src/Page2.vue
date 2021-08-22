<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Page 1'">Page 2</custom-toolbar>
    <p style="text-align: center">{{this.msg}}</p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import app from './App';

  export default {
    // data() {
    //   return {
    //     msg: ""
    //   }
    // },
    methods: {
      pop() {
        this.pageStack.pop();
      } 
    },
    props: ['pageStack'],
    components: { customToolbar }
  }
</script>
