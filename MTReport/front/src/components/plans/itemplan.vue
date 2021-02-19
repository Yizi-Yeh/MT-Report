<template>
<div>
    <Navbar/>

  <main role="main">
     <div class="row">
       <div class="col-12 concept">
       </div>
     </div>
 <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
             <img class="first-slide carousel-item-img " :src="`${plan.images[0].imgUrl}`" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
    
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

<div class="table container act-container">
  <div class="row">
          <table>
             <tr >
                <th class="act-container-title">活動名稱</th>
                <td class="act-container-txt">{{ plan.title }}</td>
              </tr>
              <tr >
                <th class="act-container-title">活動說明</th>
                <td  class="act-container-txt">{{ plan.introduction }}</td>
              </tr>
            <tr >
                <th class="act-container-title">位置</th>
                <td class="act-container-txt">{{ plan.site }}</td>
              </tr>
            <tbody>
              
                  <tr >
                <th class="act-container-title">活動時間</th>
                <td class="act-container-txt">{{ plan.time }}</td>
              </tr>
                <tr >
                <th class="act-container-title">活動費用</th>
                <td class="act-container-txt">NT$ {{ plan.cost }}</td>
              </tr>
                 <tr >
                <th class="act-container-title">費用包含</th>
                <td class="act-container-txt">{{ plan.costinclude }}</td>
              </tr>
             <tr >
                <th class="act-container-title">注意事項</th>
                <td class="act-container-txt">{{ plan.attention }}</td>
              </tr>        
            </tbody>
          </table>
        </div>
         </div>

        <hr class="featurette-divider">

   <h2 class="act-flow">活動流程</h2>
 <div class="container">
        <div class="row d-flex flex-row align-items-center justify-content-center">
          <div class="col-lg-3">
            <h3 class="DayTitle">{{ plan.schedule[0].dateTime}}</h3>
            <p>{{ plan.schedule[0].content}}</p>
            
       
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h3 class="DayTitle">{{ plan.schedule[0].dateTime}}</h3>  
            <p>{{ plan.schedule[0].content}}</p>
           
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
           <h3 class="DayTitle">{{ plan.schedule[0].dateTime}}</h3>
            <p>{{ plan.schedule[0].content}}</p>
          
          </div><!-- /.col-lg-4 -->
        
        </div><!-- /.row -->
        </div>
   <hr class="featurette-divider">
    <h2 class="act-flow">餐食安排</h2>
   <div class="container">
        <div  class="row d-flex flex-row align-items-center justify-content-center">
          <div class="col-lg-3">
            <h3 class="DayTitle">{{ plan.meal[0].mealdateTime}}</h3>
            <p>{{ plan.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
           <div class="col-lg-3">
            <h3 class="DayTitle">{{ plan.meal[0].mealdateTime}}</h3>
            <p>{{ plan.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
            <h3 class="DayTitle">{{ plan.meal[0].mealdateTime}}</h3>
            <p>{{ plan.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
         
        
        </div><!-- /.row -->
        </div>
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
    plan:{
      images:
        [{
          
        }],
    },
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

<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 40rem;
  
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -.05rem;
}

.act-flow {
  text-align: center;
  font-family: EB Garamond, serif;
  font-size: 1.8rem;
  letter-spacing: 0.4em;
  text-indent: 0.4em;
  line-height: 1.4em;
  margin: 120px 0 70px 0;
  color:grey;
}
.DayTitle {
    border: 1px solid #dcdcdc;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 101px;
    margin: 0 auto 50px auto;
    padding: 0;
    border-radius: 50px;
    border: 1px solid grey;
    color:grey;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>