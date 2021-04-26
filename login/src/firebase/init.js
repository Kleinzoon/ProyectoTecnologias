import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyAk95x_koQnbXpSVGURZ_o7qEyLoab4NK8",
    authDomain: "mansion-multi.firebaseapp.com",
    projectId: "mansion-multi",
    storageBucket: "mansion-multi.appspot.com",
    messagingSenderId: "575710778423",
    appId: "1:575710778423:web:f881668edaa0301e531bb2",
    measurementId: "G-V9D0H5STWY"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebaseApp.firestore();
  const coleccion = db.collection('users');

  export const createUser = user =>{
    return coleccion.add(user)
  }

  export const getUser = async id =>{
    const user = await coleccion.doc(id).get()
    return user.exists ? user.data(): null
  }

  export const updateUser = (id, user) =>{
    return coleccion.doc(id).update(user)
  }

  export const deleteUser = id =>{
    return coleccion.doc(id).delete()
  }

  export const useLoadUsers = () =>{
    const users= ref([])
    coleccion.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id:doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
  }