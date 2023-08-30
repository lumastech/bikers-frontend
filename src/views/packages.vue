<template>
  <Dashboard>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
     <div class="rounded-md shadow p-2 h-80 my-7">
         <h1 class="text-sky-400">PACKAGES</h1>
         <div class="bg-gradient-to-r from-sky-400 to-teal-400 h-px"></div>
         <table class="table-auto w-full uppercase">
            <thead>
                <tr>
                    <th>tracking No.</th>
                    <th>sender phone</th>
                    <th>RECEVER name</th>
                    <th>RECEVER phone</th>
                    <th>ticket n0</th>
                    <th>from</th>
                    <th>destination</th>
                    <th>bus</th>
                    <th>processed by</th>
                    <th>valus k</th>
                    <th>charge k</th>
                    <th>status</th>
                    <th>date</th>
                </tr>
            </thead>
         </table>
     </div>
  </Dashboard>
</template>

<script>
import { inject, reactive } from 'vue';
import Dashboard from '../layouts/dashboard.vue'
export default {
    layout: Dashboard,
    components: {
        Dashboard
    },
    setup() {
        const axios = inject('axios')
        const baseURL = inject('baseURL')
        const packag = reactive({})
        const package_filters = reactive({
            date: '',
            bike: '',
        })

        // fetch packages
        const getPackages = (filters) => {
            axios.get(baseURL + 'packages').then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        }
        return {
            packag, getPackages
        }
    },

    created() {
        this.getPackages()
    }
}
</script>

<style>

</style>