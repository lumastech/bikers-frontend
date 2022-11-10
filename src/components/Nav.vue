<template>
   <div class="backdrop-xl bg-black/10 border-b border-white/20 py-4">
      <div class="xl:container px-2 md:px-4 mx-auto transition-all">
        <nav >
          <div class="flex flex-wrap gap-4 relative">
            <div class="flex-none self-center text-right hidden md:flex">
              <button @click="mobileNav = !mobileNav" class="text-2xl p-1 hover:text-red-500 transition"><i class="fa-solid fa-bars"></i></button>
            </div>
            <div id="lumas" class="text-4xl font-bold text-blue-400 hover:text-blue-500 text-logo flex-1 transition-all duration-500">{{lumas_logo}}<span class="blink">|</span></div>
            <div class="flex-auto self-center text-right md:hidden">
              <button @click="mobileNav = !mobileNav" :class="{'hidden':!mobileNav}" class="text-2xl mr-4 p-1 hover:text-red-500 transition"><i class="fa-solid fa-bars"></i></button>
            </div>
            <div class="hidden flex-auto self-center text-right gap-2 flex flex-wrap md:inline-block">
              <router-link to="/" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all  mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-b-4 hover:border-red-500">Home</router-link>
              <router-link to="/prices" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-b-4 hover:border-red-500">Services</router-link>
              <router-link to="/about" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-b-4 hover:border-red-500">About me</router-link>
              <router-link to="/blog" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-b-4 hover:border-red-500">Blog</router-link>
              <router-link to="/contact" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-b-4 hover:border-red-500">Contact me</router-link>
            </div>
          </div>
          <div @click="mobileNav = !mobileNav" :class="{'w-0': mobileNav, 'w-full': !mobileNav, 'delay-300': mobileNav, 'delay-0':!mobileNav, 'bg-none':mobileNav, 'bg-gray-900/70': !user_agent_suport, 'bg-gray-900/10': user_agent_suport}" class="fixed block transition-w duration-0 h-full top-0 left-0 w-full z-50 backdrop-filter backdrop-blur-sm">
            <div class="overflow-x-hidden h-full bg-indigo-900 transition-all duration-500 ease-in-out shadow-md w-2/3 md:w-72" :class="{'-translate-x-full': mobileNav}">
              <img src="../assets/lumasbg.png" alt="lumas" class="aspect-video">
              <h2 class="text-xl pl-4">Lumas portfolio</h2>

              <!-- links -->
              <div class="p-4">
                <ul>
                  <li class="my-2 nob"><router-link to="/" class="block px-2"><i class="far fa-user mr-4"></i> Home</router-link></li>
                  <li class="my-2 nob"><router-link to="/prices" class="block px-2"><i class="fa-solid fa-puzzle-piece mr-4"></i>Services</router-link></li>
                  <li class="my-2 nob"><router-link to="/about" class="block px-2"><i class="fa-solid fa-circle-info mr-4"></i>About me</router-link></li>
                  <li class="my-2 nob"><router-link to="/contact" class="block px-2"><i class="fa-solid fa-address-card mr-4"></i>Contact me</router-link></li>
                  <li class="my-2 nob"><router-link to="/resume" class="block px-2"><i class="fa-solid fa-file-invoice mr-4"></i>My Resume</router-link></li>
                  <hr class="border-t border-sky-600/50">
                  <li class="my-2 nob"><router-link to="/blog" class="block px-2"><i class="fa-solid fa-blog mr-4"></i>Blog</router-link></li>
                </ul>
              </div>
            </div>
            <button>
              <i class="fa fa-close text-2xl absolute top-6 right-8 text-white font-thin hover:text-red-500 transition"></i>
            </button>

          </div>
        </nav>
    </div>
   </div>
</template>

<script>
export default {
    name:'naveView',
    data: () => ({
      user_agent: 'default',
      user_agent_suport:true,
      mobileNav: true,
      lumas_logo: '',
      typingState: true,
      textVal: 'Lumas',
      TypingPos: 0
    }),
    methods:{
      // logo typing
      typingText(){
        if (this.TypingPos < this.textVal.length){
          this.lumas_logo = this.textVal.substring(0, this.TypingPos+1)
          this.TypingPos++
          setTimeout(this.animateText, 100)
        }else{
          this.typingState = false
          setTimeout(this.animateText, 5000)
        }
      },
      // erase logo 
      eraseText(){
        if (this.TypingPos >= 0){
          this.lumas_logo = this.textVal.substring(0, this.TypingPos)
          this.TypingPos--
          setTimeout(this.animateText, 100)
        }else{
          this.typingState = true
          setTimeout(this.animateText, 100)
        }
      },
      // logo typing control
      animateText(){
        if (this.typingState) {
          this.typingText()
        } else {
          this.eraseText()
        }
      }
      
    },
    mounted(){
      this.animateText()
    },
    created(){
      this.user_agent = navigator.userAgent
      if (this.user_agent.search('Chrome') == -1) {
        this.user_agent_suport = false
      }
    }
}
</script>

<style>
  .text-logo{
    text-shadow: 2px 4px  rgb(139, 35, 236);

  }

  .text-logo:hover{
    text-shadow: -2px -4px  rgb(139, 35, 236);
  }
  .blink{
    color: #C72D7D;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
    text-shadow: none;
    animation: blink 300 ease-in-out 0 infinite;
  }
  @keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #C72D7D;
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>