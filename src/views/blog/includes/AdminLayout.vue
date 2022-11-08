<template>
  <div class="flex gap-1 h-full fixed w-full">
    <div class="flex-none shrink-0 bg-green-500 px-1 h-full w-0 md:w-48 transition-all duration-300 overflow-x-hidden overflow-y-auto">
      link
    </div>
    <div class="flex-auto bg-blue-500 h-full">
      <Header />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';
  export default {
    data: () => ({ drawer: null }),
    components: { Header }
}
</script>