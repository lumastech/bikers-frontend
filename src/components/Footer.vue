<template>
  <div class="bg-blue-900 py-20 w-full">
    <div class="container max-w-4xl mx-auto p-2">
        <div class="max-w-4xl mb-9 mx-auto bg-gradient-to-r from-indigo-900 to-cyan-700 p-2 rounded-xl">
            <!-- <v-form ref="emailme " >
                <h2 class="text-center text-2xl">Email me</h2>
                <input type="text" class="outlined rounded-md border-1 border-b-2 border-purple-500 px-2 py-1 mx-4 block mx-auto" placeholder="Email">
                <textarea type="text" class="outlined rounded-md border-1 border-b-2 border-purple-500 px-2 py-1 m-4 block mx-auto" placeholder="Message"></textarea>
                <button class="bg-gradient-to-br from-blue-500 to-purple-500 px-8 p-1 rounded-xl border-b-4 border-blue-700 text-blue-100 block mx-auto hover:from-pink-500 hover:to-purple-500 hover:border-pink-500 transition">Send</button>
            </v-form> -->
        </div>

        <div class="grid md:grid-cols-3 gap-4">
            <div>
                <h3 class="text-2xl mb-2">Gallery</h3>
                <div class="grid grid-cols-3 gap-2">
                    <img src="../assets/lumasbg.png" alt="lumas gallery" class="aspect-square h-full w-full">
                    <img src="../assets/img1.jpg" alt="lumas gallery" class="aspect-square w-full">
                    <img src="../assets/img2.jpg" alt="lumas gallery" class="aspect-square w-full">
                    <img src="../assets/img3.jpg" alt="lumas gallery" class="aspect-square w-full">
                    <img src="../assets/img4.jpg" alt="lumas gallery" class="aspect-square w-full">
                    <img src="../assets/img5.jpg" alt="lumas gallery" class="aspect-square w-full">
                </div>
                <hr class="my-7 md:my-2 border-indigo-700">
                <p class="text-2xl">Quick Links</p>
                <ul>
                    <li class="py-0"><router-link to="/" class="block w-full px-2 border-l-2 border-indigo-400 my-1 rounded-md border-r-2 hover:bg-indigo-700 transition hover:text-pink-500 hover:border-pink-500" style="border-bottom: none !important;">Home</router-link></li>
                    <li class="py-0"><router-link to="/prices" class="block w-full px-2 border-l-2 border-indigo-400 my-1 rounded-md border-r-2 hover:bg-indigo-700 transition hover:text-pink-500 hover:border-pink-500" style="border-bottom: none !important;">Support</router-link></li>
                    <li class="py-0"><router-link to="/about" class="block w-full px-2 border-l-2 border-indigo-400 my-1 rounded-md border-r-2 hover:bg-indigo-700 transition hover:text-pink-500 hover:border-pink-500" style="border-bottom: none !important;">About me</router-link></li>
                    <li class="py-0"><router-link to="/blog" class="block w-full px-2 border-l-2 border-indigo-400 rounded-md border-r-2 hover:bg-indigo-700 transition hover:text-pink-500 hover:border-pink-500" style="border-bottom: none !important;">Blog</router-link></li>
                    <li class="py-0"><router-link to="/contact" class="block w-full px-2 border-l-2 border-indigo-400 my-1 rounded-md border-r-2 hover:bg-indigo-700 transition hover:text-pink-500 hover:border-pink-500" style="border-bottom: none !important;">Contact me</router-link></li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl">Services Overview</h3>
                <p class="text-sm">I'm an IT specialist with proven records of providing exceptional services in relational to development of websites, computer applications as well as mobile android applications.</p>
                <hr class="my-2 border-indigo-700">

                <p class="text-2xl">Hot services</p>
                <ul class="text-sm">
                    <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Website Design</li>
                    <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Website Development</li>
                    <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Web App</li>
                    <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">Adroid Apps</li>
                    <li class="pl-2 border-l-4 border-indigo-500 my-2 rounded">IOS Apps</li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl">Address</h3>
                <p class="text-sm">I'm Currently operating from Lusaka and Choma, should you need any service within the listed service and related ones please feel free to contact me or visit my office at the listed address bellow.</p>
                
                <hr class="my-2 border-indigo-600">
                
                <div class="flex gap-2">
                    <p class="shrink-0">Address: </p>
                    <address>8th Floor, Lotti House - Office 813 Cairo Road, Lusaka, 10101, Zambia</address>
                </div>

                <hr class="my-2 border-indigo-600">
                
                <div class="flex gap-2">
                    <p class="shrink-0">Phone: </p>
                    <p>
                        <a href="tel:0971864421"><i class="fa-brands fa-whatsapp text-green-500"></i> +260 971 864 421</a> <br>
                        <a href="tel:0955202210"><i class="fa-solid fa-phone"></i> +260 955 202 210</a>
                    </p>
                </div>

                <hr class="my-2 border-indigo-600">
                
                <div class="flex gap-2">
                    <p class="shrink-0">Email: </p>
                    <a href="mailto:lumastech@gmail.com">lumastech@gmail.com</a>
                </div>

            </div>
        </div>
        <hr class="mt-9 border-indigo-600">
        <div class="md:flex flex-wrap gap-2 text-center">
            <p class="md:text-left">Copyright&COPY; Lumastech 2022 | All rights reserved</p>
            <div class="md:text-right flex-auto">
                <p class="text-green-500">Designed by <em>Lumas</em></p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'FooterView',
}
</script>

<style>

</style>