<template>
   <nav>
      <div class="flex flex-wrap gap-4 relative">
        <div id="lumas" class="text-7xl font-bold text-blue-400 hover:text-blue-500 text-logo flex-1 transition-all duration-500">{{lumas_logo}}<span class="blink">|</span></div>
        <div class="flex-auto self-center text-right md:hidden">
          <button @click="mobileNav = !mobileNav" class="text-2xl mr-4 p-1"><i class="fa-solid fa-bars"></i></button>
        </div>
        <div class="hidden flex-auto self-center text-right gap-2 flex flex-wrap md:inline-block">
          <router-link to="/" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all  mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-t-4 hover:border-b-0 hover:border-red-500">Home</router-link>
          <router-link to="/prices" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-t-4 hover:border-b-0 hover:border-red-500">Services</router-link>
          <router-link to="/about" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-t-4 hover:border-b-0 hover:border-red-500">About me</router-link>
          <router-link to="/blog" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-t-4 hover:border-b-0 hover:border-red-500">Blog</router-link>
          <router-link to="/contact" class="px-4 py-2  bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl transition-all mx-1 border-b-4 border-blue-700 hover:bg-gradient-to-l hover:from-pink-600 hover:to-blue-500 hover:border-t-4 hover:border-b-0 hover:border-red-500">Contact me</router-link>
        </div>
        <div v-show="mobileNav" ref="mn" class="md:hidden p-2 bg-indigo-600 text-white overflow-hidden w-full shadow-xl absolute z-30 top-16 transition-all">
          <ul>
            <li class="my-1 border-b border-indigo-800"><router-link to="/" class="block px-2 py1">Home</router-link></li>
            <li class="my-1 border-b border-indigo-800"><router-link to="/prices" class="block px-2 py1">Services</router-link></li>
            <li class="my-1 border-b border-indigo-800"><router-link to="/about" class="block px-2 py1">About me</router-link></li>
            <li class="my-1 border-b border-indigo-800"><router-link to="/blog" class="block px-2 py1">Blog</router-link></li>
            <li class="my-1 border-b border-indigo-800"><router-link to="/contact" class="block px-2 py1">Contact me</router-link></li>
          </ul>
        </div>
      </div>
      <div class="hidden fixed block h-full bg-gray-900/20 top-0 left-0 w-full z-50 backdrop-blur-xl">
        k
      </div>
    </nav>
</template>

<script>
export default {
    name:'naveView',
    data: () => ({
      mobileNav: false,
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