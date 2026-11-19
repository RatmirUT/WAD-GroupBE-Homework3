<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
    isMenuOpen.value = false
}

onMounted(() => {
    document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
    document.removeEventListener('click', closeMenu)
})

</script>

<template>
    <header class="site-header">
        <nav>
            <div class="nav-links">
                <RouterLink to="/">Home</RouterLink>
                <span class="divider">|</span>
                <RouterLink to="/addPost">addPost</RouterLink>
                <span class="divider">|</span>
                <RouterLink to="/signup">Signup</RouterLink>
            </div>

            <div class="profile-container" @click.stop>
                <img src="/images/profile.jpg" alt="Profile" class="profile-pic" @click="toggleMenu">

                <div v-if="isMenuOpen" class="dropdown-menu">
                    <p class="user-name">John Doe</p>
                    <p class="user-email">john.doe@ut.ee</p>
                <a href="#" class="logout-link">logout</a>
                </div>
            </div>

        </nav>
    </header>
</template>

<style scoped>
.site-header {
    background-color: #a6a6a6;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 0 0 10px 10px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    text-decoration: none;
    color: black;
    padding: 10px 5px;
}

nav a:hover {
    background-color: lightgray;
}

.profile-pic {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
}

.divider {
    margin: 0 5px;
    font-weight: bold;
}


.profile-container {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    top: 50px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    min-width: 140px;
    z-index: 10;
}

.dropdown-menu p,
.dropdown-menu .logout-link {
    margin: 1px 0;
    font-size: 14px;
    color: black;
    display: block;
    text-decoration: none;
}

.dropdown-menu .user-email {
    font-size: 13px;
}

.dropdown-menu .logout-link:hover {
    text-decoration: underline;
}

</style>

