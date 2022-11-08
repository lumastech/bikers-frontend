<template>
  <div class="w-48 xl:w-72 flex-none hidden lg:inline my-9">
    <p class="text-xl">Quick Links</p>
    <ul>
        <li><router-link to="/" class="block w-full bg-indigo-900 px-2 py-1 rounded border-b-4 border-purple-800 my-1 hover:border-pink-500 hover:text-pink-500 transition">Home</router-link></li>
        <li><router-link to="/Prices" class="block w-full bg-indigo-900 px-2 py-1 rounded border-b-4 border-purple-800 my-1 hover:border-pink-500 hover:text-pink-500 transition">Prices</router-link></li>
        <li><router-link to="/about" class="block w-full bg-indigo-900 px-2 py-1 rounded border-b-4 border-purple-800 my-1 hover:border-pink-500 hover:text-pink-500 transition">About me</router-link></li>
        <li><router-link to="/blog" class="block w-full bg-indigo-900 px-2 py-1 rounded border-b-4 border-purple-800 my-1 hover:border-pink-500 hover:text-pink-500 transition">Blog</router-link></li>
        <li><router-link to="/contact" class="block w-full bg-indigo-900 px-2 py-1 rounded border-b-4 border-purple-800 my-1 hover:border-pink-500 hover:text-pink-500 transition">Contact me</router-link></li>
    </ul>

    <hr class="my-4 border-indigo-800">

    <p class="text-2xl">Hot services</p>
    <ul>
        <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Website Design</li>
        <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Website Development</li>
        <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Web App</li>
        <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Adroid Apps</li>
        <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">IOS Apps</li>
    </ul>

    <hr class="my-4 border-indigo-800">

    <p class="text-2xl">My Contacts</p>
    <p class="text-sm">Altenatively, you can reach out to me directly via a phone call or Whatsapp through my munber bellow.</p>
    <p class="text-green-600 text-sm">                
        <a href="tel:0971864421"><i class="fa-brands fa-whatsapp"></i> +260 971 864 421</a> <br>
        <a href="mailto:lumastech@gmail.com"><i class="fa-regular fa-envelope"></i> lumastech@gamil.com</a>
    </p>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>