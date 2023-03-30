<script setup>
import Footer from '../components/Footer.vue';
import { onMounted, reactive } from "vue";
import { RouterLink, useRoute } from 'vue-router'
import DetaitCard from "../components/DetaitCard.vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const route = useRoute()

const id = route.params.id

const state = reactive({
  post: null
})

async function getPostId (){
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
    state.post = docSnap.data()
    state.post.id = docSnap.id
    console.log (state.post)
} 
        
onMounted(() => {
   getPostId()
})
</script>
<template>
  <div class="row justify-content-center">
    <DetaitCard :post="state.post" />
  </div>

  
  <footer>
      <Footer />
  </footer>
</template>