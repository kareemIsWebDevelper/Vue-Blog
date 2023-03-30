<script setup>
  const props = defineProps({
  post: Object    
})
</script>

<template>
   <div class="card" style="width: 50%">
        <h5 class="card-header bg-white">{{ post.title }}</h5>
        <div class="card-body ">
        <p class="card-text text-justify">
          {{ post.content }}
        </p>
      </div>
        <RouterLink class="button" :to="`/details/${post.id}`">
          See Details 
        </RouterLink>      
    </div>
</template>

<style scoped>
  .card {
    width: 380px;
    margin: auto;
  }
  .button {
    background-color: orange;
    padding: 10px;
    color: white;
    font-size: 20px;
    text-decoration: none;
    text-align: center;
  }
</style>