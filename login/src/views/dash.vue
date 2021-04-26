<template>
    <div class= "fondo">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
        <template v-if="user">
            <b-navbar class="navbar" toggleable type="dark">
               <div class="dashito">
                    <div class="volver">
                        <b-button  class="rounded-circle" size="lg" to="/Home">
                        <b-icon icon="arrow-left" aria-hidden="true" scale="1.7" color=#48286C></b-icon>
                        </b-button>
                    </div>
                    <b-link to="./Home" ><img class= "logo" v-bind:src="require('/imagenes/logo.png')" alt="Recurso no encontrado"></b-link>
                    <h2 class= "Mprincipal">Mansión Multimedia</h2>
                </div>
                <b-navbar-brand class="nombre" >{{ user.displayName || user.email}}</b-navbar-brand>

                <b-nav-item-dropdown class="op" text="Opciones" right>
                    <b-dropdown-item  to="/dash">Dash</b-dropdown-item>
                    <b-dropdown-item @click.prevent="logout">Cerrar Sesión</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar>
        </template>
        <template v-else>
            No has ingresado :/
        </template>
        <div class="carga_archivos">
                
            <div class="form-imagenes">
                <p>Cargar Imagen:</p>
                <input class ="b" type="file"  @change="previsualizar" accept=".png, .jpg" change="onUpload($event)">

                <div>
                    <p>Progreso:    {{uploadValue.toFixed()+"%"}}
                        <progress :value ="uploadValue" max="100">

                        </progress>
                    </p>
                </div>
                    <img class="preview" :src="picture">
                    <br>
                    <div class= "botonn">
                        <b-button pill  class="button" @click="onUpload">
                            Cargar Imagen
                        </b-button>
                    </div>
            </div>
            <b-button class="button" to="/subirProyecto">
                    Llenar formulario
            </b-button>
                
            <!-- <div class="form-archivos">
                <p>Cargar Archivo:</p>
                <input class ="b" type="file"  @change="previsualizar2" accept=".pdf" change="onUpload2($event)">

                <div>
                    <p>Progreso:    {{uploadValue2.toFixed()+"%"}}
                        <progress :value ="uploadValue2" max="100">

                        </progress>
                    </p>
                </div>
                    <br>
                    <div class= "botonn">
                        <b-button pill  class="button" @click="onUpload2">
                            Cargar Archivo
                        </b-button>
                    </div>
            </div> -->

        </div>
         <div class= "footer">
            <p>Siguenos en nuestras redes sociales ;)</p>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data (){
        return{
            user: null,

            imageData: null,
            picture:null,
            uploadValue:0,

            // archivoData:null,
            // archivo:null,
            // uploadValue2:0
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name : 'Home'})
            })
        },
        onUpload(){
            const id= Math.random().toString(36);
            this.picture=null;
            const storageRef=firebase.storage().ref(`imagenes/${this.imageData.name}`+`${id}`).put(this.imageData);
            storageRef.on('state_changed', snapshot=>{
                this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, 
            error=>{console.log(error.message)},
            ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.picture=url;
            });
            });
        },
        previsualizar(event){
            this.uploadValue=0;
            this.picture=null;
            this.imageData=event.target.files[0];
        },
        // previsualizar2(event){
        //     this.uploadValue2=0;
        //     this.archivo=null;
        //     this.archivoData=event.target.files[0];
        // },
        // onUpload2(){
        //     const id= Math.random().toString(36);
        //     this.archivo=null;
        //     const storageRef=firebase.storage().ref(`pdf/${this.archivoData.name}`+`${id}`).put(this.archivoData);
        //     storageRef.on('state_changed', snapshot=>{
        //         this.uploadValue2=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        //     }, 
        //     error=>{console.log(error.message)},
        //     ()=>{this.uploadValue2=100;
        //     storageRef.snapshot.ref.getDownloadURL().then((url)=>{
        //         this.archivo=url;
        //     });
        //     });
        // }
    },
    //Created verifica si hay un usuario registrado
    created(){
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                this.user=user
            }else{
                this.user=null
            }
        })
    }
}
</script>
<style>
.nombre{
    font-family: 'Lato', sans-serif;
    font-size: 35px !important;
    font-style: italic;
    color:white !important;
    margin-right: 10em !important;
}

img.preview{
    width: 300px;
    height: 200px;
    border-style: double;
    background-color: #D0EAF2;
}

.dashito{
    display: flex;
}
.op{
    color:lime;
}
.op a{
    color:#D0EAF2;
}
.op a:hover {
    color:#70b6e6
;
}
.dropdown-item{
    color: #296C52 !important;
}
.form-imagenes{
    padding-bottom: 10em;
}
.carga_archivos{
    height: 76.6vh;
    text-align: center;
}
.button{
    color:white !important;
    font-family: 'Lato', sans-serif !important ;
    background-color: #115886 !important;
    border-style: inherit !important;
    font-size: 15pt;
}
.botonn{
    padding-top: 10px;
}
</style>