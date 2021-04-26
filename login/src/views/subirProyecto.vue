<template>
  <div class="eldiv">
        <form @submit.prevent="onSubmit">
          <input type="text" placeholder="Introduce nombre">
          <br>
          <input type="number" placeholder="Introduce edad">
          <br>
          <button type="submit" class="btn btn-success mt-3"> Añadir</button>
          <hr>
        </form>
  </div>
</template>

<script
src="https://www.gstatic.com/firebasejs/firebase-firestore.js">
</script>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
import {createUser} from 'firebase'
import {reactive} from 'vue'
var url = "http://localhost/Parcial_SN/connect.php";
export default {
  setup(){
    const form = reactive({name: ''})
    const onSubmit= async () =>{
      await createUser({...form})
      form.name =''
    }
    return {form, onSubmit}
  },
  data(){
    return{
      nombre:null,
      edad:null,
      usuarios:[]
    }

  },
  created(){
    this.mounted();
  },
  methods:{
    mounted(){
      this.usuarios=[];
      coleccion.get()
        .then( (r) =>r.docs.map((item) => this.usuarios.push({id:item.id, data:item.data()})) )
    }
  }

}
</script>

<style>
.eldiv{

    color:black;
}
</style>