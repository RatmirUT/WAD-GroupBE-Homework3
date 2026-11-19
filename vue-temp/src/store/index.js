import { createStore } from 'vuex'
import postsData from '../posts.json'

const store = createStore({
    state: {
        posts: postsData
    },
    mutations: {
        incrementLikes(state, postId) {
            const post = state.posts.find(p => p.id === postId)
        
            if (post) {
                post.likes++
            }
        },

        resetLikes(state) {
            state.posts.forEach(post => {
                post.likes = 0
            })
        }
    }
})

export default store