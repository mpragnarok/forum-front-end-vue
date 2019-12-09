<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import AdminRestaurantForm from './../components/AdminRestaurantForm.vue'

export default {
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      },
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data, statusText } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id,
          formData
        })
        if (statusText !== 'OK' || data.status !== 'success') {
          throw new Error(statusText)
        }
        this.$router.push({ name: 'admin-restaurants' })
      } catch (e) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: 'Not able to create restaurant'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const {
          data: { restaurant },
          statusText
        } = await adminAPI.restaurants.getDetail({ restaurantId })
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        // STEP 3: 將資料帶入 Vue 內
        this.restaurant = {
          ...this.restaurant,
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }
      } catch (e) {
        Toast.fire({
          icon: 'error',
          title: "Can't fetch restaurant data"
        })
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    // route change and re-fetch data
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>