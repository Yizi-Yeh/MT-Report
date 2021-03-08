<template>
<div>
  <Navbar/>
  <h2 class="act-flow">活動確認</h2>
     <div class="container">
<div class="table container mt-5">
    <div class="ly_middle d-flex flex-row ">
           <div class="col-7">
          <table id="actDetail">
             <tr >
                <th>活動名稱</th>
                <td>{{ order.p_id.title }}</td>
              </tr>
               <tr >
                <th>活動日程</th>
                <td>{{ order.date }}</td>
              </tr>    
            <tbody>    
              <tr>
                <th>活動時間</th>
                <td>{{ order.p_id.time }}</td>
              </tr>
               <tr>
                <th>活動費用</th>
                <td>NT$ {{ order.price }}</td>
              </tr>      
            </tbody>
          </table>
        </div>
        <div class="col-4">
            <img  :src="`${order.p_id.images[0].imgUrl}`" width="400">
            </div>
          </div>
         </div>
  </div>

  

  <h2 class="act-flow">填寫報名表單</h2>
    <div class="container marketing  text-center border-3">

     <div class="my-5 row justify-content-center ">
       <validation-observer v-slot="{ invalid }"  >
       <form  @submit.prevent="createOrder(order._id)">
         
      
 <div class="row form-01">
   <div class="col-6">
    <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group ">
     <label for="name">姓名</label>
      <input id="name" type="text" name="姓名欄位"  v-model="form.name"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
    </div>


    <validation-provider rules="required|email" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="email">Email</label>
      <input id="email" type="email" name="Email欄位"  v-model="form.email"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors[0] }}</span>
    </div>
    </validation-provider>
</div>

 <div class="row  form-02">
  <div class="col-6">
<validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="lineId">LINE ID</label>
      <input id="lineId" type="text" name="LINE ID欄位"  v-model="form.lineId"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
<validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="lineName">LINE 名稱</label>
      <input id="lineName" type="text" name="LINE 名稱欄位"  v-model="form.lineName"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>

<div class="row form-03">
  <div class="col-6">
    <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="gender">性別</label>
      <input id="gender" type="text" name="性別欄位"  v-model="form.gender"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
    <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="birth">出生年月日(year/month/day)</label>
      <input id="birth" type="text" name="出生年月欄位"  v-model="form.birth"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>

<div class="row form-04">
  <div class="col-6">
    <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="country">國籍</label>
      <input id="country" type="text" name="國籍欄位"  v-model="form.country"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
            <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="blood">血型</label>
      <input id="blood" type="text" name="血型欄位"  v-model="form.blood"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>

<div class="row form-05">
  <div class="col-6">
<validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="identityNumber">身份證字號</label>
      <input id="identityNumber" type="text" name="身份證號欄位"  v-model="form.identityNumber"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
                    <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="cellNumber">聯絡電話</label>
      <input id="cellNumber" type="text" name="聯絡電話欄位"  v-model="form.cellNumber"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
     <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="address">地址</label>
      <input id="address" type="text" name="地址欄位"  v-model="form.address"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>

<div class="row form-06">
  <div class="col-6">
 <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="emergency">緊急聯絡人</label>
      <input id="emergency" type="text" name="緊急連絡人欄位"  v-model="form.emergency"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
     <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="emergeRelationship">緊急聯絡人關係</label>
      <input id="emergeRelationship" type="text" name="緊急連絡人關係欄位"  v-model="form.emergeRelationship"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>

<div class="row form-07">
  <div class="col-6">
 <validation-provider v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="eatingHabits">飲食習慣</label>
      <input id="eatingHabits" type="text" name="飲食習慣欄位"  v-model="form.eatingHabits"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>
                                <validation-provider v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="disease">重大疾病</label>
      <input id="disease" type="text" name="重大疾病欄位"  v-model="form.disease"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>
</div>

 <validation-provider v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="climbExperience">登山經驗</label>
      <input id="climbExperience" type="text" name="登山經驗欄位"  v-model="form.climbExperience"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>

                            <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group form">
     <label for="paidprice">匯款金額</label>
      <input id="paidprice" type="text" name="匯款金額欄位"  v-model="form.paidprice"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>

 <validation-provider rules="required" v-slot="{ errors, classes }">
    <!-- 輸入框 -->
    <div class="form-group">
     <label for="paidate">匯款日期</label>
      <input id="paidate" type="text" name="匯款日期欄位"  v-model="form.paidate"
      class="form-control" :class="classes">
  <!-- 錯誤訊息 -->
   <span class="invalid-feedback">{{ errors }}</span>
    </div>
    </validation-provider>

<validation-provider>
          <div class="form-group">
            <label for="useraddress">相關疑問</label>
            <textarea name="" id="" class="form-control" cols="30" rows="10"
              v-model="form.message"></textarea>
          </div>
              </validation-provider>

          <div class="text-right">
            <button  class="btn btn-danger" :disabled="invalid">送出報名資料</button>
          </div> 
        </form>
        
        </validation-observer>
        </div>
    </div>
  </div>
</template>

<script>

import Navbar from '../Navbar'
import store from '@/store'
import Vue from 'vue'
import Axios from 'axios'
export default {
  name: 'UsersOrder',
  components: {
    Navbar,
    },
  data () {
    return {
      order:
        {
          _id:'',
          p_id:{
            images:[{
              file:'',
              imgUrl:'',
            }],
            title:'',
            time:''
          }
        }
      ,
      form: {
            name: '',
            lineId:'',
            lineName:'',
            gender:'',
            birth:'',
            country:'',
            blood:'',
            identityNumber:'',
            cellNumber:'',
            email: '',
            address:'',
            emergency:'',
            emergeRelationship:'',
            eatingHabits:'',
            disease:'',
            climbExperience:'',
            paidprice:'',
            paidate:'',
            message:''
          },
        }
  },
  computed: {
    user () {
      return store.state.user
    },
    products() {
      return store.state.products
    },
    newplanswiper(){
      return store.state.newplans
    },
    Order() {
        return store.getters.orders
    },
  },
    methods: {
      // 取得開團資料
        getNewPlan() {
        const id = this.$route.params.id;
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        Axios.get(api).then((response) => {
        this.order = response.data.result 
        console.log('已取得開團資料',response.data.result )
        })
        },

      // 自動增加報名人數
        addCurrentNum() {
        const id = this.$route.params.id;
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        Axios.patch(api).then((response) => {
        if(response.data.success){
            console.log('已增加報名人數',response.data.result)
            // 已增加報名人數
          }        
        })
        },
      // 建立會員表單
        createUserDetail() {
        const userDetail = this.form;
        const api = `${process.env.VUE_APP_API}`+ '/userdetails/order/' + `${this.user.id}`
        Axios.post(api,userDetail).then((response) => {
        console.log('已建立會員資料',response.data.result)
        })
        },
      // 建立訂單
        createOrder () {
        const id = this.$route.params.id;
        const api = `${process.env.VUE_APP_API}`+ '/users/order/'+ `${this.user.id}`
            Axios.patch(api,{p_id:id}).then((response) => {
            if(response.data.success){
              this.$swal({
                icon: 'success',
                title: '報名成功，請確認您的報名資料'
              })
              .then(() => {
            this.createUserDetail()
            this.addCurrentNum()
            console.log('已建立訂單', response.data.result);
            this.$router.push('/order/'+ id + '/' + `${this.user.id}` )
              })
          } 
        })
      },
    },
    created() {
    this.getNewPlan()
    store.dispatch('getProductsInfo')
    store.dispatch('getNewPlansInfo')
    }
}
</script>
