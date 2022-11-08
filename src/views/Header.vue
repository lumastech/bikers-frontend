<template>

    <div class="rounded-md bg-blue-900 shadow-sm mb-7  relative mb-24 border-b-4 border-blue-800 mx-2 hover:shadow-xl hover:border-pink-400 transition">
      
      <div class="overflow-hidden md:h-96 rounded-md">
        <img src="../assets/lumasbg.png" alt="Lumas" class="w-full h-full rounded-md">
      </div>

      <div class="cover-filter absolute w-full h-full top-0 left-0 rounded-md">
      </div>

      <!-- rounded full  -->
      <div class="rounded-full p-2 w-52 h-52 absolute -bottom-24 left-12 bg-gradient-to-br from-pink-500 to-indigo-500 rounded-xl p-2 hover:from-indigo-700 hover:to-pink-500 hover:shadow-xl transition ">
        <img src="../assets/lumas1.jpg" alt="lumas" class="aspect-square rounded-full h-full w-full">
      </div>
    </div>

    <!-- spacer -->
    <div class="h-16 grid">
     <hr class="my-9 border-indigo-800 self-center">
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactView',
}
</script>

<style>
 .cover-filter{
  background-color: rgba(9, 1, 83, 0.541);
 }
</style>