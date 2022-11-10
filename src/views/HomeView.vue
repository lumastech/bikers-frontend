<template>
  <!-- top NAv bar componate -->
  <Nav></Nav>

  <div class="xl:container px-2 md:px-4 mx-auto transition-all">
    <div class="max-w-12xl flex gap-4 mx-auto mt-7">
      <!-- left side bar -->
      <left-side-bar></left-side-bar>
      <!--//lsb-->
      
      <!-- main content  -->
      <div class="main-content">
        <Header></Header>
        <div class="h-48 bg-gray-800 flex mb-9">
          <div class="border-r border-gray-700 w-8 flex flex-col text-center px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <div class="flex-auto pl-2">
            <pre>{{textvalue}}<span class="blink">|</span>
            </pre>
          </div>
        </div>
       <!-- mail subscription -->
        <mail-sub></mail-sub>
      </div>

      <!-- right side bar -->
      <right-side-bar></right-side-bar>
       <!-- // rsb-->
    </div>
  </div>

  <!-- footer -->
  <div class="mt-16">
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Nav from '../components/Nav.vue';
import Header from './Header.vue';
import RightSideBar from '../components/RightSideBar.vue';
import LeftSideBar from '../components/LeftSideBar.vue';
import MailSub from '../components/MailSub.vue';
export default {
    name: "BlogView",
    components: { Nav, Footer, Header, RightSideBar, LeftSideBar, MailSub },
    data:()=>({
      typingState: true,
      TypingPos: 0,
      textvalue:'',
      text1:"Hi, I am Lumas. \nI am a full stuck web developer.\nContact me on : 260 971 864 421"
    }),
    methods:{
      // logo typing
      typingText1(){
        if (this.TypingPos < this.text1.length){
          this.textvalue = this.text1.substring(0, this.TypingPos+1)
          this.TypingPos++
          setTimeout(this.animateText1, 50)
        }else{
          this.typingState = false
          setTimeout(this.animateText1, 5000)
        }
      },
      // erase logo 
      eraseText1(){
        if (this.TypingPos >= 0){
          this.textvalue = this.text1.substring(0, this.TypingPos)
          this.TypingPos--
          setTimeout(this.animateText1, 20)
        }else{
          this.typingState = true
          setTimeout(this.animateText1, 100)
        }
      },
      // logo typing control
      animateText1(){
        if (this.typingState) {
          this.typingText1()
        } else {
          this.eraseText1()
        }
      }
    },
    mounted(){
      this.animateText1()
    }
}
</script>

<style>

</style>
