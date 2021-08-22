<template>
  <v-ons-page>
    <custom-toolbar>Page 1</custom-toolbar>
    <pre>{{message}}</pre>
    <p style="text-align: center">
      <v-ons-list v-for="todo in todos">
        <v-ons-list-item>{{todo.title}}</v-ons-list-item>
      </v-ons-list>
    </p>
  </v-ons-page>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  // import axios from 'axios';

  import customToolbar from './CustomToolbar';

  Vue.use(VueResource);
  // Vue.use(VueOnsen);

  export default {
    data() {
      return {
        message: "",
        todos: {}
      }
    },
    created() {
      // Make a request for a user with a given ID
      // var self = this;
      // axios.get('http://jsonplaceholder.typicode.com/todos')
      //   .then(function (response) {
      //     console.log(response);
      //     self.todos = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //     self.message = JSON.stringify(error, null, 4)
      //   });

      this.$http.get('http://jsonplaceholder.typicode.com/todos').then(
        response => {
          // success callback
          this.todos = response.data
          //alert(response.data.slice(1,11).map((x) => JSON.stringify(x)))
          console.log(response)
        },
        response => {
          // error callback
          console.log(response)
          // this.$ons.notification.alert(JSON.stringify(response))
          this.message = JSON.stringify(response, null, 4)
        });
    },
    props: ['pageStack'],
    components: { customToolbar }
  }

</script>