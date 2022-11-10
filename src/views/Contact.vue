<template>
    <!-- top NAv bar componate -->
      <Nav></Nav>
    <div class="xl:container px-2 md:px-4 mx-auto mb-9">
      <div class="max-w-12xl flex gap-7 mx-auto mt-7">
        <!-- left side bar -->
        <left-side-bar></left-side-bar>
        
        <!-- main content  -->
        <div class="main-content">
            <Header></Header>
                <div class="col-span-4 md:col-span-3">
                    <div class="bg-gradient-to-br hover:bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-2 md:px-4 border-b-4 border-blue-800 mb-4">
                        <h1 class="text-4xl">Contact</h1>
                        <hr class="border-blue-600">
                        <p>Get in touch with me via the contact form provided bellow.</p>
                        <p>Altenatively, you can reach out to me directly via a phone call or Whatsapp through my munber bellow.</p>
                        <p class="mt-2">                
                            <a href="tel:0971864421"><i class="fa-brands fa-whatsapp"></i> +260 971 864 421</a> <br>
                            <a href="mailto:lumastech@gmail.com"><i class="fa-regular fa-envelope"></i> lumastech@gamil.com</a>
                        </p>
                    </div>

                    <div class="bg-gradient-to-br hover:bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl p-2 md:px-4 border-b-4 border-blue-800">
                        <!-- form  -->
                        <!-- <v-form ref="contactform">
                            <h2 class="text-4xl">Send me a mail</h2>
                            <label for="name" class="mt-4 block">Your Name</label>
                            <input type="text" name="name" class="w-full px-2 py-1 rounded border-2 border-blue-500 bg-blue-200" placeholder="Name">

                            <label for="email" class="mt-4 block">Your Email</label>
                            <input type="email" name="email" class="w-full px-2 py-1 rounded border-2 border-blue-500 bg-blue-200" placeholder="you@email.com">

                            <label for="name" class="mt-4 block">Your Name</label>
                            <textarea name="message" id="message" cols="30" rows="5" class="w-full px-2 py-1 rounded border-2 border-blue-500 bg-blue-200" placeholder="Write your message here"></textarea>
                            <div class="text-right my-7">
                                <button class="bg-gradient-to-br from-blue-500 to-purple-500 px-9 p-1 rounded-xl border-b-4 border-green-800 text-blue-100 hover:from-pink-500 hover:to-purple-500 hover:border-pink-500 transition">SENDE</button>
                            </div>
                        </v-form> -->
                    </div>
                </div>
            </div>
            
            <!-- right side bar -->
            <div class="w-48 xl:w-72">
                <RightSideBar></RightSideBar>
                <br>
                <contact-side-menu ></contact-side-menu>
            </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
  import Nav from '../components/Nav.vue';
    import LeftSideBar from '../components/LeftSideBar.vue';
    import RightSideBar from '../components/RightSideBar.vue';
    import Footer from '../components/Footer.vue';
import Header from './Header.vue';
import ContactSideMenu from '../components/ContactSideMenu.vue';
  export default {
      name: "BlogView",
      components: { Nav, LeftSideBar, RightSideBar, Footer, Header, ContactSideMenu }
  }
  </script>
  
  <style>
  
  </style>
