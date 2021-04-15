<template>
  <div class="main">
    <b-container>
      <b-row>
        <b-col cols="8" class="center-col padding-five-tb">
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
              id="input-group-1"
              label="Nombres:"
              label-for="input-1"
              
            >
              <b-form-input
                id="input-1"
                v-model="form.nombre"
                type="text"
                placeholder="Ingrese su nombre"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Apellidos:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.apellido"
                type="text"
                placeholder="Ingrese sus apellidos"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Edad:"
              label-for="input-3"
            >
              <b-form-input
                id="input-2"
                v-model.number="form.edad"
                type="number"
                placeholder="Ingrese su edad"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              label="Fecha de nacimiento:"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.fecha"
                type="date"
                placeholder="Ingrese su edad"
                required
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" class="padding-five-lr" variant="primary">Submit</b-button>
            <b-button type="reset" class="padding-five-lr" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <div><loader v-show="loading" > </loader></div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from '../components/Loader.vue';
export default {
  components: { Loader },
  name: "Home",
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        edad: 0,
        fecha: ""
        
      },
      loading:false
    };
  },
  props: {
    msg: String,
  },
  methods: {
 
    async onSubmit(event) {
      try {
          event.preventDefault();
        this.loading=true

        let response = await axios.post(
          "http://localhost:8090/clientes/creacliente",
          this.form,
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        console.log(response);
        
        
        this.$router.push({ path: 'dashboard' })
      } catch (error) {
       
        console.log(error);
      } finally {
        this.loading=false
      }
    },
    onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.apellido= ''
        this.form.nombre = ''
        this.form.age = 0,
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        
      }
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
.center-col{float: none;margin-left: auto;margin-right: auto;}
.padding-five-tb{margin-top: 10px;margin-bottom: 10px;}
.padding-five-lr{margin-left: 5px;margin-right: 5px;}
</style>
