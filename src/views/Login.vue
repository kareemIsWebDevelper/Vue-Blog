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
        <button class="btn" @click="register">Continue With Email</button>
        <div class="card-body">
            No account?
            <RouterLink to="/register">
                Sign Up
            </RouterLink>
        </div>
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
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { useRouter } from "vue-router";
const email = ref('');
const pwd = ref('');
const errMsg = ref();
const router = useRouter();

const auth = getAuth()
const register = () => {
    signInWithEmailAndPassword(auth, email.value, pwd.value)
    .then((data) =>  {
        console.log("Successfully Signed In!")
        console.log(auth.currentUser)
        router.push('/')
    })
    .catch((error) => {
        alert(error.message)
        console.log(error.code)
        switch (error.code) {
            case 'auth/invalid-email':
                errMsg.value = 'Invalid email'
                break;
            case 'auth/user-not-found':
                errMsg.value = "No account with that email was found"
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password"
                break;
            default:
                errMsg.value = "Email or password was incorrect"

        }
    })
}
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

    footer {
        position: absolute;
        bottom: 0;
        width: 100%;
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
    @media screen and (max-width: 415px) {
    .card {
      margin-top: 100px;
    }
  }
</style>