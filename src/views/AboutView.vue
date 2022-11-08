<template>
  <div class="xl:container px-2 md:px-4 mx-auto">
    <!-- top NAv bar componate -->
      <Nav></Nav>
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
                    <button class="border border-indigo-700 px-2 py-1 md:px-4 md:py-2 rounded bg-blue-800 hover:bg-blue-900 transition-all">My CV</button>
                  </div>
                </div>
                <hr class="my-2 border-indigo-700">
                <p class="txt-md md:text-2xl px-2">A Full stack web developer</p>
            </div>
        </div>
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">About me.</h2>
            <hr class="my-2 border-indigo-700">
            <p class="p-2">I'm an IT specialist with proven records of providing exceptional services in relational to development of websites, computer applications as well as mobile android applications.</p>
        </div>

        <!-- summary -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Summary of Qualifications</h2>
            <hr class="my-2 border-indigo-700">
            <p class="p-2">Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. 
            Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and 
            increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack 
            developer at Atmospheric Solutions.</p>
        </div>

        <!-- key qualificatios -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Key Qualifications & Responsibilities</h2>
            <hr class="my-2 border-indigo-700">
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
            <hr class="my-2 border-indigo-700" />
            <p class="p-2">Choma Day High School</p>
        </div>
        
        <!-- Education -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Computer Certificate - January, 2016 - June, 2016</h2>
            <hr class="my-2 border-indigo-700">
            <p class="p-2">Mmbana outrich Project</p>
        </div>

        <!-- Education -->
        <div class="bg-blue-900 rounded-xl overflow-hidden shadow mt-4 border border-indigo-700">
            <h2 class="text-2xl p-2">Bachelor Degree in computer science  - 2021 - 2024</h2>
            <hr class="my-2 border-indigo-700">
            <p class="p-2">Cavendish University Zambia</p>
        </div>

        <hr class="mt-9 border-indigo-700">

          <div class="bg-white rounded-md my-4 mx-2">
            <div class="flex gap-2 md:gap-4 p-2 md:px-9 bg-gradient-to-r from-blue-800 to-green-700 relative">
              <div class="flex-none">
              <div class="h-32 w-32">
                <img src="../assets/lumas1.jpg" alt="lumas" class="w-32 absolute top-16 rounded bg-gradient-to-br from-pink-500 to-blue-500 p-1">
              </div>
              </div>
              <div class="flex flex-auto flex-wrap">
                <div class="self-end flex-auto">
                  <h1 class="text-xl md:text-4xl">Lubomba Mulomya</h1>
                </div>
                <div class="self-end md:text-right flex-auto">
                  <div class="block">
                    <i class="fa-solid fa-phone"></i> 
                    <a href="tel:0971864421"> +260 971 864 421</a>
                  </div>
                  <div class="block">
                    <i class="fa-regular fa-envelope"></i> 
                    <a href="mailto:lumastech@gmail.com"> lumastech@gmail.com</a>
                  </div>
                  <div class="block">
                    
                    <address><i class="fa-solid fa-location-dot"></i> Lusaka, Zambia</address>
                  </div>
                </div>
              </div>
            </div>

            <!-- spacer -->
            <div class="my-16"></div>

            <div class="grid md:grid-cols-2 gap-2 md:gap-4 p-2 md:px-9 text-shadow">
              <!-- col 1 -->
              <div>
                <div class="flex">
                  <div class="flex-auto">
                    <p>Name </p>
                    <p>D.O.B </p>
                    <p>Marital Status </p>
                    <p>Nationality </p>
                    <p>Languages </p>
                  </div>
                  <div class="flex-auto">
                    <p>: Lubomba <span class="md:hidden">L.</span> <span class="hidden md:inline">Lumas</span> Mulomya</p>
                    <p>: 14<sup>th</sup> March, 1995</p>
                    <p>: Single</p>
                    <p>: Zambian</p>
                    <p>: English / Tonga / Nyanja</p>
                  </div>
                </div>

                <div class="pr-9">
                  <hr class="my-4 border-blue-300">
                </div>

                <h2 class="text-2xl rounded-full border border-green-500 px-2 my-2 bg-gradient-to-r from-blue-50 to-green-100">Profile</h2>
                <p>I'm an IT specialist with proven records of providing exceptional services in relational to development of websites, computer applications as well as mobile android applications.</p>
              
                <div class="pr-9">
                  <hr class="my-4 border-blue-300">
                </div>

                <h2 class="mb-7 text-2xl rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">Languages</h2>
                <div class="grid grid-cols-3 gap-4">
                  <div class="bg-gradient-to-br from-pink-500 to-blue-500 p-1 rounded-full flex h-20 w-20 md:h-24 md:w-24">
                    <div class="w-full h-full bg-white rounded-full flex"><span class="mx-auto block self-center">English</span></div>
                  </div>
                  
                  <div class="bg-gradient-to-br from-green-500 to-purple-500 p-1 rounded-full flex h-20 w-20 md:h-24 md:w-24">
                    <div class="w-full h-full bg-white rounded-full flex"><span class="mx-auto block self-center">Tonga</span></div>
                  </div>
                  
                  <div class="bg-gradient-to-br from-yellow-500 to-green-500 p-1 rounded-full flex h-20 w-20 md:h-24 md:w-24">
                    <div class="w-full h-full bg-white rounded-full flex"><span class="mx-auto block self-center">Nyanja</span></div>
                  </div>
                </div>
              </div>
              <!-- col 2 -->
              <div class="md:border-l border-blue-300 pl-2">
                <h2 class="text-2xl my-7 rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">Experience</h2>
                <p>Choma Book Room - 2015 - May, 2016</p>
                <ul>
                  <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Managed Choma Book Room Stationar Store and currying out stationary shop duties'</li>
                  <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Worked as Sales man</li>
                </ul>

                <h3 class="mt-4 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">KEMU LEGAL DEBTS COLLECTORS AND AUCTIONEERS LTD</h3>
                <ol>
                  <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• June 2016 - worked as field officer and IT Support.</li>
                  <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• October 2016 - June 2018 - General Manager and IT Support.</li>
                </ol>

                <h3 class="mt-4 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">WINDOWS OF PSYCHOSOCIAL ZAMBIA AND TRAINING CENTER</h3>
                <ul>
                  <li class="my-1 pl-1 ml-4">June 2018 - August 2018</li>
                  <li class="my-1 pl-1 ml-2">
                    <ol>
                      <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• IT Programs Manager.</li>
                      <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• General IT Support.</li>
                      <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Marketing.</li>
                    </ol>
                  </li>
                </ul>

                <h3 class="mt-4 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">CHOMA MUNICIPLE COUNCIL</h3>
                <p class="ml-2">December 2019 - April 2020</p>
                <p class="border-l-4 border-purple-600 rounded-md pl-1 my-1">PLANNING DEPERTMENT</p>
              </div>
            </div>

          <!-- section ******************************************* -->

          </div>
          <div class="bg-white rounded-md text-shadow mx-2">

            <!-- lps -->
            <div class="p-2 md:px-9">
              <h3 class="my-2 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">LEDGER PRO SOLUTIONS (LPS) LTD</h3>
              <div class="flex flex-wrap gap-4">
                  <ul>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Installation and maintenance of all systems within a client's digital environment.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Producing documentation on operational, system and user procedures & guidelines.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Building, configuration and troubleshooting of server and desktop hardware.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Providing advice on selection and purchase of IT equipment.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Maintaining maximum availability of supported services for users.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Obtaining quotes for supply of goods and services from suppliers.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Designing, implementing and managing Active Directory.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Monitoring the progress of third-party maintenance contract suppliers.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Ensuring that support calls are logged and handled effectively and efficiently.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Responsible for disaster recovery, closing security loopholes and access levels.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Ensure adequate antivirus protection & solutions are maintained and updated.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Identify and recommending improvements for E-mail applications & Web-page development.</li>
                  </ul>
              </div>

                <!-- divider -->
              <div class="pr-9">
                <hr class="my-4 border-blue-300">
              </div>
          </div>
          <!-- section ******************************************* -->

          </div>
          <div class="bg-white my-4 rounded-md text-shadow mx-2">
            <div class="p-2 md:px-9">

              <div class="grid grid-cols-2 gap-4">
                <div class="col-span-2 md:col-span-1">
                  <h3 class="text-2xl my-4 rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">EDUCATION</h3>
                  <h4 class="rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">CHOMA DAY HIGH SCHOOL - 2013 - 2015</h4>
                  <ul>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Obtained a Full Grade Twelve (12) Certification</li>
                  </ul>

                  <h4 class="rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100 mt-4">MMABANA COMMUNITY OUTREACH PROJECT OF ZAMBIA</h4>
                  <p>Computer Course - Nov. 2016 - May 2017</p>
                  <ul>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• 
                      Introduction to computers, Microsoft Office Package, Internet and
                      Email, DATA Entry, Marketing</li>
                  </ul>

                  <h4 class="rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100 mt-4">Cavendish University - From January 2021 - 2024</h4>
                  <p class="border-l-4 border-purple-600 rounded-md pl-1 my-1"><em>Bachelor Degree in Computer science.</em></p>
                </div>

                <!-- ************************************* -->
                <div class="col-span-2 md:col-span-1">
                  <!-- ************************************* -->
                  <h3 class="text-2xl my-4 rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">INTEREST</h3>
                  <ul>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1 md:my-6">• Hardworking and a fast learner.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1 md:my-6">• Willing to extend knowledge in the field of Computers and business strategies.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1 md:my-6">• Advanced Computers skills and with the working knowledge of the internet.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1 md:my-6">• Relate well to the people from a variety of cultures.</li>
                    <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1 md:my-6">• Remain calm and professional throughout critical incidents.</li>
                  </ul>
                </div>
              </div>
              
            </div>
          <!-- section ******************************************* -->

          </div>
          <div class="bg-white my-4 rounded-md text-shadow mx-2">
            <div class="p-2 md:px-9">
              <!-- skills -->
              <h3 class="md:text-2xl my-4 rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">KEY SKILLS AND COMPETENCIES</h3>
              <ul>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Knowledge of cloud computing, Apache HTTP Server.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Experience of working with some 3rd line projects.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Knowledge & understanding of backup technologies & disaster recovery methods.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Experience of using System Administration tools.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Good understanding of: Server Hardware Technology, UNIX, SQL, LANs, WANs.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Experience of: VMWare, Windows 2003, Active Directory Group Policies, TCP/IP, DNS</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Experienced in Windows Sever, Windows 7, 8, 10, 11, Linux/Ubuntu, Apple X OS Environment.</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Software Installation</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Hardware and Software Troubleshooting</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Graphics Designing</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• Website designing, Developing, maintaining and testing</li>
                <li class="border-l-4 border-purple-600 rounded-md pl-1 my-1">• INTERNET: Blogging, Website Marketing, Browsing & E-mail literacy.</li>
              </ul>
              </div>
            <!-- section ******************************************* -->

          </div>
          <div class="bg-white my-4 rounded-md text-shadow mx-2">
            <div class="p-2 md:px-9">

              <h3 class="text-2xl my-4 rounded-full border border-green-500 px-2 bg-gradient-to-r from-blue-50 to-green-100">WEB & WEB APPS SKILLS</h3>
              <div class="md:flex flex-wrap gap-4">
                <div class="flex-auto">

                  <!-- ************************************* -->
                  <h4 class="rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">FRONTEND</h4>
                  <!-- HTML -->
                  <h3 class="text-xs mt-2">HTML</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-green-500 to-pink-400" style="width:100%"></div>
                  </div>

                  <!-- Javascript -->
                  <h3 class="text-xs mt-2">Javascript</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- JQuery -->
                  <h3 class="text-xs mt-2">JQuery</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- CSS -->
                  <h3 class="text-xs mt-2">CSS</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- Bootstrap -->
                  <h3 class="text-xs mt-2">Bootstrap</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- Vuejs + Vuetify -->
                  <h3 class="text-xs mt-2">Vuejs + Vuetify</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:99%"></div>
                  </div>

                  <!-- Tailwind css -->
                  <h3 class="text-xs mt-2">Tailwind css</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- Matrialize css -->
                  <h3 class="text-xs mt-2">Matrialize css</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                

                </div>
                <div class="flex-auto">

                  <!-- ************************************* -->
                  <h4 class="rounded-full border mt-7 md:mt-0 border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">Backend</h4>
                  <!-- PHP -->
                  <h3 class="text-xs mt-2">PHP</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- Laravel -->
                  <h3 class="text-xs mt-2">Laravel</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:99%"></div>
                  </div>

                  <!-- Python -->
                  <h3 class="text-xs mt-2">Python</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:70%"></div>
                  </div>

                  <!-- ************************************* -->
                  <h4 class="mt-9 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">Database</h4>

                  <!-- MySQL -->
                  <h3 class="text-xs mt-2">MySQL</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:100%"></div>
                  </div>

                  <!-- Microsoft access -->
                  <h3 class="text-xs mt-2">Microsoft access</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:95%"></div>
                  </div>

                  <!-- Microsoft excel -->
                  <h3 class="text-xs mt-2">Microsoft excel</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:99%"></div>
                  </div>

                  
                </div>

                  
              </div>
                <!-- ************************************* -->
                  <h4 class="mb-2 mt-7 rounded-full border border-pink-500 px-2 bg-gradient-to-r from-pink-50 to-blue-100">Android</h4>

                  <!-- JAVA -->
                  <h3 class="text-xs mt-2">JAVA</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:90%"></div>
                  </div>

                  <!-- Flutter + dart -->
                  <h3 class="text-xs mt-2">Flutter + dart</h3>
                  <div class="border border-blue-500 rounded-full" style="padding:1px">
                    <div class="h-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-400" style="width:95%"></div>
                  </div>
            </div>

            <!-- footer -->
            <!-- <div class="mb-1 p-1 md:px-9 bg-gradient-to-r from-blue-800 to-green-700"></div> -->
            <div class="h-7 p-2 md:px-9 bg-gradient-to-r from-blue-800 to-green-700"></div>
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
