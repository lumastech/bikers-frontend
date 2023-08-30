<template>
    <nav class="bg-gradient-to-r from-sky-400 to-teal-400">
        <div class="flex max-w-7xl mx-auto gap-4 px-2 text-white py-2">
            <i class="fas fa-bars self-center"></i>
            <router-link to="/" class="flex-auto">ALL1ZED</router-link>
            <router-link to="/login"><i class="fas fa-lock"></i> Login</router-link>
        </div>
    </nav>

    <!-- header -->
    <header>
        <div class="home-header">
            <div class="bg-gradient-to-r from-sky-800/80 to-teal-800/80 h-56 md:h-96 pt-12 px-4 md:pt-48">
                <div class="text-center text-white max-w-md mx-auto">
                    <p class="font-bold">Whats your package tracking number?</p>
                    <input type="search"
                        class="rounded-full border border-sky-500 block w-full my-4 px-4 py-1 text-sky-500 bg-white/80">
                    <button
                        class="rounded-full px-4 py-2 bg-gradient-to-r from-sky-400 to-teal-400 shadow-md w-48 hover:opacity-50 transition">Search</button>
                </div>
            </div>
        </div>
    </header>


    <!-- image slider -->
    <carousel :items-to-show="1" :itemsToScroll="1" :wrap-around="true" :autoplay="3000" :transition="1000" class="max-w-4xl mx-auto block my-12">
        <slide class="">
            <img src="../assets/1b.jpg" alt="all1zed" class="w-full aspect-video rounded-md">
        </slide>
        
        <slide class="">
            <img src="../assets/1c.jpg" alt="all1zed" class="w-full aspect-video rounded-md">
        </slide>
        
        <slide class="">
            <img src="../assets/1d.jpg" alt="all1zed" class="w-full aspect-video rounded-md">
        </slide>
    </carousel>


    <!-- 3 sugguested images -->
    <div class="grid grid-cols-3 gap-2 max-w-4xl mx-auto mb-12">
        <img src="../assets/1b.jpg" alt="all1zed" class="rounded aspect-video">
        <img src="../assets/1c.jpg" alt="all1zed" class="rounded aspect-video">
        <img src="../assets/1d.jpg" alt="all1zed" class="rounded aspect-video">
    </div>

    <footer class="py-16 bg-gradient-to-b from-sky-500 to-teal-500">
        <div class="max-w-4xl mx-auto text-center">
            <router-link to="#" class="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-1 px-4 rounded shadow hover:shadow-xl transition">CLICK TO BUY BUS TICKETS</router-link>
            <h2 class="my-7 text-2xl md:text-4xl text-white font-bold drop-shadow">GET THE APP FROM</h2>
            <div class="grid grid-cols-2 gap-4">
                <div class="md:text-right">
                    <router-link to="#" class="inline-block bg-black text-white text-xs md:text-xl py-1 px-4 rounded shadow hover:shadow-xl hover:bg-black/50 transition"><img src="../assets/play.png" alt="play store" class="h-9 inline"> GOOGLE PLAY</router-link>
                </div>
                <div class="md:text-left">
                    <router-link to="#" class="inline-block bg-sky-600 text-white text-xs md:text-xl py-1 px-4 rounded shadow hover:shadow-xl hover:bg-black/50 transition"><img src="../assets/apple.png" alt="play store" class="h-9 inline"> APPLE STORE</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="js">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
export default {
    components: {
        Carousel, Slide
    },
}
</script>

<style>
.home-header {
    background-image: url('../assets/pkg.jpg');
    background-size: cover;
}
</style>