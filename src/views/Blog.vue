<template>
  <!-- top NAv bar componate -->
    <Nav></Nav>
  <div class="xl:container px-2 md:px-4 mx-auto">
    <div class="max-w-12xl flex gap-4 mx-auto mt-7">
      <!-- left side bar -->
      <left-side-bar></left-side-bar>
      
      <!-- main content  -->
      <div class="main-content">
          
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
export default {
    name: "BlogView",
    components: { Nav, LeftSideBar, RightSideBar, Footer }
}
</script>

<style>

</style>