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
                     <img class="first-slide carousel-item-img" :src="`${plan.p_id.images[0].imgUrl}`" alt="First slide">
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
<div class="table eventDetail container">
  <div class="row">
          <table id="actDetail">
             <tr >
                <th class="act-container-title">活動名稱</th>
                <td class="act-container-txt">{{ plan.p_id.title }}</td>
              </tr>
               <tr >
                <th class="act-container-title">活動日程</th>
                <td class="act-container-txt">{{ plan.date }}</td>
              </tr>
              <tr>
                <th class="act-container-title">活動說明</th>
                <td class="act-container-txt">{{ plan.p_id.introduction  }}</td>
              </tr>
              <tr>
                <th class="act-container-title">位置</th>
                <td class="act-container-txt">{{ plan.p_id.site }}</td>
              </tr>
            <tbody>
              
              <tr>
                <th class="act-container-title">活動時間</th>
                <td class="act-container-txt">{{ plan.p_id.time }}</td>
              </tr>
               <tr>
                <th class="act-container-title">活動費用</th>
                <td class="act-container-txt">NT$ {{ plan.price }}</td>
              </tr>
              <tr>
                <th class="act-container-title">費用包含</th>
                <td class="act-container-txt">{{ plan.p_id.costinclude }}</td>
              </tr>
              <tr>
                <th class="act-container-title">注意事項</th>
                <td class="act-container-txt">{{ plan.p_id.attention }}</td>
              </tr>  
               <tr >
                <th class="act-container-title">條款細則</th>
                <td class="act-container-txt">
                  【報名即同意下列條款，請務必仔細閱讀】<br><br>
(1) 戶外活動屬特殊行程，需抽籤申請入山入園，且中籤後無法更換人員，需事先辦理入園證抽籤及入山證手續，中籤後有些活動不可更換人員，不同於一般旅遊活動可以任何人參加，及可任意更換人員。為保障活動隊如期出發及整團隊員權益，參加隊員需同意以本專案約定條款為遵守依據。因此並不適用旅遊業定型化契約，敬請體諒。<br><br>

(2) 請詳閱所參加活動相關行程內容、規定，完全瞭解同意後，再行決定報名。不論網路報名或電話報名，在報名或是繳交活動訂金或團費及參加人員名單的同時，即視同已經完全瞭解同意及完全瞭解所參加活動行程細節內容。<br><br>

(3) 瞭解戶外活動具有潛在之危險性，若發生意外會導致受傷或死亡。確定身體健康狀況良好，可適合從事攀登高山及野外健行活動，有心臟病、懼高症、高血壓、懷孕…等，不適合從事旅遊戶外活動等症狀者，或年齡過小及身體狀況無法獨自完成行程者，請勿報名參加。（身體狀況有疑慮者，請事先問過醫生同意後，再行報名。）<br><br>

(4) 瞭解並同意遵守活動相關規定，活動中，願意聽從領隊及嚮導人員之指導，隨時注意自身安全，並不危及他人安全。活動中請遵從教練指揮，勿擅自離隊。因個人體能、安全及團隊回返時間之考量，一切以教練指揮為原則。若中途擅自離隊，不聽勸阻，則所產生之費用和法律責任，由該離隊者自行承擔。若因個人疏失導致意外傷亡（踩空、失足…等），願自行負責。（含因個人身體不適，而未主動告知嚮導、領隊人員）不可歸責於MT10x10登山社(山來水去企業社)。<br><br>

(5) 同意戶外活動，「安全」為最高考量，所有活動行程只是預定，會因天候自然等人力不可抗拒之災害(颳風、冰雪、豪雨、坍方、隊員身體狀況…等)而改變，可能因此無法攻頂或需更改預定行程，並同意遵從領隊及嚮導在各種狀況下的決定事項，參加隊員不得議異。<br><br>

(6) 報名戶外活動，請自行衡量體力選擇參加，並請依活動性質及季節氣候需要，事先準備好各人活動中所需之裝備（禦寒衣物、頭燈、雨具…等）及器具（碗、筷、乾糧…等）。<br><br>

(7) MT10x10(山來水去企業社)活動團費皆包含200萬登山險或旅平險（不收團費之自費自理行程除外。）<br><br>

(8) 請自行攜帶個人藥品，以避免藥物過敏、副作用等問題。<br><br>

(9) 活動中，因個人因素（身體情況….等），無法繼續完成行程而撤退者，因之所產生的撤退費用需自理（人員支援、交通接駁….等），未完成行程，活動費用視同棄權無法退還。<br><br>

(10) 活動期間，如遇人力不可抗拒之災害(颳風、冰雪、豪雨、坍方….等)而無法完成行程時，領隊可變更行程或食宿，如因之有節省支出費用，則於回程後平均歸還隊員。若因之活動需增加或更改食宿或改乘其他交通工具…等，所超支之費用，由參加者平均支付。<br><br>

(11) 活動出發當日（包括之前），如遇各入山管理單位（警察局、國家公園…等）通知勸告不宜入山，或因人力不可抗拒之天然災害(颳風、冰雪、豪雨、坍方…等)而取消活動，扣除已支出支部分金額剩餘全額退費。<br><br>

(12) 出發後如遇各入山管理單位（警察局、國家公園…等）通知勸告不宜入山，或因人力不可抗拒之天然災害(颳風、冰雪、豪雨、坍方…等)而取消活動則行程取消並退費，如已經出團，需扣除相關衍生的車資，或其他費用，其餘部分退還，再退回活動餘款。<br><br>

(13) 活動需辦理入山証者，請於報名表中確實填寫真實資料，以便辦理。活動當日並需攜帶「身分證正本」備查，若無攜帶無法入山需自負責任。<br><br>

(14) MT10x10（山來水去企業社）各活動隊均會拍攝活動中照片、影片，可能會刊登社群媒體或網站上。參加隊員必須同意活動中的肖像，MT10x10 （山來水去企業社）擁有免費使用權。事後自願提供自拍活動照片給MT10x10刊登或欣賞者，也將視為同意MT10x10 （山來水去企業社）擁有免費使用權。<br><br>

(15) 活動人數未達最低開團人數，MT10x10 （山來水去企業社）得延期或退費，中籤後，若活動人數不足，可以補足最低開團人數全額費用，活動如期出發。<br><br>

(16) 活動人員中籤後，人數未達預定基本開車人數而無法成團，不得要求索取「入園証」自行前往，入園証因是使用MT10x10 （山來水去企業社）相關名稱及IP申請， MT10x10需承擔活動中任何事項，因此不是MT10x10 （山來水去企業社）所承辦的活動，是無法使用MT10x10 （山來水去企業社）所申請之入園証，敬請見諒。<br><br>

(17) 戶外氣候無常，需有心理準備，如遇天候風雨過大或持續，帳蓬會有吹走或進水、背包可能會淋濕…等，可能狀況發生，會將衣物、睡袋弄溼。請事先以塑膠袋，分袋打包好易溼衣物、食物、重要證件…等。<br><br>

(18) 報名活動如有不搭車、不住宿、不慶功、或自行開車登山口報到、住宿方式改變等等特殊需求，請於報名時就說明詢問指定，報名完成及抽籤後，請恕無法更動。<br><br>

(19) 行程開始前4-14天我們會在line群組發布行前手冊、裝備租借統計表、行前會時間地點、路線詳細介紹文章。<br><br>

(20) 行程中，若有夥伴發生足以危害生命安全之狀況，則全隊共同進退，不得異議，且因登山隊伍在法律上屬【危險共同體】，故全隊應共同進退！<br><br>
「不需抽籤之行程」退費機制：<br>
活動成行後，因個人因素取消或延期。<br>
1.出發前第31日以前取消者，收取行政費用200元<br>
2.出發前第15日至30日以內取消者，退總費用60%<br>
3.出發前第7日至14日以內取消者，退總費用40%<br>
4.出發前第3日至6日以內取消者，退總費用20%<br>
5.出發前3日內，恕無法退還任何費用<br>

「需抽籤之行程」退費機制：<br>
未成行或由我方取消出團<br>
可選擇全額保留到其他行程或退費<br>
人數不足以出團則全額退費<br>
未中籤自行取消退款須扣除＄200手續費<br>
管理處規定申請入山入園且中籤後『無法更換人員』<br>
為符合公平性原則並且保障全團出團權益<br>
抽中山屋後如人員因故不能成行<br>
將酌收行程總費用的50%<br>
當作取消費，以補足共攤費用<br>
出發前第31日以前取消者，退總費用50%<br>
出發前第15日至30日以內取消者，退總費用40%<br>
出發前第7日至14日以內取消者，退總費用30%<br>
出發前第3日至6日以內取消者，退總費用20%<br>
出發前3日內，恕無法退還任何費用<br>
                </td>
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
                   <h3 class="DayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                      <h3 class="DayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                    <h3 class="DayTitle">{{ plan.p_id.schedule[0].dateTime}}</h3>
                   <p>{{ plan.p_id.schedule[0].content}}</p>
            
          </div><!-- /.col-lg-4 -->

        
        </div><!-- /.row -->
        </div>
   <hr class="featurette-divider">
    <h2 class="act-flow" id="evFlow">餐食安排</h2>
   <div class="container">
        <div  class="row d-flex flex-row align-items-center justify-content-center">
          <div class="col-lg-3">
                      <h3 class="DayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
         <p>{{ plan.p_id.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-3">
                   <h3 class="DayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
         <p>{{ plan.p_id.meal[0].mealcontent}}</p>
          </div><!-- /.col-lg-4 -->
        <div class="col-lg-3">
               <h3 class="DayTitle">{{ plan.p_id.meal[0].mealdateTime}}</h3>
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