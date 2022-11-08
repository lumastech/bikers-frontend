<template>
  <div class="xl:container px-2 md:px-4 mx-auto">
    <!-- top NAv bar componate -->
      <Nav></Nav>
    <div class="max-w-12xl flex gap-4 mx-auto mt-7">
      <!-- left side bar -->
      <left-side-bar></left-side-bar>
      
      <!-- main content  -->
      <div class="main-content">
        <Header></Header>

        <h2 class="text-4xl md:text-4xl mt-9 p-2">SERVICES</h2>
        <div class="mb-9 grid grid-cols-4 md:grid-cols-3 gap-4 text-green-300 p-2">
            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-solid fa-compass-drafting text-4xl"></i>
            <h3>Web Design</h3>
            </div>

            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-solid fa-passport text-4xl"></i>
            <h3>Web Applications</h3>
            </div>
            
            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-brands fa-android text-4xl"></i>
            <h3>Android Apps</h3>
            </div>
            
            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-brands fa-app-store-ios text-4xl"></i>
            <h3>IOS Apps</h3>
            </div>
            
            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-solid fa-bug-slash text-4xl"></i>
            <h3>Web Mantainace</h3>
            </div>
            
            <div class="col-span-2 md:col-span-1 text-center p-2 border border-indigo-900 rounded-lg bg-indigo-800">
            <i class="fa-solid fa-paintbrush text-4xl"></i>
            <h3>Graphic Design</h3>
            </div>
        </div>

        <h2 class="text-2xl mb-2 p-2">Websit Development</h2>
        <div class="grid md:grid-cols-2 gap-2 p-2">
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">Web design</h3>
                <hr class="my-2 border-indigo-700">
               <div class="p-2">
                    <p>A carefully taillored design to meet the client specifications</p>
                    <p>A broad umbrella category for everything that relates to designing the visuals and usability of a website. 
                    Both UI and UX design, along with many other fields, are included under web design.</p>
               </div>
            </div>
            
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">Web development</h3>
                <hr class="my-2 border-indigo-700">
                <p class="p-2">The technical part of making a website, focusing on code. Web development is further divided into “front-end” and “back-end,” explained below.</p>
            </div>
            
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">User Interface (UI)</h3>
                <hr class="my-2 border-indigo-700">
                <p class="p-2">A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls.</p>
            </div>
            
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">User Experience (UX)</h3>
                <hr class="my-2 border-indigo-700">
                <p class="p-2">Another specialization of web design, this one dealing with user behavior and feeling when using the site or app.</p>
            </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-2 mt-9 p-2">
            
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">Frontend</h3>
                <hr class="my-2 border-indigo-700">
                <div class="p-2">
                    <p>With the objective to design a site which ensure that when the users open up the site they see the information in a 
                    format that is easy to read and relevant, I design user friendly, clean & clear and responsive websites to fit all screen sizes.</p>

                    <p>Depending on client specifications, I use defferent frameworks and Libraries <i>(Vuejs, blade tamplating, bootstrap, materialize css, vuetify, tailwind css)</i> 
                    with the goal maximize the speed of the site.
                    </p>
                </div>
            </div>
            
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900">
                <!-- design -->
                <h3 class="text-2xl px-2">Backend</h3>
                <hr class="my-2 border-indigo-700">
                <p class="p-2">Using a plain PHP or Laravel framework, depending on the site requirements I design and 
                    insure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers</p>
            </div>
        </div>

        <hr class="my-2 border-indigo-700">
        
          <!-- pricing -->
        <h2 id="prices" class="text-4xl mt-9">Prices & Features</h2>

        <!-- Sasic features -->
        <div class="my-9 grid md:grid-cols-3 gap-4 text-blue-300 p-2">
            <div class="ccol-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
                <div class="pt-2">
                    <i class="fa-solid fa-sack-dollar text-4xl"></i>
                    <h3 class="text-xl font-bold self-center"> Basic Static Web</h3>
                </div>

                <hr class="my-2 border-indigo-700">

                <div class="my-4">
                    <span class="font-bold text-pink-200 border border-pink-500 border-pink-500 rounded-full px-4 py-1">K2,500</span>
                    <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K4,500</span>
                </div>
                <ul>
                    <li>Design</li>
                    <li>Development</li>
                    <li>1 - 3 pages</li>
                    <li>Website Audit</li>
                </ul>

                <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>

            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Standard Static Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K4,000</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K6,500</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>1 - 5 pages</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>SEO</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Premium Static Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K7,500</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K10,000</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>5 + pages</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>SEO</li>
                <li>Analytics</li>
                <li>Email Setup</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>
        </div>

        <!-- Dynamic  -->
        <div class="my-9 grid md:grid-cols-3 gap-4 text-blue-300 p-2">
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Basic Dynamic Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K5,999</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K10,999</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Simple Admin Pannel</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>3 Emails</li>
                <li>SEO</li>
            </ul>

            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>

            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Standard Dynamic Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K10,300</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K15,999</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Admin Dashboard</li>
                <li>Simple User Dashboard</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>5 Emails</li>
                <li>SEO</li>
                <li>Maintenance</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Premium Dynamic Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K19,999</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K30,000</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>1 Month Free Maintenance</li>
                <li>Web App</li>
                <li>Admin Dashboard</li>
                <li>User Dashboard</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>10+ Emails</li>
                <li>SEO</li>
                <li>Payment Methods</li>
                <li>Mobile Money Payments</li>
                <li>Firewall</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>
        </div>


        <!-- E-commerce  -->
        <div class="my-9 grid md:grid-cols-3 gap-4 text-blue-300 p-2">
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Basic eCommerce Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K15,500</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K27,500</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>1 Month Free Maintenance</li>
                <li>Web App</li>
                <li>Simple Admin Pannel</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>3 Emails</li>
                <li>SEO</li>
                <li>Payment Methonds</li>
                <li>Web Security</li>
            </ul>

            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>

            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
            <h3 class="text-xl font-bold self-center"> Standard eCommerce Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K30,900</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K40,000</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>1 Month Free Maintenance</li>
                <li>Web App</li>
                <li>Admin Dashboard</li>
                <li>Simple User Dashboard</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>5 Emails</li>
                <li>SEO</li>
                <li>Payment Methods</li>
                <li>Mobile Money</li>
                <li>Web Security</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl"></i>
                
                <h3 class="text-xl font-bold self-center">Premium eCommerce Web</h3>

            <hr class="my-2 border-indigo-700">

            <div class="my-4">
                <span class="font-bold text-pink-200 border border-pink-500 rounded-full px-4 py-1">K65,000</span>
                <span class="font-bold text-pink-500 ml-4 line-through decoration-2">K90,000</span>
            </div>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>1 Month Free Maintenance</li>
                <li>Web App</li>
                <li>Admin Dashboard</li>
                <li>User Dashboard</li>
                <li>Website Audit</li>
                <li>Backups</li>
                <li>10+ Emails</li>
                <li>SEO</li>
                <li>Payment Methods</li>
                <li>Mobile Money Payments</li>
                <li>Firewall</li>
            </ul>
            <button class="bg-gradient-to-tl from-blue-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Get A Free Quote</button>
            </div>
        </div>


        <!-- Extra features -->
        <div class="my-9 grid md:grid-cols-3 gap-4 text-white p-2">
            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl text-green-400"></i>
            <h3 class="text-xl font-bold self-center text-green-400"> Android App</h3>

            <hr class="my-2 border-indigo-700">

            <p class="text-pink-200">For Android Apps Kindly Contact me</p>
            <p><a href="mailto:lumastech@gmail.com">lumastech@gmail.com</a></p>
            <p><a href="tel:0971864421">+260 971 864 421</a></p>

            <button class="bg-gradient-to-tl from-green-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Contact me</button>

            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl text-green-400"></i>
            <h3 class="text-xl font-bold self-center text-green-400"> IOS App</h3>

            <hr class="my-2 border-indigo-700">

            <p class="text-pink-200">For Apple Apps Kindly Contact me</p>
            <p><a href="mailto:lumastech@gmail.com">lumastech@gmail.com</a></p>
            <p><a href="tel:0971864421">+260 971 864 421</a></p>

            <button class="bg-gradient-to-tl from-green-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Contact me</button>

            </div>

            <div class="col-span-1 rounded-xl border border-indigo-700 bg-blue-900 text-center">
            <i class="fa-solid fa-sack-dollar text-4xl text-green-400"></i>
            <h3 class="text-xl font-bold self-center text-green-400"> Custom Web</h3>

            <hr class="my-2 border-indigo-700">

            <p class="text-pink-200">Please feel free to contact me for a custom made web system</p>
            <p><a href="mailto:lumastech@gmail.com">lumastech@gmail.com</a></p>
            <p><a href="tel:0971864421">+260 971 864 421</a></p>

            <button class="bg-gradient-to-tl from-green-500 to-purple-500 px-4 p-1 my-4 rounded-xl border-b-4 border-green-800 text-blue-100 block mx-auto hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition">Contact me</button>

            </div>
        </div>
      </div>

      <!-- right side bar -->
      <RightSideBar></RightSideBar>
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
export default {
    name: "BlogView",
    components: { Nav, LeftSideBar, RightSideBar, Footer, Header }
}
</script>

<style>

</style>
