<template>
  <!-- top NAv bar componate -->
    <Nav></Nav>
  <div class="xl:container px-2 md:px-4 mx-auto">
    <div class="max-w-12xl flex gap-7 mx-auto mt-7">
      <!-- left side bar -->
      <left-side-bar></left-side-bar>
      
      <!-- main content  -->
      <div class="main-content">
          
          <div class="post">
            <div class="overflow-hidden rounded">
              <img src="../../assets/web1.jpg" alt="lumas blog" class="w-full aspect-video"> <!-- change the alt text-->
            </div>
            <h1 class="text-4xl mt-4">Blog Title</h1>
            <p><i>Category - Aug 02, 2022</i></p>

            <!-- blog boby -->
            <p class="my-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nobis culpa vitae, nihil modi illo exercitationem inventore animi adipisci distinctio illum autem dolorem iure magnam officiis minus consequuntur dolorum veniam, doloremque ipsa, pariatur cum impedit. Sunt, vel. Consequatur porro corporis quis minus quibusdam officia rem velit fugit illum dolor, ducimus mollitia blanditiis hic dolores veritatis placeat temporibus iste excepturi. Vitae fuga inventore voluptate reiciendis ad sapiente blanditiis corrupti, consequuntur maiores ipsam iste autem libero cupiditate expedita aut quo illum voluptatibus provident. Animi minus dignissimos, ad enim cumque aut ullam quos, accusantium atque, nam corrupti ducimus ea laborum eius cum quibusdam!
            </p>
            
            <!-- comments -->
            <div class="flex gap-4 my-7">
              <div class="flex-none w-9 h-9">
                <img src="../../assets/lumas3.png" alt="lumas" class="rounded-full w-full h-full">
              </div>
              <p class="p-2 bg-blue-900 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam deserunt pariatur veritatis quia non ex nostrum perspiciatis earum soluta!</p>
            </div>

            <!-- comments -->
            <div class="flex gap-4 my-7">
              <div class="flex-none w-9 h-9">
                <img src="../../assets/lumasbg.png" alt="lumas" class="rounded-full w-full h-full">
              </div>
              <p class="p-2 bg-blue-900 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam deserunt pariatur veritatis quia non ex nostrum perspiciatis earum soluta!</p>
            </div>

            <!-- comments -->
            <div class="flex gap-4 my-7">
              <div class="flex-none w-9 h-9">
                <img src="../../assets/lumas1.jpg" alt="lumas" class="rounded-full w-full h-full">
              </div>
              <p class="p-2 bg-blue-900 rounded-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam deserunt pariatur veritatis quia non ex nostrum perspiciatis earum soluta!</p>
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
import Nav from '../../components/Nav.vue';
import LeftSideBar from '../../components/LeftSideBar.vue';
import RightSideBar from '../../components/RightSideBar.vue';
import Footer from '../../components/Footer.vue';
export default {
    name: "BlogView",
    components: { Nav, LeftSideBar, RightSideBar, Footer }
}
</script>

<style>

</style>
