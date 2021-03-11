<template>
<div class="container">
	<div class="row sticky">
		 <div id="wrapper">
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav" style="margin-left:0;">
                <li class="sidebar-brand">
                    
                        <a @click="menuToggle()"  id="menu-toggle" style="margin-top:20px;float:right;" > MT10x10管理系統</a>  
                    
                </li>
                <li>
                    <a href="#"> <router-link to="/admin/products"><i class="fas fa-home"></i> <span style="margin-left:10px;">首頁</span>  </router-link></a>
                </li>
                <li>
                    <a href="#">  <router-link to="/admin/users"><i class="fas fa-users"></i> <span style="margin-left:10px;">會員管理</span> </router-link></a>
                </li>
                <li>
                    <a href="#">  <router-link to="/admin/orders"><i class="fa fa-puzzle-piece" aria-hidden="true"> </i> <span style="margin-left:10px;">訂單管理</span> </router-link></a>
                </li>
                <li>
                    <a href="#"> <router-link to="/admin/newplans"><i class="fas fa-pen"></i> <span style="margin-left:10px;">開團管理</span> </router-link></a>
                </li>
                <li>
                    <a href="#"> <router-link to="/admin/products"><i class="far fa-file-image"></i> <span style="margin-left:10px;">行程管理</span> </router-link></a>
                </li>
                <li>
                    <a @click.prevent="signout" href="#"> <i class="fa fa-info-circle " aria-hidden="true"> </i> <span style="margin-left:10px;">登出</span> </a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        
                         
                        

	</div>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import $ from 'jquery';
export default {
    methods: {
          menuToggle(){
        $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
          },
              signout() {
      const api = `${process.env.VUE_APP_API}/adminusers/logout`;
        const vm = this
        this.$http.delete(api).then((response)=>{
          console.log(response.data);
          if(response.data.success){
            vm.$router.push('/')
          }
        })
    }
    },
    created() {
        this.menuToggle()
    }
}


</script>


<style style="scss" scoped>
#menu-toggle:hover{
  cursor: pointer;
}
 body {
    overflow-x: hidden;
 }

/* Toggle Styles */

#wrapper {
    padding-left: 0;
    -webkit-transition: all 0.6s ease;
    -moz-transition: all 0.6s ease;
    -o-transition: all 0.6s ease;
    transition: all 0.6s ease;
    
}

#wrapper.toggled {
    padding-left: 200px;
}

#sidebar-wrapper {
    z-index: 1000;
    position: fixed;
    left: 250px;
    
    width: 0;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background-color: #c5d1cc!Important;
   
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
    width: 0;
}

#page-content-wrapper {
    width: 100%;
    position: absolute;
    padding: 10px;
}

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-left:-250px;
}

/* Sidebar Styles */

.sidebar-nav {
    position: absolute;
    top: 0;
    right:15px;
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 40px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #535151;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: #fff;
    background: #d3c5bb;
}

.sidebar-nav li a:active,
.sidebar-nav li a:focus {
    text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
    height: 65px;
    font-size: 19px;
    line-height: 60px;
}

.sidebar-nav > .sidebar-brand a {
    color: #535151;
}

.sidebar-nav > .sidebar-brand a:hover {
    color: #fff;
    background: none;
}

@media(min-width:768px) {
    #wrapper {
        padding-left: 220px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 200px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 40px;
        
        
    }

#wrapper.toggled span {
        visibility:hidden;
        
    }
  #wrapper.toggled   i {
 float:right;
 } 

    #page-content-wrapper {
        padding: 20px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }
}


@media(max-width:414px) {

#wrapper.toggled #page-content-wrapper {
    position: absolute;
    margin-right:60px;
}

#wrapper.toggled {
    padding-right: 60px;
}

 #wrapper {
        padding-left: 20px;
    }

    #wrapper.toggled {
        padding-left: 0;
    }

    #sidebar-wrapper {
        width: 50px;
    }

    #wrapper.toggled #sidebar-wrapper {
        width: 140px;
        
        
    }
    
    #wrapper.toggled span {
        visibility:visible;
        position:relative;
        left:70px;
        bottom:13px;
        
    }

#wrapper span {
        visibility:hidden;
        
    }
  #wrapper.toggled   i {
 float:right;
 } 
 
  #wrapper   i {
 float:right;
 } 

    #page-content-wrapper {
        padding: 5px;
        position: relative;
    }

    #wrapper.toggled #page-content-wrapper {
        position: relative;
        margin-right: 0;
    }




}
</style>