<template>
  <nav class="flex gap-4 px-4 py-2 shadow">
    <button class="self-center"><i class="fas fa-bars"></i></button>
    <a href="/" class="self-center"><img src="../assets/LO.png" alt="" class="h-7"></a>
    <span class="flex-auto self-center">Dashboard</span>
    <button class="self-center py-1 px-2 shadow shadow rounded-full"><i class="fas fa-user"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-user"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-user"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-user"></i></button>
  </nav>

  <div class="flex fixed h-full w-full">
    <div class="w-48 shrink-0 shadow h-full transion">eeee</div>
    <div class="flex-auto p-4">
        <slot></slot>
    </div>
  </div>
  <div class="">
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>