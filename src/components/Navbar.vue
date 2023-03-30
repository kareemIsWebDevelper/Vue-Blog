<template>
    <nav class="navbar navbar-expand-sm bg-white navbar-sticky">
        <div class="container-fluid">
            <div class="navbar-brand">
                <RouterLink to="/">
                    <img src="../assets/logo.jpg">
                </RouterLink>
            </div>
            <div class="nav">
                <RouterLink to="/login" class="nav-link">
                    Login/ SignUp
                </RouterLink>
                <button 
                @click="handleSignOut"
                v-if="isLoggedIn" 
                class="btn btn-danger">
                    Sign Out
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { onMounted, ref } from 'vue';

const isLoggedIn = ref(false);

let auth;
onMounted(() =>{
    auth = getAuth();
    onAuthStateChanged(auth, (User) => {
        if (User) {
            isLoggedIn.value = true;
        }else {
            isLoggedIn.value = false;
        }
    })
});

const router = useRouter()
const handleSignOut = () =>{
    signOut(auth).then(() => {
        router.push("/");
    })
}
</script>

<style scoped>
    .navbar-brand img {
        width: 30px;
        height: 30px;
    }
    .nav-link {
        color: white;
        text-decoration: none;
        background-color: rgb(255, 166, 0);
        border-radius: 10px;
        margin-right: 10px;
    }

    .container-fluid {
        padding-right: 50px;
        padding-left: 50px;
    }

</style>