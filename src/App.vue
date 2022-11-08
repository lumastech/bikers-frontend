<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style> -->
<template>
  <router-view/>
</template>

<script>

export default{
  name:'App'
}
</script>
<style>
body, html{
  background-image: linear-gradient(to bottom, #1B3E80, #12203A 50% );
  background-size: cover;
  background-repeat: no-repeat;
  color: rgb(130, 183, 252);
  background-clip: fixed;
}
.router-link-exact-active{
  border-bottom: 4px solid rgb(228, 11, 119) !important;
}

.text-shadow{
  text-shadow: 1px 1px #12203A;
}

.text-shadow-2{
  text-shadow: 2px 2px #12203A;
}
</style>
