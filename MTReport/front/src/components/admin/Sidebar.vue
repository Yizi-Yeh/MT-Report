<template>
<div>
       <nav class="col-12 bg-light sidebar fixed  h-100">
          <div class="h-100 mt-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-5">
                <a class="nav-link active" href="#">
                  
                <router-link to="/admin/products"><span data-feather="file"><i class="fas fa-home"></i>管理首頁</span></router-link>
                </a>
              </li>

              <h6 class="sidebar-heading">
              <span>Memeber</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
              <li class="nav-item mb-5">
                <a class="nav-link" href="#">
                <router-link to="/admin/users">  <span data-feather="file"><i class="fas fa-user"></i>會員管理</span></router-link>
                </a> 
                </li>
            </h6>
              
              <h6 class="sidebar-heading">
              <span>Orders</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>

              <li class="nav-item mb-5">
                <a class="nav-link" href="#">
  <router-link to="/admin/orders">  <span data-feather="file"><i class="fas fa-file-alt"></i>訂單管理</span></router-link>
                </a>
                </li>
            </h6>
            
                  <h6 class="sidebar-heading ">
              <span>Newplan</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
                 <li class="nav-item mb-5">
                <a class="nav-link" href="#">
                <router-link to="/admin/newplans">  <span data-feather="file"><i class="fas fa-bullhorn"></i>開團管理</span></router-link>
                </a> 
                </li>
            </h6>

              <h6 class="sidebar-heading">
              <span>Plans</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
                <li class="nav-item">
                <a class="nav-link" href="#">
                <router-link to="/admin/products"><span data-feather="file"><i class="fas fa-user-friends"></i>行程管理</span></router-link>
                </a>
                </li>
            </h6>
            </ul>
          </div>
        </nav>

</div>
</template>
