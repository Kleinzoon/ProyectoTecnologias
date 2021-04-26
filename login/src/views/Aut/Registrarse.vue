<template>
    <div class= "fondo">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
      <div class= "navbar">
        <div class="principal">
          <div class="volver">
            <b-button  class="rounded-circle" size="lg" to="/Acceder">
              <b-icon icon="arrow-left" aria-hidden="true" scale="1.7" color=#48286C></b-icon>
            </b-button>
          </div>
         <b-link to="./Home" ><img class= "logo" v-bind:src="require('/imagenes/logo.png')" alt="Recurso no encontrado"></b-link>
          <h2 class= "Mprincipal">Mansión Multimedia</h2>
        </div>
          <h3>Registrarse</h3>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h3>Registrarse</h3><hr>
            <form action="#" @submit.prevent="registrarse">
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="person"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="text" placeholder="Nombre" v-model='nombre'></b-form-input>
              </b-input-group>
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="email" placeholder="usuario@unimilitar.edu.co"  
                    v-model='email'
                    pattern =".+unimilitar.edu.co" 
                    title="Recuerda usar tu correo institucional proporcionado por la UMNG.">
                  </b-form-input>
              </b-input-group>
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="password" placeholder="Contraseña"
                    v-model='contrasena'
                    pattern=".{6,}"
                    title="Por favor ingrese una contraseña de mínimo 6 caracteres">
                  </b-form-input>
              </b-input-group>
              <div>
                  <b-alert v-model='alerta' show variant="danger">
                    {{ error }}
                  </b-alert>
              </div>
              <div class="registrador">
                  <b-button pill class="button" type= "submit" >
                  <b-icon icon="person-fill" aria-hidden="true"></b-icon> 
                  Registrarse
                  </b-button>
              </div>
            </form>
          </div>
          <div class="info_regis">
            <p>Estamos felices de tenerte aquí, adelante, registrate.</p>
          </div>
        </div>
      </div>
      <div class= "footer">
        <p>Siguenos en nuestras redes sociales ;)</p>
      </div>
    </div>
</template>
<script>
import '@/firebase/init.js'
import firebase from 'firebase'
export default {
  data(){
    return{
      nombre:'',
      email: '',
      contrasena: '',
      error: '',
      alerta: false
    }
  },
  name: 'Registrarse',
  methods:{
    registrarse(){
      this.error=''
      if(this.nombre && this.email && this.contrasena){
        //enviar
        this.alerta=false;
        firebase.auth().createUserWithEmailAndPassword(this.email, this.contrasena)
        .then(user=>{
          //Actualizar usuario
          if(user){
              user.user.updateProfile({
              displayName: this.nombre
            }).then((u)=>{
              
              this.nombre=''
              this.email=''
              this.contrasena=''
              console.log(u)
              this.$router.push({name:'dash'})

            }).catch((err)=>{
              this.error=err.message
            })
          }
        }).catch(err=>{
          this.error=err.message
        })
      }else{
        this.alerta=true
        this.error='Complete todos los campos'
      }
    }
  }
}
</script>
<style>
.registrador{
  padding-top: 5px;
}
.registrador .button{
  background-color: #115886 !important;
  border-style: inherit !important;
  font-size: 15pt;
  padding-left: 30px;
  padding-right: 30px;
}
.registrador .button:hover{
  background-color: #052b44 !important;
}
.info_regis{
  font-style: italic;
  font-size: 22px;
  padding-left: 35px;
  padding-top: 30px;
  text-align: center;
  padding-bottom: .42em;
}
</style>