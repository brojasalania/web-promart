<template>
    <div  class="loader">
        <div class="load-relative">
            <clip-loader  :loading="loading" :color="color" :size="size"></clip-loader>
        </div>
        
    </div>
        
    
</template>
<script>
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
    name:'Loader',
    data(){
        return{
            loading:false,
            color:'#FF7A00',
            size:'80px'
     }
    },
    components:{ClipLoader},
   
    
}
</script>
<style scoped>
.loader{background: none repeat scroll 0 0 black;
    position: fixed;
    display: block;
    opacity: 0.5;
    z-index: 1000001;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;}
    .load-relative{top: 50%;position: relative;}
    .vertical-align-middlee{position: absolute !important;
}
    
</style>