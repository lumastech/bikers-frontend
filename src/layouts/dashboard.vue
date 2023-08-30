<template>
  <nav class="flex gap-2 md:gap-4 px-4 py-2 shadow text-teal-500">
    <button class="self-center"><i class="fas fa-bars"></i></button>
    <RouterLink to="/" class="self-center shrink-0"><img src="../assets/LO.png" alt="" class="h-7"></RouterLink>
    <RouterLink to="/dashboard" class="flex-auto self-center hidden md:inline">Dashboard</RouterLink>
    <div class="flex-auto md:hidden"></div>
    <button class="self-center py-1 px-2 shadow shadow rounded-full"><i class="fas fa-sliders"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-envelope"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-bell"></i></button>
    <button class="self-center py-1 px-2 shadow rounded-full"><i class="fas fa-user"></i></button>
  </nav>

  <div class="flex fixed h-full w-full">
    <div class="w-0 md:w-10 lg:w-48 shrink-0 shadow h-full transion overflow-hidden transition-all">
      <div class="py-4 text-teal-500 space-y-px">
        <RouterLink to="/dashboard" class="flex w-full px-2 bg-sky-50 py-2 hover:bg-sky-200 transition space-x-4">
            <i class="fas fa-table-columns text-xl self-center"></i>
            <span class="self-center text-sm">DASHBOARD</span>
        </RouterLink>
        
        <RouterLink to="/packages" class="flex w-full px-2 bg-sky-50 py-2 hover:bg-sky-200 transition space-x-4">
            <i class="fas fa-gifts text-xl self-center"></i>
            <span class="self-center text-sm">PACKAGES</span>
        </RouterLink>
        
        <RouterLink to="/package" class="flex w-full px-2 bg-sky-50 py-2 hover:bg-sky-200 transition space-x-4">
            <i class="fas fa-gifts text-xl self-center"></i>
            <span class="self-center text-sm">TEST</span>
        </RouterLink>
      </div>
    </div>
    <div class="flex-auto px-4 pt-12 pb-24 h-full overflow-y-scroll">
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