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
    <section class="content">
      <aside class="sidebar"></aside>

      <section class="posts">
      
      <Post
        v-for="post in store.state.posts"
        :key="post.id"
        :postId="post.id"
      />

      </section>

      <aside class="sidebar"></aside>

    </section>

    <button @click="resetAllLikes" class="like-reset">Reset likes</button>

  </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

.content {
  display: flex;
  justify-content: space-between;
}

.sidebar {
    background-color: lightgray;
    width: 18%;
    border-radius: 10px;
    min-height: 200px;
}

.posts {
    display: flex;
    flex-direction: column;
    width: 55%;
    gap: 10px;
}

.like-reset {
  width: fit-content;
  padding: 5px;
  border-radius: 10px;
  border-style: none;
  background-color: rgb(70, 122, 218);
}
</style>


