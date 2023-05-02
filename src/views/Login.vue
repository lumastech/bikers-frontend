<template>
  <div class="w-full h-full bg-gradient-to-b from-sky-500 to-teal-500 fixed p-4 text-center">
    <div class="bg-white rounded-xl  mx-auto shadow-md px-2 md:px-4 py-10 md:py-16 text-center  md:right-2/4 mx-auto inline-block mt-32">
        <a href="/dashboard"><img src="../assets/full-logo.png" alt="all1zed" class="h-12 mx-auto mb-7"></a>
        <h1 class="text-sky-400 text-2xl font-bold mb-7 drop-shadow">LOG IN</h1>
        
        <form @submit.prevent="authenticate">
          <div class="text-red-500"></div>
            <input type="text" v-model="form.username" class="rounded border border-sky-500 py-1 px-2 block mx-auto" placeholder="username" required>
            <input type="password" v-model="form.password" class="rounded border border-sky-500 py-1 px-2  mt-2 block mx-auto" placeholder="password" required>
            <button class="w-full rounded bg-gradient-to-r from-sky-300 to-teal-300 px-4 py-1 block my-4 mx-auto text-white uppercase shadow transition hover:opacity-50 ">Login</button>
        </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })
    const authenticate = () => {
      axios.get('https://www.google.com')
      console.log(form)
    }
    return {
      authenticate, form
    }
  }
}
</script>

<style>

</style>