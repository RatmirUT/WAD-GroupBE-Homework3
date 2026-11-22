<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>

<style>
.app {
    min-height: 100vh;
}
</style>