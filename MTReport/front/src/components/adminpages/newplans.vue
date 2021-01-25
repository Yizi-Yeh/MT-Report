<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-dark"  data-toggle="modal" data-target="#productModal" @click="openModal(true)">建立新的開團</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="100">行程編號</th>
          <th width="100">行程分類</th>
          <th width="100">行程名稱</th>
          <th width="100">開團日程</th>
          <th width="100">上架金額</th>
          <th width="100">開團人數</th>
          <th width="100">報名人數</th>
          <th width="100">尚餘人數</th>
          <th width="100">募集狀況</th>
          <th width="100">是否上架</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="(item) in newplans" :key="item._id">
          <td>{{ item.p_id._id }}</td>
          <td>{{ item.p_id.category }}</td>
          <td>{{ item.p_id.title }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.totalNumber }}</td>
          <td>{{ item.currentNumber}}</td>
          <td>{{ item.remainNumber }}</td>
          <td>
            <span v-if="item.is_closed" class="text-dark">額滿</span>
            <span v-else>募集中</span>
           <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          
        
          <td>
              <button class="btn btn-outline-dark btn-sm"
              @click="openModal(false, item)">編輯</button>
        <button @click="delNewPlans(item._id)"  class="btn btn-outline-danger btn-sm">刪除</button>
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
                <div class="form-group">
                  <label for="category">行程編號</label>
                  <input type="text" class="form-control" id="p_id._id"
                    v-model="newplan.p_id._id"
                    placeholder="請輸入行程編號">
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

                <div class="form-group">
                  <label for="introduction">報名人數</label>
                  <textarea type="text" class="form-control" id="currentNumber"
                    v-model="newplan.currentNumber"
                    placeholder="請輸入報名人數"></textarea>
                </div>
                <div class="form-group">
                  <label for="costinclude">尚餘人數</label>
                  <textarea type="text" class="form-control" id="remainNumber"
                    v-model="newplan.remainNumber"
                    placeholder="請輸入尚餘人數"></textarea>
                </div>
                <div class="form-group">
                  <label for="attention">募集狀況</label>
                  <textarea type="text" class="form-control" id="is_closed"
                    v-model="newplan.is_closed"
                    placeholder="請輸入募集狀況"></textarea>
                </div>           
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="newplan.is_enabled"
                      :true-value="true"
                      :false-value="false"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      狀態
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
export default {
    data() {
        return {
            newplans:[
              {
                p_id:{
                  _id:''
                },
                _id:''
              }
            ],
            newplan:{
              _id:'',
              p_id:{
                 _id:''
              }
            },
            isNew: false,
            status: {
              fileUploading: false
            }
        }
    },
    methods: {
        getNewPlans() {
        const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer So8gvO9dez0CjdjBVN11XIDrDlyLioNXs2S6AMUlXIHVrsB2FC0nujBeQLI5'
        }
        const api = `${process.env.VUE_APP_API}`+ '/newplans'
        const vm = this;
        Axios.get(api,{headers}).then((response) => {
        // console.log(response.data)
        vm.newplans = response.data.result
        console.log(vm.newplans)
        })
        },
        getNewPlan() {
        const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer So8gvO9dez0CjdjBVN11XIDrDlyLioNXs2S6AMUlXIHVrsB2FC0nujBeQLI5'
        }
        const id = this.$route.params.id;
        const api = `${process.env.VUE_APP_API}` + '/newplans/' + id
        const vm = this;
        vm.$http.get(api,{headers}).then((response) => {
        if(response.data.success){
        vm.newplan = response.data.result
        console.log(vm.newplan)
          } 
        })
        },
        // 在products中找到id並刪除
        delNewPlans(id) {
        const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer So8gvO9dez0CjdjBVN11XIDrDlyLioNXs2S6AMUlXIHVrsB2FC0nujBeQLI5'
        }
        const api = `${process.env.VUE_APP_API}`+ '/newplans/' + id
        const vm = this;
        vm.$http.delete(api,{headers}).then((response) => {
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
        const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer So8gvO9dez0CjdjBVN11XIDrDlyLioNXs2S6AMUlXIHVrsB2FC0nujBeQLI5'
        }  
        let api = `${process.env.VUE_APP_API}`+ '/newplans'
        let httpMethod = 'post';
        const vm = this;
        if (!vm.isNew) {
          api = `${process.env.VUE_APP_API}`+ '/newplans/' + `${vm.newplan._id}`
          httpMethod = 'put'
        } 
        this.$http[httpMethod](api, vm.newplan,{headers}).then((response) => {
        if(response.data.succuss) {
          console.log(vm.newplan)
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
        this.newplan = {};
        this.isNew = true;
      } else {
        // 將item值寫入空物件
        this.newplan = Object.assign({}, item);
        this.isNew = false;
      }
        $('#productModal').modal('show');
      },
    },
    created() {
        this.getNewPlans()
        this.getNewPlan()
    }
}
</script>