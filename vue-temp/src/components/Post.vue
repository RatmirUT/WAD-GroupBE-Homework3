
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
    postId: {
        type: Number,
        required: true
    }
})

const store = useStore()

const post = computed(() => {
    return store.state.posts.find(p => p.id === props.postId)
})

function likePost() {
    store.commit('incrementLikes', props.postId)
}

function formatDate(date) {
    const parts = date.split('-')
    const year = parts[0]
    const month = Number(parts[1]) - 1
    const day = Number(parts[2])

    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ]

    return months[month] + ' ' + day + ', ' + year
}

</script>



<template>
    <article class="post">
    <header class="post-header">
        <img src="/images/profile.jpg" alt="Profile" class="author-icon">
        <span class="post-date">{{ formatDate(post.date) }}</span>
    </header>
    
    <div v-if="post.image" class="post-media">
        <img :src="'/' + post.image" alt="Post image">
    </div>
    <p class="post-text">{{ post.text }}</p>

    <div class="post-footer">
        <button class="like" @click="likePost">
            <img src="/images/like.jpg" alt="Like">
        </button>

        <span>{{ post.likes }} likes</span>
    </div>

    </article>
</template>


<style scoped>
.post {
    background-color: lightgray;
    color: black;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}


.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
}

.post-header > img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.author-icon + .post-date {
    font-size: 12px;
    color: #000000;
}

.post-media img {
    width: 100%;
    border-radius: 5px;
}

.like {
    align-self: flex-start;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.like img {
    width: 24px;
    height: 24px;
    object-fit: contain;
}

.post-text {
    margin: 0;
    white-space: pre-line;
}

.post p {
    margin-top: 0;
    margin-bottom: 0;
}

.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>

