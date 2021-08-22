import axios from 'axios';

function fetchTodos() {
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return []
      });
}

export default fetchTodos;