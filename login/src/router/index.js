import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Acceder from '../views/Aut/Acceder.vue'
import Registrarse from '../views/Aut/Registrarse.vue'
import dash from '../views/dash.vue'
import Acceso from '../components/Acceso.vue'
import subirProyecto from '../views/subirProyecto.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Acceder',
    name: 'Acceder',
    component: Acceder
  },
  {
    path: '/Acceso',
    name: 'Acceso',
    component: Acceso
  },
  {
    path: '/Registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
  {
    path: '/dash',
    name: 'dash',
    component: dash,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/subirProyecto',
    name: 'subirProyecto',
    component: subirProyecto
  },
  // {
  //   path:'/edit/:id',
  //   name: 'edit',
  //   component: edit
  // }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next)=>{
  if(to.matched.some(ruta=>ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if(user){
      next();
    }else{
      next({
        name: 'Home'
      })
    }
  }else{
    next();
  }
})
export default router
