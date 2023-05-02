<template>
  <Dashboard>
    <div class="grid grid-cols-4 gap-4">
        <div class="flex gap-4 bg-gradient-to-r from-sky-100 to-teal-100 rounded-md p-4 shadow-sm shadow-black/20 hover:shadow-xl transition">
            <p class="flex-auto self-center text-gray-500 font-bold">SEND</p>
            <i class="fa-solid fa-truck-fast self-center text-2xl md:text-4xl text-sky-300"></i>
        </div>
        
        <div class="flex gap-4 bg-gradient-to-r from-sky-100 to-teal-100 rounded-md p-4 shadow-sm shadow-black/20 hover:shadow-xl transition">
            <p class="flex-auto self-center text-gray-500 font-bold">COLLECT</p>
            <i class="fa-solid fa-box-open self-center text-2xl md:text-4xl text-sky-300"></i>
        </div>
        
        <div class="flex gap-4 bg-gradient-to-r from-sky-100 to-teal-100 rounded-md p-4 shadow-sm shadow-black/20 hover:shadow-xl transition">
            <p class="flex-auto self-center text-gray-500 font-bold">ANY</p>
            <i class="fas fa-user self-center text-2xl md:text-4xl text-sky-300"></i>
        </div>
        
        <div class="flex gap-4 bg-gradient-to-r from-sky-100 to-teal-100 rounded-md p-4 shadow-sm shadow-black/20 hover:shadow-xl transition">
            <p class="flex-auto self-center text-gray-500 font-bold">ANY</p>
            <i class="fas fa-user self-center text-2xl md:text-4xl text-sky-300"></i>
        </div>
    </div>

     <!-- MAIN -->
     <div class="grid md:grid-cols-4 gap-4 mt-7">
        <div class="md:col-span-3 rounded-md shadow p-2 h-80">
            <h1 class="text-sky-400">PICK UPS</h1>
            <div class="bg-gradient-to-r from-sky-400 to-teal-400 h-px"></div>
            
        </div>
        
        <div class="rounded-md shadow p-2 bg-gradient-to-b from-sky-50 to-teal-50">
            <h1 class="text-sky-400">ACTIVITIES</h1>
            <div class="bg-gradient-to-r from-sky-500 to-teal-500 h-px"></div>
        </div>
     </div>
  </Dashboard>
</template>

<script>
import Dashboard from '../layouts/dashboard.vue'
export default {
    layout: Dashboard,
    components: {
        Dashboard
    }
}
</script>

<style>

</style>