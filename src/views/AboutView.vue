<template>
  <!-- top NAv bar componate -->
    <Nav></Nav>
  <div class="xl:container px-2 md:px-4 mx-auto">
    <div class="max-w-12xl flex gap-7 mx-auto mt-7">
      <!-- left side bar -->
      <left-side-bar></left-side-bar>
      
      <!-- main content  -->
      <div class="main-content">
          <Header></Header>
          <div class="flex gap-2">
            <div class="flex-none w-28 rounded-md overflow-hidden shadow border border-indigo-700">
                <img src="../assets/lumas3.png" alt="lumas" class="aspect-square rounded-md h-full w-full">
            </div>
            <div class="shrink flex-auto rounded-xl overflow-hidden shadow border border-indigo-700 bg-blue-900 shadow shadow-gray-900">
                <div class="grid grid-cols-2 gap-4 p-2">
                  <h1 class="flex-auto text-2xl md:text-4xl">I'm Lumas,</h1>
                  <div class="text-right">
                    <router-link to="resume" class="border border-indigo-700 px-2 py-1 md:px-4 md:py-2 rounded bg-blue-800 hover:bg-blue-900 transition-all">My CV</router-link>
                  </div>
                </div>
                <hr class="mb-2 border-indigo-700">
                <p class="txt-md md:text-2xl px-2">A Full stack web developer</p>
            </div>
        </div>
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">About me.</h2>
            <hr class="mb-2 border-indigo-700">
            <p class="p-2">I'm an IT specialist with proven records of providing exceptional services in relational to development of websites, computer applications as well as mobile android applications.</p>
        </div>

        <!-- summary -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Summary of Qualifications</h2>
            <hr class="mb-2 border-indigo-700">
            <p class="p-2">Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. 
            Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and 
            increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack 
            developer at Atmospheric Solutions.</p>
        </div>

        <!-- key qualificatios -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Key Qualifications & Responsibilities</h2>
            <hr class="mb-2 border-indigo-700">
            <ul class="p-2">
              <li>Maximized applications' efficiency, data quality, scope, operability, and flexibility.</li>
              <li>Used various ideas from distributed computing, large-scale design, real-time data processing, data storage, ML, and AI to solve challenging dataset problems.</li>
              <li>Managed, optimized, and updated PHP databases as necessary.</li>
              <li>Developed app integration with REST / SOAP and other APIs for Google Maps, social media logins, payment processors, and other services.</li>
            </ul>
        </div>

        <!-- Education -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Secondery - 2013 - 2015</h2>
            <hr class="mb-2 border-indigo-700" />
            <p class="p-2">Choma Day High School</p>
        </div>
        
        <!-- Education -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Computer Certificate - January, 2016 - June, 2016</h2>
            <hr class="mb-2 border-indigo-700">
            <p class="p-2">Mmbana outrich Project</p>
        </div>

        <!-- Education -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Bachelor Degree in computer science  - 2021 - 2024</h2>
            <hr class="mb-2 border-indigo-700">
            <p class="p-2">Cavendish University Zambia</p>
        </div>

        <router-link to="/resume" class="block my-9 bg-indigo-900 px-4 py-1 rounded hover:bg-indigo-900/50 border border-indigo-700 hover:border hover:border-indigo-700 transition shadow-md">My Resume</router-link>
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
