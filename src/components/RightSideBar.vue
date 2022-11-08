<template>
  <div class="w-48 xl:w-72 flex-none hidden lg:inline">          

    <div class="mt-2 bg-blue-900 rounded">
        <img src="../assets/lumasbg.png" alt="lumas blog" class="w-full aspect-video">
        <div class="flex-auto p-1">
            <h2 class="font-bold">Category</h2>
            <h3 class="text-xl">Blog Title</h3>
            <p class="text-xs">02.03.2022</p>
        </div>
    </div>

    <div class="mt-2 blur-bg rounded">
        <div class="fiter p-2 backdrop-blur-md bg-white/50 rounded">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla in ut sapiente ipsum. Voluptates odio non dolore enim vel! Et.</p>
            <button class="block w-full rounded bg-transparent">view</button>
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
        background-image: url("../assets/lumasbg.png");
        background-size: cover;

    }
</style>