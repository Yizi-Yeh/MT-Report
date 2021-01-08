<template>
<div>
<div class="text-right mt-4">
      <button class="btn btn-primary">建立新的產品</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">活動分類</th>
          <th width="120">活動名稱</th>
          <th width="120">地點</th>
          <th width="120">費用</th>
          <th width="120">活動說明</th>
          <th width="80">費用包含</th>
          <th width="80">注意事項</th>
          <th width="80">是否上架</th>
          <th width="80">活動圖片</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in plans" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
           <td>{{ item.site }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.images }}</td>
          <td class="text-right">
            {{ item.origin_price}}
          </td>
          <td class="text-right">
            {{ item.price}}
          </td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            plans:[],
        }
    },
    methods: {
        getProducts() {
        const api = `${process.env.VUE_APP_API}/products`
        const vm = this;
        this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.plans = response.data.result
    })
        }
    },
    created() {
        this.getProducts()
    }
}
</script>

