<template>
  <div class="hello">
    <b-container>
      <b-col cols="10">
        <div>
          <b-table striped hover :items="clients"></b-table>
        </div>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Dashboard",
  props: {
    msg: String,
  },
  data(){
      return{
          clients:[]
      }
  },
  created(){
      this.getClients()
  },
  methods: {
       async getClients() {
      try {
        this.isBusy = true;
        let response = await axios.get(
          "http://localhost:8090/clientes/listclientes"         
        );

        //let data=response
        this.clients = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isBusy = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
