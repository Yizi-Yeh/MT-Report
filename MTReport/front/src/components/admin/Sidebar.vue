<template>
<div>
       <nav class="col-12 bg-light sidebar fixed">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                <router-link to="/admin/products"><span data-feather="file">管理首頁</span></router-link>
                </a>
              </li>

              <h6 class="sidebar-heading">
              <span>Memeber</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
              <li class="nav-item">
                <a class="nav-link" href="#">
                <router-link to="/admin/users">  <span data-feather="file">會員管理</span></router-link>
                </a> 
                </li>
            </h6>
              
              <h6 class="sidebar-heading">
              <span>Orders</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>

              <li class="nav-item">
                <a class="nav-link" href="#">
  <router-link to="/admin/orders">  <span data-feather="file">訂單管理</span></router-link>
                </a>
                </li>
            </h6>
            
                  <h6 class="sidebar-heading ">
              <span>Newplan</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
                 <li class="nav-item">
                <a class="nav-link" href="#">
                <router-link to="/admin/newplans">  <span data-feather="file">開團管理</span></router-link>
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
                <router-link to="/admin/products"><span data-feather="file">行程管理</span></router-link>
                </a>
                </li>
            </h6>
            </ul>
          </div>
        </nav>

</div>
</template>


