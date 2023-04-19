<script setup>
import Footer from "../components/Footer.vue";
import { onMounted, reactive } from "vue";
import PostCard from "../components/PostCard.vue";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const posts = reactive([]);

async function getPosts() {
  const first = query(collection(db, "posts"));
  const querySnapshot = await getDocs(first);
  querySnapshot.forEach((doc) => {
    let post = doc.data();
    post.id = doc.id;
    posts.push(post);
    console.log(posts);
  });
}

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div class="card-image">
    <img src="../assets/unnamed.png" alt="img"/>
    <br />
    <br />
  </div>
  <div>
    <div v-for="post in posts" key="post.id">
      <PostCard :post="post" />
      <br />
    </div>
  </div>

  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.card-image {
  display: grid;
  place-items: center;
}
.card-image img {
  width: 350px;
  height: 350px;
}
@media screen and (min-width: 1000px) {
  .card-image img {
    width: 800px;
    height: 800px;
  }
}
@media screen and (min-width: 500px) and (max-width: 1000px) {
  .card-image img {
    width: 500px;
    height: 500px;
  }
}
</style>
