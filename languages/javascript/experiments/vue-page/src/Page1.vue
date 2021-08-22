<template>
  <v-ons-page>
    <custom-toolbar>Page 1</custom-toolbar>
    <p style="text-align: center">
      This is the first page
      <v-ons-button @click="push">Push Page 2</v-ons-button>
    </p>
  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar';
  import page2 from './Page2';
  export default {
    methods: {
      pop() {
        this.pageStack.pop();
      },
      push() {
        this.pageStack.push({
          extends: page2,
          data() {
            return {
              msg: "this is a message"
            }
          }
        });
      }
    },
    props: ['pageStack'],
    components: { customToolbar }
  }

</script>