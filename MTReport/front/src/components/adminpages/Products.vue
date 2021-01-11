<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-dark"  data-toggle="modal" data-target="#productModal">建立新的行程</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr class="text-center">
          <th width="100">活動分類</th>
          <th width="100">活動名稱</th>
          <th width="100">活動地點</th>
          <th width="100">活動成本</th>
          <th width="100">活動時間</th>
          <th width="100">活動說明</th>
          <th width="100">費用包含</th>
          <th width="100">注意事項</th>
          <th width="100">活動圖片</th>
          <th width="100">是否啟用</th>
          <th width="80">編輯</th>
        </tr>
      </thead>
      <tbody  class="text-center">
        <tr v-for="(item) in plans" :key="item._id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.site }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.introduction}}</td>
          <td>{{ item.costinclude}}</td>
          <td>{{ item.attention}}</td>
          <td><img :src= item.images[0].imgUrl width="100"></td>
        
          <td>
            <span v-if="item.is_enabled" class="text-dark">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-dark btn-sm">編輯</button>
            <!-- 因為刪除用id刪，所以把id傳入 -->
             <button @click="delProducts(item._id)"  class="btn btn-outline-danger btn-sm">刪除</button>
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
              <span>新增行程</span>
            </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="image">輸入圖片網址</label>
                  <input type="text" class="form-control" id="imgUrl"
                    v-model="tempProduct.imgUrl"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control"
                    ref="files">
                </div>
                <img img="https://mt10x10.wordpress.com/2020/12/29/aqua_forest/"
                  class="img-fluid" :src="tempProduct.imgUrl" alt="">
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="category">活動分類</label>
                  <input type="text" class="form-control" id="category"
                    v-model="tempProduct.category"
                    placeholder="請輸入活動分類">
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="title">活動標題</label>
                    <input type="text" class="form-control" id="title"
                      v-model="tempProduct.title"
                      placeholder="請輸入活動標題">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="site">活動地點</label>
                    <input type="text" class="form-control" id="site"
                      v-model="tempProduct.site"
                      placeholder="請輸入地點">
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-md-6">
                  <label for="cost">活動成本</label>
                    <input type="number" class="form-control" id="cost"
                      v-model="tempProduct.cost"
                      placeholder="請輸入活動成本">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="time">活動時間</label>
                    <input type="text" class="form-control" id="time"
                      v-model="tempProduct.time"
                      placeholder="請輸入活動時間">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="introduction">活動說明</label>
                  <textarea type="text" class="form-control" id="introduction"
                    v-model="tempProduct.introduction"
                    placeholder="請輸入活動說明"></textarea>
                </div>
                <div class="form-group">
                  <label for="costinclude">費用包含</label>
                  <textarea type="text" class="form-control" id="costinclude"
                    v-model="tempProduct.costinclude"
                    placeholder="請輸入費用包含事項"></textarea>
                </div>
                <div class="form-group">
                  <label for="attention">注意事項</label>
                  <textarea type="text" class="form-control" id="attention"
                    v-model="tempProduct.attention"
                    placeholder="請輸入注意事項"></textarea>
                </div>
                <div class="form-group">
                  <label for="attention">行程安排</label>
                  <textarea type="text" class="form-control mb-3" id="attention"
                    v-model="tempProduct.attention"
                    placeholder="請輸入行程安排日程"></textarea>

                    <textarea type="text" class="form-control" id="attention"
                    v-model="tempProduct.attention"
                    placeholder="請輸入行程安排內容"></textarea>
                </div>
                <div class="form-group">
                  <label for="attention">餐食安排</label>
                  <textarea type="text" class="form-control mb-3" id="attention"
                    v-model="tempProduct.attention"
                    placeholder="餐食安排請輸入日程"></textarea>

                    <textarea type="text" class="form-control" id="attention"
                    v-model="tempProduct.attention"
                    placeholder="餐食安排請輸入內容"></textarea>
                </div>
                
                <div class="form-group">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled"
                      :true-value="true"
                      :false-value="false"
                      id="is_enabled">
                    <label class="form-check-label" for="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark" @click="uploadProduct">確認</button>
          </div>
        </div>
      </div>
    </div>
   </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            plans:[],
            tempProduct:{},
        }
    },
    methods: {
        getProducts() {
        const api = `${process.env.VUE_APP_API}`+ '/products/'
        const vm = this;
        this.$http.get(api).then((response) => {
        console.log(response.data)
       vm.plans = response.data.result
       })
        },
        // 在products中找到id並刪除
        delProducts(id) {
        const api = `${process.env.VUE_APP_API}`+ '/products/' +id
        console.log(api)
        const vm = this;
        this.$http.delete(api).then((response) => {
         const index = vm.plans.findIndex( item => {
         return plans._id = id 
          })
          vm.plans.splice(index,1)
          })
        .catch(error => {
          console.log(error.response.data)
        }) 
        },    
        uploadProduct() {
        const api = `${process.env.VUE_APP_API}`+ '/products/'
        const vm = this;
        this.$http.post(api, { data: vm.tempProduct }).then((response) => {
        console.log(response.data);
        if(response.data.success) {
          vm.getProducts()
          $('#productModal').modal('hide')
        } else {
          vm.getProducts()
             $('#productModal').modal('hide')
          console.log('新增失敗')
        }
         console.log(tempProduct)
        // vm.plans = response.data.result
    })
    },
    // 等待axios完成後
        Modal() {
        $('#productModal').modal('show')
        },
    },
    mounted() {
        this.getProducts()
    },
   

}
</script>

