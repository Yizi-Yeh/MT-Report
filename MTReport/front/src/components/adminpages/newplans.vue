<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-dark d-none"  data-toggle="modal" data-target="#productModal"  @click="openModal(true)">建立新的開團</button>
    </div>
    <table class="table mt-4 table-sm">
      <thead>
        <tr class="text-center">
          <!-- <th width="100">開團編號</th> -->
          
          <!-- <th >行程分類</th> -->
          <th >行程名稱</th>
          <th >開團日程</th>
          <th >上架金額</th>
          <th >開團人數</th>
          <th >報名人數</th>
          <!-- <th width="100">尚餘人數</th> -->
          <th >募集狀況</th>
          <th >是否上架</th>
          <!-- <th width="100">是否上架</th> -->
          <th >編輯/刪除</th>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="(item) in newplans" :key="item._id">
          <!-- <td>{{ item._id }}</td> -->
          
          <!-- <td>{{ item.p_id.category }}</td> -->
          <td class="long-text" >{{ item.p_id.title }}</td>
          <td>{{ item.date }}</td>
          <td>NT${{ item.price }}</td>
          <td>{{ item.totalNumber }}</td>
          <td>{{ item.currentNumber }}</td>
          <!-- <td>{{ item.remainNumber }}</td> -->
          <td>
            <span v-if="item.is_closed" class="text-dark">額滿</span>
            <span v-else>募集中</span>
            <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          
        
          <td>
              <button class="btn btn-outline-success btn-sm rounded"
              @click="openModal(false, item)">編輯</button>
        <button @click="delNewPlans(item._id)"  class="btn btn-outline-danger rounded btn-sm">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
              <span>新增開團</span>
            </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div class="row">
              <div class="col-sm-12">
                
        <!-- <div class="form-group">
            <label for="PlansId">行程編號</label>
              <select name="" class="form-control" v-model="newplan.p_id._id">
                <option  v-for="id in getproductId" v-bind:value="getproductId.id" :key="id">
                  {{id}} 
            </option>
            </select>
          </div> -->

          <div class="form-group">
                  <label for="category">行程編號</label>
                  <input type="text" class="form-control" id="p_id"
                    v-model="newplan.p_id._id"
                    placeholder="請輸入活動編號">
                </div>

                <div class="form-group">
                  <label for="category">行程分類</label>
                  <input type="text" class="form-control" id="category"
                    v-model="newplan.p_id.category"
                    placeholder="請輸入活動分類">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="title">行程名稱</label>
                    <input type="text" class="form-control" id="title"
                      v-model="newplan.p_id.title"
                      placeholder="請輸入行程名稱">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="site">開團日程</label>
                    <input type="text" class="form-control" id="date"
                      v-model="newplan.date"
                      placeholder="請輸入開團日程">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="cost">上架金額</label>
                    <input type="text" class="form-control" id="price"
                      v-model="newplan.price"
                      placeholder="請輸入上架金額">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="time">開團人數</label>
                    <input type="text" class="form-control" id="totalNumber"
                      v-model="newplan.totalNumber"
                      placeholder="請輸入開團人數">
                  </div>
                </div>
                <hr>

                <!-- <div class="form-group">
                  <label for="introduction">報名人數</label>
                  <textarea type="text" class="form-control" id="currentNumber"
                    v-model="newplan.currentNumber"
                    placeholder="請輸入報名人數"></textarea>
                </div> -->
                <!-- <div class="form-group">
                  <label for="costinclude">尚餘人數</label>
                  <textarea type="text" class="form-control" id="remainNumber"
                    v-model="newplan.remainNumber"
                    placeholder="請輸入尚餘人數"></textarea>
                </div> -->
                <div class="form-group">
                  <label for="attention">請輸入募集狀況(true/false)</label>
                  <textarea type="text" class="form-control" id="is_closed"
                    v-model="newplan.is_closed"
                    placeholder="請輸入募集狀況(true/false)"></textarea>
                </div>   
                        
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model.trim="newplan.is_enabled"
                      :true-value="true"
                      :false-value="false"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否上架
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark" @click="addNewPlans()">確認</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import $ from 'jquery';
import Axios from 'axios'
import store from '@/store'


export default {
    data() {
        return {
            newplans:[
              {
                p_id:
                {
                _id:'',
                },
              }
                    ],
            newplan:{
                  p_id:{
              }
              },
            isNew: false,
        }
    },
    computed:{
    products() {
      return store.state.products
    },
    newplanswiper(){
      return store.state.newplans
    },
    },
    methods: {
        getNewPlans() {
        const api = `${process.env.VUE_APP_API}`+ '/newplans'
        const vm = this;
        Axios.get(api).then((response) => {
        // console.log(response.data)
        vm.newplans = response.data.result
        console.log(vm.newplans)
        })
        },
        delNewPlans(id) {
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        const vm = this;
        vm.$http.delete(api).then((response) => {
          const index = vm.newplans.findIndex( item => {
          console.log(id)
          return item._id === id 
          
          }) 
          // splice(index,1) 在index位置處刪除一個元素
          this.newplans.splice(index,1)
          })
        .catch(error => {
          console.log(error)
          alert(error.response.data.message)
        }) 
        },    
        // 修改
        addNewPlans() {
        let api = `${process.env.VUE_APP_API}`+ '/newplans'
        let httpMethod = 'post';
        console.log(api)
        const vm = this;
        if (!vm.isNew) {
          api = `${process.env.VUE_APP_API}`+ '/newplans/' + `${vm.newplan._id}`
          console.log(vm.newplan._id)
          console.log(api)
          httpMethod = 'put'
        } 
        vm.$http[httpMethod](api,vm.newplan).then((response) => {
        if(response.data.succuss) {
          // vm.plans.push(response.data.result)
          $('#productModal').modal('hide')
          vm.getNewPlans()
        } else {
            vm.getNewPlans();
          $('#productModal').modal('hide');
        } 
    })
    },
      openModal(isNew, item) {
      if (isNew) {
        this.newplan = {p_id:{}};
        this.isNew = true;
      } else {
        this.newplan = Object.assign({}, item);
        this.isNew = false;
      }
        $('#productModal').modal('show');
      },
    },
    created() {
        this.getNewPlans()
        store.dispatch('getProductsInfo')
        store.dispatch('getNewPlansInfo')
    }
}
</script>
<style lang="scss" scoped>
table{
   table-layout: fixed;
}
tr{
  white-space:nowrap;
}
.long-text {white-space:nowrap!important;overflow:hidden!important;text-overflow: ellipsis!important }

.btn-outline-success{
  border: 2px solid #c5d1cc;
  color:#c5d1cc ;
}


</style>