<template>
  <div class="w-48 xl:w-72 flex-none hidden lg:inline transition-all">          

    <div class="blur-bg-2 rounded">
        <img src="../assets/lumasbg.png" alt="lumas blog" class="w-full aspect-video">
        <div class="flex-auto py-1 px-2 rounded bg-blue-900/20 backdrop-blur-xl text-white">
            <h2 class="font-bold">Category</h2>
            <h3 class="text-xl">Blog Title</h3>
            <p class="text-xs">02.03.2022</p>
        </div>
    </div>

    <div class="mt-4 blur-bg rounded">
        <div class="p-2 bg-purple-500/10 rounded backdrop-filter backdrop-blur-xl text-white">
            <h1 class="font-bold">Title</h1>
            <hr class="border-t border-white/50 my-2">
            <p class="leading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in ut sapiente ipsum. Voluptates odio non dolore enim vel! Et.</p>
            <button class="block mt-4 w-full rounded bg-blue-900/50 transition-all shadow-sm hover:shadow-md hover:bg-indigo-800">view</button>
        </div>
    </div>

</div>
</template>

<script>
export default {

}
</script>

<style>
    .blur-bg{
        background-image: url("../assets/bgfilter2.jpeg");
        background-size: cover;
    }
    .blur-bg-2{
        background-image: url("../assets/bgfilter.jpg");
        background-size: cover;
    }
</style>