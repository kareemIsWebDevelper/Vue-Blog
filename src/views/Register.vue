<template>
   <div class="card">
        <button class="googleBtn" @click="signInWithGoogle">
            <img class="rounded-circle" src="../assets/google.jpg">
            <p>Continue With Google</p>
        </button>        
        <div class="form-group">
            <input type="text" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="pwd" placeholder="Password ">
        </div>
        <button class="btn" @click="register">Sign Up</button>
    </div>

    <footer>
        <Footer />
    </footer>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import { ref } from 'vue';
import {
getAuth,
createUserWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref('');
const pwd = ref('');

const router = useRouter();
const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, pwd.value)
    .then((data) =>  {
        console.log("Successfully Registered!")
        router.push('/')
    })
    .catch((error) => {
        console.log(error.code)
        alert(error.message)
    })
};
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user);
        router.push("/");
    })
    .then((error) => {
        console.log(error);

    })
};
</script>

<style scoped>
  .card {
        background-color: white;
        width: 380px;
        margin: auto;
        padding: 20px;
    }
    input {
        margin-bottom: 20px;
        text-indent: 15px;
        padding: 10px;
    }

    .googleBtn,.btn {
        background-color: orange;
        border: 1px solid lightblue;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 10px;
        color: white;
    }
    .googleBtn:hover, .btn:hover {
        background-color: orange;
        color: blue;
    }
    .googleBtn  {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .googleBtn p {
        margin-top: 15px;
        margin-right: 30px;
    }
    .googleBtn img {
        width: 30px; 
        height: 30px;
        margin-left: 30px;
    }
    
    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    @media screen and (max-width: 415px) {
    .card {
      margin-top: 100px;
    }
  }
</style>