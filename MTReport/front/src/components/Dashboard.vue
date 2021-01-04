<template>
   <div>
     <Navbar/>
     <div class="container-fluid">
       <div class="row">
         <Sidebar></Sidebar>
         <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
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