<template>
    <div class= "pantalla">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
        <div class= "modelitos"  width=200px>
            <p>Aqui van los modelos</p>
        </div>
        <div class = "lateral">
            <div class= "barra_ingreso">
                <b-link to="/Home" ><img class= "logo" v-bind:src="require('/imagenes/logo.png')" alt="Recurso no encontrado"></b-link>
                <h2 class= "Mprincipal">Mansión Multimedia</h2>
                <div class= "espaciador">
                    <b-button pill class= "redondo" variant="light" size="lg" to="/Acceder">
                        <b-icon icon="person-fill" font-scale=1 color= grey></b-icon>
                        Usuario
                    </b-button>
                </div>
            </div>
            <div class= "informacion">
                <h2>Información</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad fuga aliquam reiciendis temporibus enim facere obcaecati dolore praesentium commodi 
                aspernatur, fugiat dolores, beatae consectetur voluptas ipsum harum asperiores animi.</p>
            </div>
            <div class= "contacto">
                <h2>Contacto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ad fuga aliquam reiciendis temporibus enim facere obcaecati dolore praesentium commodi 
                aspernatur, fugiat dolores, beatae consectetur voluptas ipsum harum asperiores animi.</p>
            </div>
            <div class="btnProyectos">
                <b-button pill class = "elbo" variant="info" size="lg" to="/dash">
                    Proyectos estudiantes
                </b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
.pantalla{
    display: flex;
    font-family: 'Lato', sans-serif;
}
.modelitos{
    width: 136vh;
    text-align: center;
    background-color:mediumaquamarine;
}
.lateral{
    width: 38em;
    height: 100vh;
    background-color: #D0C0DF;
}
.logo{
    width: 60px;
    height: 65px;
}
.barra_ingreso{
    padding-left: 10px;
    padding-top: 10px;
    background-color: #48286C;
    width: 38em;
    height: 6em;
    display:flex;
    
}
.redondo{
    height: 50px;
}
.icono{
    color:#ACA9A9;
    font-size: 30px !important;
}
.espaciador{
    padding-left: 15px;
    padding-left: 50px;
    padding-top: 8PX;
}
.Mprincipal{
    font-weight: 700 !important;
    font-style: italic !important;
    padding-top: 14px;
    font-size: 30px !important;
    padding-left: 8px;
    color: white;
}
.informacion h2{
    color:black;
    font-style: bold;
}
.informacion{
    color:black;
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 50px;
    text-align: justify;
}
.contacto h2{
    color:black;
    font-style: bold;
}
.contacto{
    color:black;
    padding-top: 10px;
    padding-left: 40px;
    padding-right: 50px;
    text-align: justify;
}
.btnProyectos{
    padding-top: 50px;
    text-align: center;
}
.elbo{
    font-size: 28px !important;
    font-style: bold !important;
    padding-left: 60px !important;
    padding-right: 60px !important;
    background-color: #115886 !important;
    border-style: none !important;
}
</style>