<template>
   <div>
     <Navbar/>
     <div class="container-fluid">
       <div class="row admin-main">
         <div class="col-2">
         <Sidebar></Sidebar>
         </div>
         <main class="mr-3 filter-container col-md-9 ml-auto col-lg-10 ">
           <router-view></router-view>
         </main>
       </div>
     </div>
   </div>

</template>


<script>
import Sidebar from '../components/admin/Sidebar.vue'
import Navbar from '../components/admin/Navbar.vue'

export default {
components: {
    Sidebar,
    Navbar,
    },
  name: 'Dashboard',
}

</script>
<style lang="scss" scoped>
.admin-main{
 flex-direction: row !important;
 align-items: start;
}
main{
  width: 200%;
}
</style>