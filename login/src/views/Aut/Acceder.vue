<template>
    <div class="fondo">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
      <div class= "navbar">
        <div class="principal">
          <div class="volver">
            <b-button  class="rounded-circle" size="lg" to="/Home">
              <b-icon icon="arrow-left" aria-hidden="true" scale="1.7" color=#48286C></b-icon>
            </b-button>
          </div>
          <b-link to="/Home" ><img class= "logo" v-bind:src="require('/imagenes/logo.png')" alt="Recurso no encontrado"></b-link>
          <h2 class= "Mprincipal">Mansión Multimedia</h2>
        </div>
         <h3>Acceder</h3>
      </div>
      <div class="container">
        <div class="columns">
          <div class="column is-6 is-offset-3">
            <h3>Acceder</h3><hr>
            <form action="#" @submit.prevent="Acceder">
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="envelope"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="email" placeholder="usuario@unimilitar.edu.co"  
                    v-model='email' pattern =".+unimilitar.edu.co" 
                    title="Recuerda usar tu correo institucional proporcionado por la UMNG.">
                  </b-form-input>
              </b-input-group>
              <b-input-group size="lg">
                  <b-input-group-prepend is-text>
                  <b-icon icon="key"></b-icon>
                  </b-input-group-prepend>
                  <b-form-input type="password" placeholder="Contraseña"  v-model='contrasena'></b-form-input>
              </b-input-group>
              <div>
                  <b-alert v-model='alerta' show variant="danger">
                    {{ error }}
                  </b-alert>
              </div>

              <div class = "botones_acceso" >
                <b-button pill class="button">
                  ¿Olvidaste tu contraseña?
                </b-button>
                <div>
                  <b-button pill type= "submit" class="button is-primary">
                  <b-icon icon="person-fill" aria-hidden="true"></b-icon>
                  Acceder
                  </b-button>
                </div>
              </div>
              <div class = "botones_acceso2">
                <b-button pill class="button" to="/Registrarse">
                  ¿Aún no tienes cuenta?
                </b-button>
              </div>
            </form>
          </div>
          <div class= "info_acces">
            <p>Bienvenido, ingresa a tu cuenta para cargar proyectos.</p>  
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
      email: '',
      contrasena: '',
      error: '',
      alerta: false
    }
  },
  name: 'Acceder',
  methods:{
    Acceder(){
      this.error=''
      if(this.email && this.contrasena){
        //enviar
        this.alerta=false;
        firebase.auth().signInWithEmailAndPassword(this.email, this.contrasena)
        .then(user=>{ 
            this.$router.push({ name: 'dash'})
          console.log(user)
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
.bg-image{
  background-image: image-set();
}
.fondo{
  font-family: 'Lato', sans-serif;
  background-color: #D0C0DF;
  /* background-image: url("/login/imagenes/textura-morada.jpg");
  background-size: 100vw 100vh;
  background-attachment: fixed; */
}
.volver{
  padding-left: 30px;
  padding-right: 40px;
}
.rounded-circle{
  height: 50px;
  background-color: #D0C0DF !important;
  border-color: #D0C0DF !important;
}
.principal{
  display: flex;
}
.navbar{
  background-color: #48286C;
}
.navbar h2{
  font-weight: 700;
  font-size: 30px;
  font-style: italic;
  color: white;
  padding-left: 20px;
  padding-top: 14px;
}
.navbar h3{
  color: white;
  padding-right: 870px;
  font-size: 25px;
}
.columns{
  padding-left: 100px;
  padding-right: 100px;
  text-align: center;
}
.container{
  padding-bottom: 12.2em;
}
.container h3{
  font-size: 45px;
  padding-top: 2.5em;
  padding-bottom: 1em;
  color: black;
}
form{
  padding-left: 200px;
  padding-right: 170px;
}

.botones_acceso .button{
  font-family: 'Lato', sans-serif !important ;
  background-color: #115886 !important;
  border-style: inherit !important;
  font-size: 15pt;
  padding-left: 30px;
  padding-right: 30px;
}
.botones_acceso .button:hover {
  background-color: #052b44 !important;
}
.botones_acceso{
  padding-left: 30px;
  padding-top: 5px;
  display:flex;
}
.botones_acceso div{
  padding-left: 40px;
}
.botones_acceso2{
  padding-top: 15px;
}
.botones_acceso2 .button{
  font-family: 'Lato', sans-serif !important ;
  background-color: #115886 !important;
  border-style: inherit !important;
  font-size: 15pt;
  padding-left: 120px;
  padding-right: 120px;
}
.botones_acceso2 .button:hover {
  background-color: #052b44 !important;
}
.info_acces{
  font-style: italic;
  font-size: 22px;
  padding-left: 35px;
  padding-top: 30px;
  text-align: center;
}
.footer{
  font-size: 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-style: italic;
  padding-top:2em;
  background-color: #48286C;
  height: 15vh;
  color:white;
  text-align: center;
}
</style>