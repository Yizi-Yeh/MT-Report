<template>
<div>
        <tr v-for="(item) in images" :key="item.id">
          <td>{{ item.description }}</td>
          <td>{{ item.file }}</td>
          <td>{{ item.imgUrl }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <button class="btn btn-outline-primary btn-sm">編輯</button>
          </td>
        </tr>
  </div>
</template>

<script>
export default {
    data() {
        return {
            images:[],
        }
    },
    methods: {
        getImages() {
        const api = `${process.env.VUE_APP_API}/imgs`
        const vm = this;
        this.$http.get(api).then((response) => {
        console.log(response.data)
        vm.images = response.data.images
    })
        }
    },
    created() {
        getImages()
    }
}
</script>

