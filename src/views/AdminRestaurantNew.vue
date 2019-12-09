<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        // 透過 restaurants.create 方法來向伺服器建立餐廳
        const { data, statusText } = await adminAPI.restaurants.create({
          formData
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        // 成功的話則轉址到 `/admin/restaurants`
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: "Can't create restaurant"
        })
      }
    }
  }
}
</script>