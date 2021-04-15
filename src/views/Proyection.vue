<template>
  <div>
    
    <b-container>
        <b-row>
            <b-col cols="12">
                <apexchart
                width="500"
                type="line"
                :options="chartOptions"
                :series="series"
                ></apexchart>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="10">
                <p>El promedio de las edades es:{{this.average}}</p>
                <p>La desviación estandar es:{{this.desviation}}</p>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "App",
  components: {},
  data() {
    return {
        chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: []
          }
        },
        series: [{
          name: 'Edades',
          data: []
        }],
      loaded: false,
      arrDate: [],
      average:'',
      desviation:''
      
    };
  },
  created(){
      this.getAverage()
  },
  async mounted() {
    let response = await axios.get(
      "http://localhost:8090/clientes/listclientes"
    );
    response.data.forEach((d) => {
        const dates = moment(d.fecha).format("YYYY");
        
        let parsedValue=parseInt(dates)
       // const age=this.chartData.map(o=>o.edad);
        this.chartOptions.xaxis.categories.push(parsedValue)
        this.series[0].data.push(d.edad)
     
    });
  },
  methods:{
     async getAverage() {
      try {
        
        let response = await axios.get(
          "http://localhost:8090/clientes/kpideclientes"         
        );

        //let data=response
        this.loaded=true
        this.average = response.data.promedio;
        this.desviation=response.data.desviacion;
      } catch (error) {
        console.log(error);
      } 
    },
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>