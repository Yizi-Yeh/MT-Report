<template>
<div>
    <Navbar/>

    <main role="main">

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide" :src="`${plan.images[0].imgUrl}`" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>{{ plan.title }}</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-dark" href="#" role="button">NT$ {{ plan.cost }}</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>One more for good measure.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="container marketing">

       


        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h5 class="featurette-heading">活動說明</h5>
            <p class="lead">{{ plan.introduction }}</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" :src="`${plan.images[0].imgUrl}`" alt=":sr">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading"><span class="text-muted">費用包含</span></h2>
            <p class="lead">{{ plan.costinclude }}</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" :src="`${plan.images[0].imgUrl}`" alt="Generic placeholder image">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading"><span class="text-muted">注意事項</span></h2>
            <p class="lead">{{ plan.attention }}</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" :src="`${plan.images[0].imgUrl}`" alt="Generic placeholder image">
          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->
 <!-- Three columns of text below the carousel -->
        <div class="row">
           <h2 class="featurette-heading"><span class="text-muted">行程安排</span></h2>
          <div class="col-lg-3">
            <h2>{{ plan.schedule[0].dateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
    
            <p>{{ plan.schedule[0].content}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h2>{{ plan.schedule[0].dateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
    
            <p>{{ plan.schedule[0].content}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h2>{{ plan.schedule[0].dateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
   
            <p>{{ plan.schedule[0].content}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        
        </div><!-- /.row -->
   <hr class="featurette-divider">
        <div class="row">
           <h2 class="featurette-heading"><span class="text-muted">餐食安排</span></h2>
          <div class="col-lg-3">
            <h2>{{ plan.meal[0].mealdateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
         
            <p>{{ plan.meal[0].mealcontent}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h2>{{ plan.meal[0].mealdateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
        
            <p>{{ plan.meal[0].mealcontent}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h2>{{ plan.meal[0].mealdateTime}}</h2>
            <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140">
       
            <p>{{ plan.meal[0].mealcontent}}</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
         
        
        </div><!-- /.row -->
      </div><!-- /.container -->


    
    </main>

</div>
</template>

<script>
import Navbar from '../Navbar'
export default {
  name: 'itemPlan',
  components: {
    Navbar,
    },
  data () {
    return {
    plan:{},
    plansId:[]
    } 
  },
    methods: {  
        getProduct() {
        const id = this.$route.params.id;

        const api = `${process.env.VUE_APP_API}` + '/products/' + id
        const vm = this;
        vm.$http.get(api).then((response) => {
        if(response.data.success){
        vm.plan = response.data.result

          } 
        })
        },
    },
    created() {
      this.getProduct();
    },
}
</script>

    <style>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
    </style>