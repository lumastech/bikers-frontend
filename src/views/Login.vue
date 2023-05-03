<template>
  <div class="w-full h-full bg-gradient-to-b from-sky-500 to-teal-500 fixed p-4 text-center">
    <div class="bg-white rounded-xl max-w-xs mx-auto shadow-md px-2 md:px-4 py-10 md:py-16 text-center mt-32">
        <a href="/dashboard"><img src="../assets/full-logo.png" alt="all1zed" class="h-12 mx-auto mb-7"></a>
        <h1 class="text-sky-400 text-2xl font-bold mb-7 drop-shadow">LOG IN</h1>
        
        <form @submit.prevent="authenticate">
          <div v-if="error_msg" class="text-red-500 max-w-sm bg-red-50/50 my-2 rounded-md p-1">{{ error_msg }}</div>
            <input type="text" v-model="form.username" class="rounded border border-sky-500 py-1 px-2 block mx-auto w-full" placeholder="username" required>
            <input type="password" v-model="form.password" class="rounded border border-sky-500 py-1 px-2  mt-2 block mx-auto w-full" placeholder="password" required>
            <button class="w-full rounded bg-gradient-to-r from-sky-300 to-teal-300 px-4 py-1 block my-4 mx-auto text-white uppercase shadow transition hover:opacity-50 " :disabled="loading">
              <i class="fas fa-gear mr-3" :class="{ 'animate-spin' : loading}"></i>
              {{ loading ? 'Processing' : 'Login' }}
            </button>
        </form>
    </div>
  </div>
  <Loading :loading="loading" />
</template>

<script>
import { reactive, ref, inject } from 'vue'
import Loading from './Shared/loading.vue'
import {useRouter} from 'vue-router'

export default {
  components: { Loading },
  setup() {
    const baseURL = inject('baseURL')
    const axios = inject('axios')
    const router = useRouter()

    const form = reactive({
      username: 'lumas',
      password: 'Lumas2023!'
    })
    const loading = ref(false)
    const error_msg = ref(null)

    const authenticate = () => {
        error_msg.value = ''
        if (form.username != '' && form.password != '') {
          loading.value = true
            axios.post(baseURL + 'auth/jwt/create', form).then((res) => {
            $cookies.set("access_token", res.data.access, '1d')
            $cookies.set("refresh_token", res.data.refresh, '1d')
            router.push('/dashboard')
            loading.value = false
            }).catch((res) => {
            if (res.response) {
              if (res.response.status == 401) {
                error_msg.value = 'Wrong username or password';
              } else if (res.response.data) {
                error_msg.value = res.response.data.detail;
              } else {
                error_msg.value = 'Something went wrong!'
              }
            }
            loading.value = false
          })
        } else {
          error_msg.value = 'Please enter username and password'
        }
    }
    return {
      authenticate, form, loading, error_msg,
    }
  },
}
</script>

<style>

</style>