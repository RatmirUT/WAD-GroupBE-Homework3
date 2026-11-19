<script setup>
import { useStore } from 'vuex'
import Post from '../components/Post.vue'

const store = useStore()

function resetAllLikes() {
    store.commit('resetLikes')
}
</script>

<template>
  <main class="container">
    <aside class="sidebar"></aside>

    <section class="posts">
      
    <Post
      v-for="post in store.state.posts"
      :key="post.id"
      :postId="post.id"
    />

    <button @click="resetAllLikes">Reset Likes</button>

    </section>

    <aside class="sidebar"></aside>
  </main>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 15px;
}

.sidebar {
    background-color: lightgray;
    width: 20%;
    border-radius: 10px;
    min-height: 200px;
}

.posts {
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>


