import { defineStore } from "pinia";
import { collection, query, getDocs  } from "firebase/firestore";
import { db } from "../firebase";

export const usePostStore = defineStore('posts', {
  state: () => ({
    posts: [],
  }),
  actions: {
    async getPosts() {
      const first = query(collection(db, "posts"));
      this.posts = [];
      const querySnapshot = await getDocs(first);
      querySnapshot.forEach((doc) => {
        let post = doc.data();
        post.id = doc.id;
        this.posts.push(post);
        console.log(this.posts);
      })
    }
  }
})
