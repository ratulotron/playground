<template>
  <div class="wrapper" @click="update">
    <pre>{{message}}</pre>
    <p style="text-align: center">
      <div v-for="todo in todos">
        <p>{{todo.title}}</p>
      </div>
    </p>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';

  Vue.use(VueResource);

  export default {
    data: {
      message: "",
      todos: {}
    },
    created() {
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
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }

</script>