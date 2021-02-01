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
                     <img class="first-slide" :src="`${plan.p_id.images[0].imgUrl}`" alt="First slide">
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

       


        <!-- START THE FEATURETTES -->
<h2 class="eventSection" id="evDetail">活動詳細<br><span></span></h2>
<div class="table eventDetail container">
  <div class="row">
          <table id="actDetail">
             <tr >
                <th>活動名稱</th>
                <td>{{ plan.p_id.title }}</td>
              </tr>
               <tr >
                <th>活動日程</th>
                <td>{{ plan.date }}</td>
              </tr>
              <tr>
                <th>活動說明</th>
                <td>{{ plan.p_id.introduction  }}</td>
              </tr>
              <tr>
                <th>位置</th>
                <td>{{ plan.p_id.site }}</td>
              </tr>
            <tbody>
              
              <tr>
                <th>活動時間</th>
                <td>{{ plan.p_id.time }}</td>
              </tr>
               <tr>
                <th>活動費用</th>
                <td>NT$ {{ plan.price }}</td>
              </tr>
              <tr>
                <th>費用包含</th>
                <td>{{ plan.p_id.costinclude }}</td>
              </tr>
              <tr>
                <th>注意事項</th>
                <td>{{ plan.p_id.attention }}</td>
              </tr>        
            </tbody>
          </table>
        </div>
         </div>

        <hr class="featurette-divider">

   <h2 class="eventSection" id="evFlow">活動流程</h2>
 <div class="container">
        <div class="row d-flex flex-row align-items-center justify-content-center">
          <div class="col-lg-3">
                   <h3 class="eventDayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
            <hr class="featurette-divider">
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                      <h3 class="eventDayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
            <hr class="featurette-divider">
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                    <h3 class="eventDayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
            <hr class="featurette-divider">
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->

        
        </div><!-- /.row -->
        </div>
   <hr class="featurette-divider">
    <h2 class="eventSection" id="evFlow">餐食安排</h2>
   <div class="container">
        <div  class="row d-flex flex-row align-items-center justify-content-center">
          <div class="col-lg-3">
                      <h3 class="eventDayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
         <p>{{ plan.p_id.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                   <h3 class="eventDayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
         <p>{{ plan.p_id.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
        <div class="col-lg-3">
               <h3 class="eventDayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
         <p>{{ plan.p_id.meal[0].mealcontent}}</p>
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
  name: 'newplan',
  components: {
    Navbar,
    },
  data () {
    return {
    plan:{},
    plansId:[],
    }
  },
    methods: {  
        getNewplan() {
        const id = this.$route.params.id;
        const api = `${process.env.VUE_APP_API}` + '/newplans/' + id
        const vm = this;
        vm.$http.get(api).then((response) => {
        if(response.data.success){
        vm.plan = response.data.result
        console.log(response.data.result)

          } 
        })
        },
    },
    mounted() {
      this.getNewplan();
    },
    created() {
      this.getNewplan();
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
      h3.eventDayTitle {
    border: solid 1px #dcdcdc;
}
h3.eventDayTitle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 0 auto 50px auto;
    padding: 0;
    border-radius: 50px;
    border: solid 1px gray;
}
.pageContent h3 {
    color: #000;
    font-family: "游明朝",YuMincho,"ヒラギノ明朝 ProN W3","Hiragino Mincho ProN","Sawarabi Mincho","HG明朝E","ＭＳ Ｐ明朝","ＭＳ 明朝",serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8em;
    margin: 2em 0 1em 0;
}
h2.eventSection {
    text-align: center;
    font-family: "EB Garamond",serif;
    font-size: 1.8rem;
    letter-spacing: .4em;
    text-indent: .4em;
    line-height: 1.4em;
    margin: 120px 0 70px 0;
}
.pageContent h2 {
     color: #555;
    font-family: "游明朝",YuMincho,"ヒラギノ明朝 ProN W3","Hiragino Mincho ProN","Sawarabi Mincho","HG明朝E","ＭＳ Ｐ明朝","ＭＳ 明朝",serif;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.8em;
    margin: 2em 0;
}
.eventDetail {
    margin-top: -2.5em;
    margin-bottom: 50px;
}
.pageContent {
    max-width: 1230px;
    margin: 0 auto 60px auto;
    color: #555;
}
.pageContent div.table table {
    width: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

.table table th {
    display: table-cell;
    padding: 2.5em 0;
    width: 22%;
    font-size: 17px;
}
table {
    display: table;
    box-sizing: border-box;
    text-indent: initial;
    border-color: grey;
     color: #555;
    
}
.table table td {
  font-size: 17px;
    display: block;
    padding: 1em 0 2.5em 0;
    line-height: 1.8em;
    word-break: break-all;
    display: table-cell;
    padding: 2.5em 0;
}
* {
    font-size: inherit;
    line-height: inherit;
}
    </style>